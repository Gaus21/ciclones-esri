import React, { useRef, useEffect } from "react";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from "@arcgis/core/widgets/Expand";
import LayerList from "@arcgis/core/widgets/LayerList";
import "../App.css";
import { defineActions } from "../helpers.js/mapOperations";
import { createNOAAGroupLayer } from "../layers/nhc/noaa/createNOAAGroupLayer";
import { createCiclonsGroupLayers } from "../layers/nhc/createCiclonsGroupLayers";
import { printMap } from "../helpers.js/printMap";

export default function Map() {
  const mapDiv = useRef(null);

  useEffect(() => {
    // Create a new instance of the GroupLayer
    const sNOAAGroupLayer = createNOAAGroupLayer();
    const ciclonsGroupLayer = createCiclonsGroupLayers();

    // Create a WebMap and add the GroupLayer
    const webMap = new WebMap({
      basemap: "topo-vector",
      layers: [sNOAAGroupLayer, ciclonsGroupLayer], // Add the GroupLayer to the WebMap
    });

    // Initialize the MapView
    const view = new MapView({
      container: mapDiv.current,
      map: webMap,
      center: [-100.33, 25.69], // Example coordinates
      zoom: 5,
    });

    // Add BasemapGallery inside an Expand widget
    const basemapGallery = new BasemapGallery({
      view: view,
    });

    const expand = new Expand({
      view: view,
      content: basemapGallery,
      expandIconClass: "esri-icon-basemap", // Optional: Icon for the expand widget
      expanded: false, // Initially collapsed
    });

    view.ui.add(expand, "top-left"); // Add the Expand widget to the top-right corner

    // Add LayerList functionality
    view.when(function () {
      // Create the LayerList widget
      const layerList = new LayerList({
        view: view,
        listItemCreatedFunction: defineActions, // Executes for each ListItem in the LayerList
      });

      // Event listener for actions triggered in the LayerList
      layerList.on("trigger-action", function (event) {
        const id = event.action.id;
        const nlayer = event.action.layer;

        if (id === "increase-opacity") {
          // Increase the opacity of the layer
          if (nlayer.opacity < 1) {
            nlayer.opacity += 0.1;
          }
        } else if (id === "decrease-opacity") {
          // Decrease the opacity of the layer
          if (nlayer.opacity > 0) {
            nlayer.opacity -= 0.1;
          }
        }
      });

      // Add the LayerList inside an Expand widget
      const bgExpand2 = new Expand({
        view: view,
        content: layerList,
      });

      // Add the Expand widget to the top-leading corner of the view
      view.ui.add(bgExpand2, "top-left");
    });

    // Add the print widget
    printMap(view);


    return () => {
      // Cleanup the MapView when the component unmounts
      if (view) {
        view.destroy();
      }
    };
  }, []);

  return <div ref={mapDiv} style={{ width: "100%", height: "100%" }} />;
}