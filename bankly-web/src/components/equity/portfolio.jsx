import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Col, Row } from "shards-react";

import PortfolioTooltip from "./portfolio_tooltip";


import { useSelector } from "react-redux";
const selectEquityPortfolio = (state) => state.equity.portfolio;
const selectQuote = (state) => state.equity.lineChartData.datasets[0].data;

function Portfolio() {
  let portfolio = useSelector(selectEquityPortfolio);

  let historyPrice = useSelector(selectQuote);
  let quote = historyPrice[historyPrice.length - 1];

  let { stocks, cash } = portfolio;
  let stocksRendered = [];
  let totalValue = cash;
  for (let key in stocks) {
    stocksRendered.push(
      <p key={key}>
        <Row>
          <Col xs="12" md="6" style={{ color: "#222222" }}>
            {stocks[key]} <PortfolioTooltip /> {key}
          </Col>
          <Col xs="12" md="6" style={{ color: "#888888" }}>
            (value: ${(stocks[key] * quote).toFixed(1)})
          </Col>
        </Row>
      </p>
    );
    totalValue += stocks[key] * quote;
  }

  let PL = ((totalValue - 10000) / 100).toFixed(2);
  let PLmsg;
  if (PL < 0) {
    PLmsg = (
      <span>
        (<font style={{ color: "red" }}> {PL} %</font>)
      </span>
    );
  } else if (PL > 0) {
    PLmsg = (
      <span>
        (<font style={{ color: "green" }}>+ {PL} %</font>)
      </span>
    );
  } else {
    PLmsg = (
      <span>
        (<font style={{ color: "grey" }}>+ 0%</font>)
      </span>
    );
  }

  return (
    <Card className="black">
      <CardHeader style={{ color: "black" }}>
        My Portfolio | Market Value: ${totalValue.toFixed(2)} {PLmsg}
      </CardHeader>
      <CardBody style={{ color: "black" }}>
        <Row>
          <Col xs="12" md="6" style={{ color: "#222222" }}>
            Cash
          </Col>
          <Col xs="12" md="6" style={{ color: "#888888" }}>
             ${portfolio.cash.toFixed(2)} 
          </Col>
        </Row>
        <hr></hr>
        {stocksRendered}
      </CardBody>
      <CardFooter style={{ color: "black" }}></CardFooter>
    </Card>
  );
}

export default Portfolio;
