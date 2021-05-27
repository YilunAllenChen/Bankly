import React from "react";
import { Line } from "react-chartjs-2";
import "../../css/charts.css";
import { useSelector } from "react-redux";
import { Container } from "shards-react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import DividendTooltip from "./dividend_tooltip"
import CompanyTooltip from "./company_tooltip"

const options = {
  transitions: {
    show: {
      animations: {
        x: {
          from: 0,
        },
        y: {
          from: 0,
        },
      },
    },
  },
  animation: {
    tension: {
      duration: 500,
      easing: "easeInQuint",
      from: 0,
      to: 0.5,
    },
  },
  scales: {
    y: {
      ticks: {
        color: "white",
        beginAtZero: true,
      },
    },
    x: {
      ticks: {
        color: "white",
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "rgb(255, 255, 255)",
        font: {
          size: 15,
        },
      },
    },
  },
};


const LineChart = () => {
  const selectEquityData = (state) => state.equity.lineChartData;
  let data = useSelector(selectEquityData);

  return (
    <Container>
      <div className="header">
        <h3 className="title"><CompanyTooltip /></h3>
      </div>
      <Line data={data} options={options} />
      <br></br>
      <Card>
        <CardBody className="black">
          <CardTitle>About Pear Inc.</CardTitle>
          <CardSubtitle>Nothing related to Apple Inc.</CardSubtitle>
          Pear Inc. is an American multinational pear company headquartered in
          somewhere, that designs, develops, and sells pears-related computer
          softwares and pears-related online services.
          <hr></hr>
          Dividend Yield: <DividendTooltip/>
        </CardBody>
      </Card>
    </Container>
  );
};

export default LineChart;
