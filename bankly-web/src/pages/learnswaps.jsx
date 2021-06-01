import React from "react";
import { Button, Container, Row, Col } from "shards-react";
// import { useDispatch } from "react-redux";
import {
  WhatAreSwaps,
  WhySwaps,
  Notional,
  SwapsStrategy,
  CDS
} from "../components/learnswaps/modals";
// import { toPage } from "../states/store";

import "../css/common.css";
import "../css/margins.css";

function Intro() {
  // let dispatch = useDispatch();
  return (
    <div className="App-header">
      <Container style={{ height: "100vh", width: "100%", paddingTop: "30px" }}>
        <Row>
          <Col>
            <h1 style={{ color: "#BBBBBB" }}>
              Swappy swappy
              <font style={{ color: "#FFFFFF" }}> Swaps.</font>
            </h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>The Basics</Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" sm="6" md="3" className="margin-5px">
            <WhatAreSwaps />
          </Col>
          <Col xs="12" sm="6" md="3" className="margin-5px">
            <WhySwaps />
          </Col>
          <Col sm="6"></Col>
        </Row>
        <br />
        <Row>
          <Col>What's in a Swap</Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" sm="6" md="3" className="margin-5px">
            <Notional />
          </Col>
          <Col xs="12" sm="6" md="3" className="margin-5px">
            <SwapsStrategy />
          </Col>
          <Col sm="6"></Col>
        </Row>
        <br />
        <Row>
          <Col>Swaps in history</Col>
        </Row>
        <br />        <Row>
          <Col xs="12" sm="6" md="3" className="margin-5px">
            <CDS />
          </Col>
          <Col xs="12" sm="6" md="3" className="margin-5px">
            {/* <SwapsStrategy /> */}
          </Col>
          <Col sm="6"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Intro;
