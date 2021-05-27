import React from "react";
import { Button, Container, Row, Col } from "shards-react";
import { useDispatch } from "react-redux";
import { HowToTradeEquity, WhatIsEquity, StockGoesUp, Dividends } from "../components/learnequity/learn";
import { toPage } from "../states/global";

import "../css/common.css";


function Intro() {
  let dispatch = useDispatch();
  return (
    <div className="App-header">
      <Container style={{ height: "100vh", width: "100%", paddingTop: "30px" }}>
        <Row>
          <Col>
            <h1 style={{ color: "#BBBBBB" }}>
              First Stop. Let's talk{" "}
              <font style={{ color: "#FFFFFF" }}>Equity.</font>
            </h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>The Basics</Col>
        </Row>
        <br />
        <Row>
          <Col>
            <WhatIsEquity />
          </Col>
          <Col>
            <HowToTradeEquity />
          </Col>
          <Col sm="6"></Col>
        </Row>
        <br />
        <Row>
          <Col>How to Make Money through Equity Trading</Col>
        </Row>
        <br />
        <Row>
          <Col>
            <StockGoesUp />
          </Col>
          <Col>
            <Dividends />
          </Col>
          <Col sm="6"></Col>
        </Row>
        <br />
        <hr></hr>
        <Row>
          <Col>Done learning? Let's hit the road.</Col>
        </Row>
        <Row>
          <Col>We'll give you <font style={{color: "aqua"}}><b>$10,000</b></font> fake money to trade on a simulated company.</Col>
        </Row>
        <hr></hr>
        <Button
          pill
          theme="info"
          size="lg"
          onClick={() => {
            dispatch(
              toPage({
                view: "equity",
              })
            );
          }}
        >
          Trade some Equity
        </Button>
      </Container>
    </div>
  );
}

export default Intro;
