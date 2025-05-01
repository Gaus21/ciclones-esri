import Slider from "@arcgis/core/widgets/Slider";

export const defineActions = (event) => {
    var item = event.item;
    if (item.parent) {
        const slider = new Slider({
            min: 0,
            max: 1,
            precision: 2,
            values: [item.layer.opacity],
            visibleElements: {
                labels: true,
                rangeLabels: true
            }
        });

        item.panel = {
            content: slider,
            className: "esri-icon-sliders-horizontal",
            title: "Change layer opacity"
        };

        slider.on("thumb-drag", (event) => {
            const { value } = event;
            item.layer.opacity = value;
        });
    }

}
