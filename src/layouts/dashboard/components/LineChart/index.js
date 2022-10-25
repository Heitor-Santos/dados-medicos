/* eslint-disable no-unused-vars */
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import data from "./data";

const dataHuman = data.map((el) => ({ x: el.ano, y: el.casosHum }));
const dataPNH = data.map((el) => ({ x: el.ano, y: el.casosPNH }));

function LineChart() {
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Comparação entre casos Humanos e PNHs",
    },
    series: [
      {
        id: "test",
        name: "Humanos",
        data: dataHuman,
        color: "#f77874",
      },
      {
        id: "test2",
        name: "PNHs",
        data: dataPNH,
        color: "#ca96f2",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default LineChart;
