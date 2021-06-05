import React from "react";
import { Button, Container, Row, Col } from "shards-react";
import { useDispatch } from "react-redux";
import {
  ForwardFX,
  SpotFX,
  WhatIsFX,
  WhyMoneyMove,
} from "../components/learnFX/modals";
import { toPage } from "../states/store";

import "../css/common.css";
import "../css/margins.css";

function Intro() {
  let dispatch = useDispatch();
  return (
    <div className="App-header">
      <Container style={{ height: "100vh", width: "100%", paddingTop: "30px" }}>
        <Row>
          <Col>
            <h1 style={{ color: "#BBBBBB" }}>
              <font style={{ color: "#FFFFFF" }}>Foreign Exchange.</font>
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
            <WhatIsFX />
          </Col>
          <Col xs="12" sm="6" md="3" className="margin-5px">
            <WhyMoneyMove />
          </Col>
          <Col sm="6"></Col>
        </Row>
        <br />
        <Row>
          <Col> Types of FX Trades</Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" sm="6" md="3" className="margin-5px">
            <SpotFX />
          </Col>
          <Col xs="12" sm="6" md="3" className="margin-5px">
            <ForwardFX />
          </Col>
          <Col xs='12' md="6"></Col>
        </Row>
        <br />
        {/* <Row>
          <Col>
            <Row>Done Learning? Let's hit the road.</Row>
            <br />
            <Row>
              <Button
                pill
                theme="info"
                size="lg"
                onClick={() => {
                  dispatch(
                    toPage({
                      view: "playBonds",
                    })
                  );
                }}
              >
                Start Trading some Bonds!
              </Button>
            </Row>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default Intro;
