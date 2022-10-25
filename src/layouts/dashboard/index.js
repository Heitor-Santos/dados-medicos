/* eslint-disable no-unused-vars */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import data from "layouts/merge_frame";
import humanData from "layouts/human_complete";
import pnhData from "layouts/pnh_complete";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import React, { useEffect, useState } from "react";

import MapChart from "layouts/dashboard/components/MapChart";
import { Slider } from "@mui/material";
import Box from "@mui/material/Box";
import LineChart from "./components/LineChart";

const marks = [
  {
    value: 0,
    label: "2000",
  },
  {
    value: 12.5,
    label: "2003",
  },
  {
    value: 25,
    label: "2005",
  },
  {
    value: 37.5,
    label: "2007",
  },
  {
    value: 50,
    label: "2009",
  },
  {
    value: 62.5,
    label: "2011",
  },
  {
    value: 75,
    label: "2013",
  },
  {
    value: 100,
    label: "2015",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedDataIndex, setSelectedDataIndex] = useState(0);

  useEffect(() => {
    const index = marks.findIndex((mark) => mark.value === selectedYear);
    setSelectedDataIndex(index);
  }, [selectedYear]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div
        style={{
          width: "100%",
          background: "white",
          border: "1px solid #CDCDCD",
          borderRadius: 8,
          paddingBlock: 12,
          paddingInline: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MapChart
            title="Febre Amarela em Humanos"
            color="#e8130c"
            data={humanData[selectedDataIndex].estados}
          />
          <MapChart
            title="Febre Amarela em PNHs"
            color="#ff7d26"
            data={pnhData[selectedDataIndex].estados}
          />
        </div>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "70%", justifyContent: "space-between" }}>
            <Slider
              aria-label="Restricted values"
              defaultValue={50}
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              step={null}
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e, val) => setSelectedYear(val)}
            />
          </Box>
        </Box>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            width: "50%",
            paddingBlock: 12,
            paddingInline: 8,
            background: "white",
            marginTop: 12,
            border: "1px solid #CDCDCD",
            borderRadius: 8,
          }}
        >
          <LineChart />
        </div>
        <div
          style={{
            width: "45%",
            paddingBlock: 12,
            paddingInline: 8,
            background: "white",
            marginTop: 12,
            border: "1px solid #CDCDCD",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            alt="test"
            style={{ width: "100%" }}
            src="https://www.cnpm.embrapa.br/projetos/car/2018/BRASIL_areasdedicadaspreservacao_CAR2018.jpg"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
