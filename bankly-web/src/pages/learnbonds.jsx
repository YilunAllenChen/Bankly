import React from "react";
import { Button, Container, Row, Col } from "shards-react";
import { useDispatch } from "react-redux";
import {
  WhatAreBonds,
  Coupons,
  BuyerOrSeller,
  MatureDate,
  Nominal,
  CorporateBonds,
  GovernmentBonds,
  Defaults,
} from "../components/learnbonds/modals";
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
              <font style={{ color: "#FFFFFF" }}>Bonds.</font> Not James Bond.
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
            <WhatAreBonds />
          </Col>
          <Col xs="12" sm="6" md="3" className="margin-5px">
            <BuyerOrSeller />
          </Col>
          <Col sm="6"></Col>
        </Row>
        <br />
        <Row>
          <Col> Key Things In a Bond</Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" sm="6" md="3" className="margin-5px">
            <Nominal />
          </Col>
          <Col xs="12" sm="6" md="3" className="margin-5px">
            <Coupons />
          </Col>
          <Col xs="12" sm="6" md="3" className="margin-5px">
            <MatureDate />
          </Col>
          <Col md="3"></Col>
        </Row>
        <br />{" "}
        <Row>
          <Col>
            Who Issues Bonds (more like, who likes to borrow your money)?
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" sm="6" md="3" className="margin-5px">
            <GovernmentBonds />
          </Col>
          <Col xs="12" sm="6" md="3" className="margin-5px">
            <CorporateBonds />
          </Col>
          <Col sm="6"></Col>
        </Row>
        <br />
        <Row>
          <Col>What Could Go Wrong?</Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" sm="6" md="3" className="margin-5px">
            <Defaults />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Row>Done Learning? Let's hit the road.</Row>
            <br/>
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
        </Row>
      </Container>
    </div>
  );
}

export default Intro;
