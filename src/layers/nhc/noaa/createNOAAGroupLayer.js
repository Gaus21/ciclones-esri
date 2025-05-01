import TileLayer from "@arcgis/core/layers/TileLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import ImageryLayer from "@arcgis/core/layers/ImageryLayer";
import WMSLayer from "@arcgis/core/layers/WMSLayer";
import MediaLayer from "@arcgis/core/layers/MediaLayer";
import ImageElement from "@arcgis/core/layers/support/ImageElement";
import ExtentAndRotationGeoreference from "@arcgis/core/layers/support/ExtentAndRotationGeoreference";
import Extent from "@arcgis/core/geometry/Extent";

// Define a function to create a new instance of the GroupLayer
export function createNOAAGroupLayer() {

    const imageUrlABI = "https://satellitemaps.nesdis.noaa.gov/arcgis/rest/services/Most_Recent_ABIGC/ImageServer/exportImage?f=image&bbox=-151.451,-76.5452,1.532,76.5379&imageSR=4326&bboxSR=4326&size=3483,3483";


    const templateAB = {
        // autocasts as new PopupTemplate()
        title: "ABI GeoColor Layer",
        content: [
            {
                // It is also possible to set the fieldInfos outside of the content
                // directly in the popupTemplate. If no fieldInfos is specifically set
                // in the content, it defaults to whatever may be set within the popupTemplate.
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "name",
                        label: "Nombre"
                    },
                    {
                        fieldName: "Start_time",
                        label: "Hora Inicial"
                    },
                    {
                        fieldName: "End_time",
                        label: "Hora Final"
                    }
                ]
            }
        ]
    };

    const imageElementABI = new ImageElement({
        image: imageUrlABI,
        georeference: new ExtentAndRotationGeoreference({
            extent: new Extent({
                spatialReference: {
                    wkid: 4326
                },
                xmin: -151.371,
                ymin: -64.497,
                xmax: 1.732,
                ymax: 63.207
            })
        })
    });



    const imageServiceLayer2a = new TileLayer({
        portalItem: {
            id: "37a875ff3611496883b7ccca97f0f5f4",
        },
        opacity: 0.35,
        visible: false,
        title: "GOES Satellite Imagery Colorized",
    });


    var imageServiceLayer2 = new MapImageLayer({
        //url: "https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer",
        url: "https://mapservices.weather.noaa.gov/eventdriven/rest/services/radar/radar_base_reflectivity/MapServer",
        opacity: 0.5,
        sublayers: [
            {
                id: 3,
                title: "Weather Radar Base Reflectivity Mosaic"
            }],
        visible: false,
        title: "Recent Weather Radar Imagery"
    });




    // create a media layer with the image element as the source
    const mediaLayerABI = new MediaLayer({
        source: [imageElementABI],
        title: "ABI Geocolor Alterna",
        opacity: 0.8,
        visible: false
    });

    //Capa de servicios WMS de NOAA NESDIS Geostationary Satellite Imagery
    var wmsLayerGV = new WMSLayer({
        url: "https://nowcoast.noaa.gov/geoserver/observations/satellite/ows?SERVICE=WMS&VERSION=1.3.0",
        opacity: 0.7,
        sublayers: [{
            name: "global_visible_imagery_mosaic",
            title: "Global Satellite Visible Imagery"
        },
        {
            name: "global_water_vapor_imagery_mosaic",
            title: "Global Satellite Water Vapor Imagery",
            visible: false
        },
        {
            name: "global_longwave_imagery_mosaic",
            title: "Global Satellite Longwave Imagery",
            visible: false
        },
        {
            name: "global_shortwave_imagery_mosaic",
            title: "Global Satellite Shortwave Imagery",
            visible: false
        }],
        visible: false,
        title: "NOAA NESDIS Geostationary Weather Satellite Imagery"
    });

    var imageryLayer = new ImageryLayer({
        url: "https://satellitemaps.nesdis.noaa.gov/arcgis/rest/services/Most_Recent_ABIGC/ImageServer",
        //url: "https://satellitemaps.nesdis.noaa.gov/arcgis/rest/services/Most_Recent_MERGEDGC/ImageServer", 
        format: "jpgpng", // server exports in either jpg or png format
        opacity: 0.80,
        popupEnabled: true,
        popupTemplate: templateAB,
        visible: false,
        title: "Most Recent ABI GeoColor"
    });



    return new GroupLayer({
        title: "Servicios NOAA",
        visible: true,
        visibilityMode: "independent",
        layers: [wmsLayerGV, mediaLayerABI, imageryLayer, imageServiceLayer2a, imageServiceLayer2],
    });
}