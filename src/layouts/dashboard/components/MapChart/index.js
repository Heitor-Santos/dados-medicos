/* eslint-disable no-unused-vars */
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import mapDataBR from "@highcharts/map-collection/countries/br/br-all.geo.json";

// eslint-disable-next-line react/prop-types
function MapChart({ title, color, data }) {
  const mapOptions = {
    chart: {
      map: "countries/br/br-all",
      width: "600",
    },
    title: {
      text: title,
    },
    credits: {
      enabled: false,
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },

    colorAxis: {
      min: 0,
      maxColor: color,
    },

    series: [
      {
        // Use the gb-all map with no data as a basemap
        name: "Basemap",
        data,
        keys: ["id", "percRural", "popRural"],
        joinBy: ["hc-key"],
        mapData: mapDataBR,
        borderColor: "#A0A0A0",
        nullColor: "rgba(200, 200, 200, 0.3)",
        showInLegend: false,
        tooltip: {
          headerFormat: "",
          pointFormat:
            "{point.name} - Casos: {point.value}, porcentagem Rural: {point.percRural}, população em áreas rurais: {point.popRural}",
        },
        point: {
          events: {
            click() {
              // eslint-disable-next-line react/no-this-in-sfc
              console.log(this.primary);
            },
          },
        },
      },
    ],
  };

  highchartsMap(Highcharts);

  return (
    <HighchartsReact constructorType="mapChart" highcharts={Highcharts} options={mapOptions} />
  );
}

export default MapChart;
