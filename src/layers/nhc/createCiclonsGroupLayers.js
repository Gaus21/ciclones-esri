import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";


export const createCiclonsGroupLayers = () => {
    // Existing code...
    const labelClassTCx = {
        // autocasts as new LabelClass()
        symbol: {
            type: "text", // autocasts as new TextSymbol()
            color: "black",
            haloColor: "white",
            haloSize: 1.5,
            font: {
                // autocast as new Font()
                family: "Arial",
                size: 12
                //weight: "bold"
            },
            xoffset: "0",
            yoffset: "10"
        },
        deconflictionStrategy: "static",
        labelPlacement: "above-center",
        labelExpressionInfo: {
            expression: "$feature.stormname + TextFormatting.NewLine + $feature.datelbl"
        },
        maxScale: 0,
        minScale: 0,
        where: "tau = 0"
    };

    const labelClassTC2x = {
        // autocasts as new LabelClass()
        symbol: {
            type: "text", // autocasts as new TextSymbol()
            color: "black",
            haloColor: "white",
            haloSize: 1.5,
            font: {
                // autocast as new Font()
                family: "Arial",
                size: 10
                //weight: "bold"
            },
            xoffset: "0",
            yoffset: "-5"
        },
        deconflictionStrategy: "static",
        labelPlacement: "above-center",
        labelExpressionInfo: {
            expression: "$feature.datelbl"
        },
        maxScale: 0,
        minScale: 0
    };

    var layerCiclonT1 = new MapImageLayer({
        //url: "https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer",
        //url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/NHC_Atl_trop_cyclones_active/MapServer",
        url: "https://mapservices.weather.noaa.gov/tropical/rest/services/tropical/NHC_tropical_weather_summary/MapServer",
        /*portalItem: {
              id: "1b79babfbcb043f689b57d1ec50fe79f"
          },*/

        opacity: 0.6,
        sublayers: [
            {
                id: 7,
                renderer: {
                    type: "simple", // autocasts as new SimpleRenderer()
                    symbol: {
                        type: "simple-fill", // autocasts as new SimpleMarkerSymbol()
                        //style: "square",
                        color: "rgba(255,255,255,0.7)",
                        //size: 6,
                        outline: {
                            color: "white",
                            width: 1
                        }
                    }
                },
                //definitionExpression: "basin = 'EP'",
                title: "Tropical Cyclone Cone of Uncertainty for Track Forecasts"
            },
            {
                id: 15,
                visible: false,
                //definitionExpression: "basin = 'AL'",
                //labelsVisible: true,
                //labelingInfo: [labelClassTCx, labelClassTC2x],
                title: "Forecast Wind Radii"
            },
            {
                id: 6,
                //definitionExpression: "basin = 'EP'",
                title: "Tropical Cyclone Track Line Forecasts"
            },
            {
                id: 5,
                //definitionExpression: "basin = 'EP'",
                labelsVisible: true,
                labelingInfo: [labelClassTCx, labelClassTC2x],
                title: "Tropical Cyclone Center Position Forecasts"
            }],
        visible: false,
        title: "Ciclones Tropicales Gral"
    });

    //////////////////////////// A T 1 //////////////////////////////////////////

    var layerAL1 = new MapImageLayer({
        //url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/NHC_Atl_trop_cyclones_active/MapServer/17",
        url: "https://mapservices.weather.noaa.gov/tropical/rest/services/tropical/NHC_tropical_weather/MapServer",
        opacity: 0.6,
        sublayers: [
            {
                id: 19,
                visible: false,
                //labelingInfo: [labelClassTCx, labelClassTC2x],
                opacity: 0.6,
                title: "Earliest Reasonable Arrival Time"
            },
            {
                id: 20,
                visible: false,
                //labelingInfo: [labelClassTCx, labelClassTC2x],
                opacity: 0.6,
                title: "Most Likely Arrival Time"
            },
            {
                id: 8,
                renderer: {
                    type: "simple", // autocasts as new SimpleRenderer()
                    symbol: {
                        type: "simple-fill", // autocasts as new SimpleMarkerSymbol()
                        //style: "square",
                        color: "rgba(255,255,255,0.7)",
                        //size: 6,
                        outline: {
                            color: "white",
                            width: 1
                        }
                    }
                },
                definitionExpression: "basin = 'AL'",
                title: "Tropical Cyclone Cone of Uncertainty for Track Forecasts"
            },
            {
                id: 16,
                definitionExpression: "basin = 'AL'",
                labelsVisible: true,
                //labelingInfo: [labelClassTCx, labelClassTC2x],
                title: "Forecast Wind Radii"
            },
            {
                id: 7,
                definitionExpression: "basin = 'AL'",
                title: "Tropical Cyclone Track Line Forecasts"
            },
            {
                id: 6,
                definitionExpression: "basin = 'al'",
                labelsVisible: true,
                labelingInfo: [labelClassTCx, labelClassTC2x],
                title: "Tropical Cyclone Center Position Forecasts"
            }],
        visible: true,
        title: "A T 1"
    });

    //////////////////////////// A T 2 //////////////////////////////////////////

    var layerAL2 = new MapImageLayer({
        //url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/NHC_Atl_trop_cyclones_active/MapServer/17",
        url: "https://mapservices.weather.noaa.gov/tropical/rest/services/tropical/NHC_tropical_weather/MapServer",
        opacity: 0.6,
        sublayers: [
            {
                id: 45,
                visible: false,
                //labelingInfo: [labelClassTCx, labelClassTC2x],
                opacity: 0.6,
                title: "Earliest Reasonable Arrival Time"
            },
            {
                id: 46,
                visible: false,
                //labelingInfo: [labelClassTCx, labelClassTC2x],
                opacity: 0.6,
                title: "Most Likely Arrival Time"
            },
            {
                id: 34,
                renderer: {
                    type: "simple", // autocasts as new SimpleRenderer()
                    symbol: {
                        type: "simple-fill", // autocasts as new SimpleMarkerSymbol()
                        //style: "square",
                        color: "rgba(255,255,255,0.7)",
                        //size: 6,
                        outline: {
                            color: "white",
                            width: 1
                        }
                    }
                },
                definitionExpression: "basin = 'AL'",
                title: "Tropical Cyclone Cone of Uncertainty for Track Forecasts"
            },
            {
                id: 42,
                definitionExpression: "basin = 'al'",
                labelsVisible: true,
                //labelingInfo: [labelClassTCx, labelClassTC2x],
                opacity: 0.6,
                title: "Forecast Wind Radii"
            },
            {
                id: 33,
                definitionExpression: "basin = 'AL'",
                title: "Tropical Cyclone Track Line Forecasts"
            },
            {
                id: 32,
                definitionExpression: "basin = 'AL'",
                labelsVisible: true,
                labelingInfo: [labelClassTCx, labelClassTC2x],
                title: "Tropical Cyclone Center Position Forecasts"
            }],
        visible: true,
        title: "A T 2"
    });

    //////////////////////////// A T 3 //////////////////////////////////////////

    var layerAL3 = new MapImageLayer({
        //url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/NHC_Atl_trop_cyclones_active/MapServer/17",
        url: "https://mapservices.weather.noaa.gov/tropical/rest/services/tropical/NHC_tropical_weather/MapServer",
        opacity: 0.6,
        sublayers: [
            {
                id: 71,
                visible: false,
                //labelingInfo: [labelClassTCx, labelClassTC2x],
                opacity: 0.6,
                title: "Earliest Reasonable Arrival Time"
            },
            {
                id: 72,
                visible: false,
                //labelingInfo: [labelClassTCx, labelClassTC2x],
                opacity: 0.6,
                title: "Most Likely Arrival Time"
            },
            {
                id: 60,
                renderer: {
                    type: "simple", // autocasts as new SimpleRenderer()
                    symbol: {
                        type: "simple-fill", // autocasts as new SimpleMarkerSymbol()
                        //style: "square",
                        color: "rgba(255,255,255,0.7)",
                        //size: 6,
                        outline: {
                            color: "white",
                            width: 1
                        }
                    }
                },
                definitionExpression: "basin = 'AL'",
                title: "Tropical Cyclone Cone of Uncertainty for Track Forecasts"
            },
            {
                id: 68,
                definitionExpression: "basin = 'AL'",
                labelsVisible: true,
                //labelingInfo: [labelClassTCx, labelClassTC2x],
                title: "Forecast Wind Radii"
            },
            {
                id: 59,
                definitionExpression: "basin = 'AL'",
                title: "Tropical Cyclone Track Line Forecasts"
            },
            {
                id: 58,
                definitionExpression: "basin = 'AL'",
                labelsVisible: true,
                labelingInfo: [labelClassTCx, labelClassTC2x],
                title: "Tropical Cyclone Center Position Forecasts"
            }],
        visible: true,
        title: "A T 3"
    });

    //////////////////////////// A T 4 //////////////////////////////////////////

    var layerAL4 = new MapImageLayer({
        //url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/NHC_Atl_trop_cyclones_active/MapServer/17",
        url: "https://mapservices.weather.noaa.gov/tropical/rest/services/tropical/NHC_tropical_weather/MapServer",
        opacity: 0.6,
        sublayers: [
            {
                id: 97,
                visible: false,
                //labelingInfo: [labelClassTCx, labelClassTC2x],
                opacity: 0.6,
                title: "Earliest Reasonable Arrival Time"
            },
            {
                id: 98,
                visible: false,
                //labelingInfo: [labelClassTCx, labelClassTC2x],
                opacity: 0.6,
                title: "Most Likely Arrival Time"
            },
            {
                id: 86,
                renderer: {
                    type: "simple", // autocasts as new SimpleRenderer()
                    symbol: {
                        type: "simple-fill", // autocasts as new SimpleMarkerSymbol()
                        //style: "square",
                        color: "rgba(255,255,255,0.7)",
                        //size: 6,
                        outline: {
                            color: "white",
                            width: 1
                        }
                    }
                },
                definitionExpression: "basin = 'AL'",
                title: "Tropical Cyclone Cone of Uncertainty for Track Forecasts"
            },
            {
                id: 94,
                definitionExpression: "basin = 'AL'",
                labelsVisible: true,
                //labelingInfo: [labelClassTCx, labelClassTC2x],
                title: "Forecast Wind Radii"
            },
            {
                id: 85,
                definitionExpression: "basin = 'AL'",
                title: "Tropical Cyclone Track Line Forecasts"
            },
            {
                id: 84,
                definitionExpression: "basin = 'AL'",
                labelsVisible: true,
                labelingInfo: [labelClassTCx, labelClassTC2x],
                title: "Tropical Cyclone Center Position Forecasts"
            }],
        visible: true,
        title: "A T 4"
    });

    //////////////////////////// A T 5 //////////////////////////////////////////

    var layerAL5 = new MapImageLayer({
        //url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/NHC_Atl_trop_cyclones_active/MapServer/17",
        url: "https://mapservices.weather.noaa.gov/tropical/rest/services/tropical/NHC_tropical_weather/MapServer",
        opacity: 0.6,
        sublayers: [
            {
                id: 123,
                visible: false,
                //labelingInfo: [labelClassTCx, labelClassTC2x],
                opacity: 0.6,
                title: "Earliest Reasonable Arrival Time"
            },
            {
                id: 124,
                visible: false,
                //labelingInfo: [labelClassTCx, labelClassTC2x],
                opacity: 0.6,
                title: "Most Likely Arrival Time"
            },
            {
                id: 112,
                renderer: {
                    type: "simple", // autocasts as new SimpleRenderer()
                    symbol: {
                        type: "simple-fill", // autocasts as new SimpleMarkerSymbol()
                        //style: "square",
                        color: "rgba(255,255,255,0.7)",
                        //size: 6,
                        outline: {
                            color: "white",
                            width: 1
                        }
                    }
                },
                definitionExpression: "basin = 'AL'",
                title: "Tropical Cyclone Cone of Uncertainty for Track Forecasts"
            },
            {
                id: 120,
                definitionExpression: "basin = 'AL'",
                labelsVisible: true,
                //labelingInfo: [labelClassTCx, labelClassTC2x],
                title: "Forecast Wind Radii"
            },
            {
                id: 111,
                definitionExpression: "basin = 'AL'",
                title: "Tropical Cyclone Track Line Forecasts"
            },
            {
                id: 110,
                definitionExpression: "basin = 'AL'",
                labelsVisible: true,
                labelingInfo: [labelClassTCx, labelClassTC2x],
                title: "Tropical Cyclone Center Position Forecasts"
            }],
        visible: true,
        title: "A T 5"
    });

    //------------------------------------------------------------------------------------------------------//

    var gpLayerATC = new GroupLayer({
        title: "Ciclones Trop. Atlántico",
        visible: false,
        //opacity: 0.8,
        visibilityMode: "independent",
        layers: [layerAL5, layerAL4, layerAL3, layerAL2, layerAL1]
    });


    //////////////////////////////////////////////////////////////////////////////////////////////////

    //////////////////////////// E P 1 //////////////////////////////////////////

    var layerEP1 = new MapImageLayer({
        //url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/NHC_Atl_trop_cyclones_active/MapServer/17",
        url: "https://mapservices.weather.noaa.gov/tropical/rest/services/tropical/NHC_tropical_weather/MapServer",
        opacity: 0.6,
        sublayers: [
            {
                id: 138,
                renderer: {
                    type: "simple", // autocasts as new SimpleRenderer()
                    symbol: {
                        type: "simple-fill", // autocasts as new SimpleMarkerSymbol()
                        //style: "square",
                        color: "rgba(255,255,255,0.7)",
                        //size: 6,
                        outline: {
                            color: "white",
                            width: 1
                        }
                    }
                },
                definitionExpression: "basin = 'EP'",
                title: "Tropical Cyclone Cone of Uncertainty for Track Forecasts"
            },
            {
                id: 137,
                definitionExpression: "basin = 'EP'",
                title: "Tropical Cyclone Track Line Forecasts"
            },
            {
                id: 136,
                definitionExpression: "basin = 'EP'",
                labelsVisible: true,
                labelingInfo: [labelClassTCx, labelClassTC2x],
                title: "Tropical Cyclone Center Position Forecasts"
            }],
        visible: true,
        title: "E P 1"
    });

    //////////////////////////// E P 2 //////////////////////////////////////////

    var layerEP2 = new MapImageLayer({
        //url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/NHC_Atl_trop_cyclones_active/MapServer/17",
        url: "https://mapservices.weather.noaa.gov/tropical/rest/services/tropical/NHC_tropical_weather/MapServer",
        opacity: 0.6,
        sublayers: [
            {
                id: 164,
                renderer: {
                    type: "simple", // autocasts as new SimpleRenderer()
                    symbol: {
                        type: "simple-fill", // autocasts as new SimpleMarkerSymbol()
                        //style: "square",
                        color: "rgba(255,255,255,0.7)",
                        //size: 6,
                        outline: {
                            color: "white",
                            width: 1
                        }
                    }
                },
                definitionExpression: "basin = 'EP'",
                title: "Tropical Cyclone Cone of Uncertainty for Track Forecasts"
            },
            {
                id: 163,
                definitionExpression: "basin = 'EP'",
                title: "Tropical Cyclone Track Line Forecasts"
            },
            {
                id: 162,
                definitionExpression: "basin = 'EP'",
                labelsVisible: true,
                labelingInfo: [labelClassTCx, labelClassTC2x],
                title: "Tropical Cyclone Center Position Forecasts"
            }],
        visible: true,
        title: "E P 2"
    });

    //////////////////////////// E P 3 //////////////////////////////////////////

    var layerEP3 = new MapImageLayer({
        //url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/NHC_Atl_trop_cyclones_active/MapServer/17",
        url: "https://mapservices.weather.noaa.gov/tropical/rest/services/tropical/NHC_tropical_weather/MapServer",
        opacity: 0.6,
        sublayers: [
            {
                id: 190,
                renderer: {
                    type: "simple", // autocasts as new SimpleRenderer()
                    symbol: {
                        type: "simple-fill", // autocasts as new SimpleMarkerSymbol()
                        //style: "square",
                        color: "rgba(255,255,255,0.7)",
                        //size: 6,
                        outline: {
                            color: "white",
                            width: 1
                        }
                    }
                },
                definitionExpression: "basin = 'EP'",
                title: "Tropical Cyclone Cone of Uncertainty for Track Forecasts"
            },
            {
                id: 189,
                definitionExpression: "basin = 'EP'",
                title: "Tropical Cyclone Track Line Forecasts"
            },
            {
                id: 188,
                definitionExpression: "basin = 'EP'",
                labelsVisible: true,
                labelingInfo: [labelClassTCx, labelClassTC2x],
                title: "Tropical Cyclone Center Position Forecasts"
            }],
        visible: true,
        title: "E P 3"
    });

    //////////////////////////// E P 4 //////////////////////////////////////////

    var layerEP4 = new MapImageLayer({
        //url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/NHC_Atl_trop_cyclones_active/MapServer/17",
        url: "https://mapservices.weather.noaa.gov/tropical/rest/services/tropical/NHC_tropical_weather/MapServer",
        opacity: 0.6,
        sublayers: [
            {
                id: 216,
                renderer: {
                    type: "simple", // autocasts as new SimpleRenderer()
                    symbol: {
                        type: "simple-fill", // autocasts as new SimpleMarkerSymbol()
                        //style: "square",
                        color: "rgba(255,255,255,0.7)",
                        //size: 6,
                        outline: {
                            color: "white",
                            width: 1
                        }
                    }
                },
                definitionExpression: "basin = 'EP'",
                title: "Tropical Cyclone Cone of Uncertainty for Track Forecasts"
            },
            {
                id: 215,
                definitionExpression: "basin = 'EP'",
                title: "Tropical Cyclone Track Line Forecasts"
            },
            {
                id: 214,
                definitionExpression: "basin = 'EP'",
                labelsVisible: true,
                labelingInfo: [labelClassTCx, labelClassTC2x],
                title: "Tropical Cyclone Center Position Forecasts"
            }],
        visible: true,
        title: "E P 4"
    });

    //////////////////////////// E P 5 //////////////////////////////////////////

    var layerEP5 = new MapImageLayer({
        //url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/NHC_Atl_trop_cyclones_active/MapServer/17",
        url: "https://mapservices.weather.noaa.gov/tropical/rest/services/tropical/NHC_tropical_weather/MapServer",
        opacity: 0.6,
        sublayers: [
            {
                id: 242,
                renderer: {
                    type: "simple", // autocasts as new SimpleRenderer()
                    symbol: {
                        type: "simple-fill", // autocasts as new SimpleMarkerSymbol()
                        //style: "square",
                        color: "rgba(255,255,255,0.7)",
                        //size: 6,
                        outline: {
                            color: "white",
                            width: 1
                        }
                    }
                },
                definitionExpression: "basin = 'EP'",
                title: "Tropical Cyclone Cone of Uncertainty for Track Forecasts"
            },
            {
                id: 241,
                definitionExpression: "basin = 'EP'",
                title: "Tropical Cyclone Track Line Forecasts"
            },
            {
                id: 240,
                definitionExpression: "basin = 'EP'",
                labelsVisible: true,
                labelingInfo: [labelClassTCx, labelClassTC2x],
                title: "Tropical Cyclone Center Position Forecasts"
            }],
        visible: true,
        title: "E P 5"
    });

    //------------------------------------------------------------------------------------------------------//

    var gpLayerEPC = new GroupLayer({
        title: "Ciclones Trop. Pacífico",
        visible: false,
        //opacity: 0.8,
        visibilityMode: "independent",
        layers: [layerEP5, layerEP4, layerEP3, layerEP2, layerEP1]
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////


    // Agregar capa de servicios NHC 2 Day Probability Outlook.
    var layerNhc0 = new FeatureLayer({
        url: "https://mapservices.weather.noaa.gov/tropical/rest/services/tropical/NHC_tropical_weather/MapServer/1",
        visible: false,
        title: "2 Day Probability Outlook"
    });


    // Agregar capa de servicios NHC 2 Day Probability Outlook Area.
    // var layerNhc1 = new FeatureLayer({
    //  url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/NHC_Atl_trop_cyclones/MapServer/1",
    //  visible : false,
    //  title: "2 Day Probability Outlook Area"
    //});

    // Agregar capa de servicios NHC 5 Day Probability Outlook.
    var layerNhc2 = new FeatureLayer({
        url: "https://mapservices.weather.noaa.gov/tropical/rest/services/tropical/NHC_tropical_weather/MapServer/2",
        visible: false,
        title: "7 Day Probability Outlook"
    });


    // Agregar capa de servicios NHC 5 Day Probability Outlook Area.
    var layerNhc3 = new FeatureLayer({
        url: "https://mapservices.weather.noaa.gov/tropical/rest/services/tropical/NHC_tropical_weather/MapServer/3",
        visible: false,
        title: "7 Day Probability Outlook Area"
    });


    // Create GroupLayer with the two MapImageLayers created above
    // as children layers.

    return new GroupLayer({
        title: "Servicios NHC",
        visible: true,
        visibilityMode: "independent",
        layers: [layerNhc3, layerNhc2, layerNhc0, gpLayerEPC, gpLayerATC, layerCiclonT1]
    })

}

