import React from "react";
import { Line } from "react-chartjs-2";
import { Container } from "shards-react";
import "../../css/charts.css";
import { useSelector } from "react-redux";

const options = {
  animation: {
    duration: 0,
    // easing: "easeInSine"
  },
  scales: {
    y: {
      title: {
        display: true,
        text: "Portfolio Value",
        color: "#FFFFFF",
      },
      ticks: {
        color: "white",
        beginAtZero: true,
      },
    },
    x: {
      title: {
        display: true,
        text: "time",
        color: "#FFFFFF",
      },
      ticks: {
        display: false,
        // color: "white",
        // autoSkip: true,
        // maxTicksLimit: 1,
      },
    },
    
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

const selectLineChartData = (state) => state.bonds.lineChartData;

const LineChart = () => {
  const data = useSelector(selectLineChartData);

  return <Line data={data} options={options} />;
};

export default LineChart;
