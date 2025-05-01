import Print from "@arcgis/core/widgets/Print";
import Expand from "@arcgis/core/widgets/Expand";

export function printMap(view) {
  // Create a Print widget
  const printWidget = new Print({
    view: view,
    printServiceUrl:
      "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task",
    templateOptions: {
      //layout: "map-only",
      format: "gif",
      title: "condiciones",
      fileName: "condiciones",
      dpi: 140,
      width: 3210,
      height: 1580,
      showLabels: true
    }
  });

  // Wrap the Print widget in an Expand widget
  const printExpand = new Expand({
    view: view,
    content: printWidget,
    expandIconClass: "esri-icon-printer", // Optional: Icon for the expand widget
    expanded: false, // Initially collapsed
  });

  // Add the Expand widget to the map's UI
  view.ui.add(printExpand, "top-leading"); // Add to the top-right corner
}