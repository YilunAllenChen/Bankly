import React from "react";
import { Line } from "react-chartjs-2";
import "../../css/charts.css";
import { useSelector } from "react-redux";
import { Container } from "shards-react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import DividendTooltip from "./dividend_tooltip";
import CompanyTooltip from "./company_tooltip";
import CompanyDetailsTooltip from "./company_details_tooltip";

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
    y: {      title: {
        display: true,
        text: "price / $",
        color: "#FFFFFF"
      },
      ticks: {
        color: "white",
        beginAtZero: true,
      },
    },
    x: {
      title: {
        display: true,
        text: "time / days",
        color: "#FFFFFF"
      },
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
        <h3 className="title">
          <CompanyTooltip />
        </h3>
      </div>
      <Card>
        <CardBody className="black">
          <CardTitle>About Pear Inc.</CardTitle>
          <CardSubtitle>Nothing related to Apple Inc.</CardSubtitle>
          <CompanyDetailsTooltip />
          <hr></hr>
          <DividendTooltip />
        </CardBody>
      </Card>
      <br></br>
      <Line data={data} options={options} />
    </Container>
  );
};

export default LineChart;
