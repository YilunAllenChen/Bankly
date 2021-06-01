import React from "react";
import { Container, Row, Col } from "shards-react";
// import { useDispatch } from "react-redux";
import {
  CallsAndPuts,
  OptionProperties,
  OptionValuation,
  WhatAreOptions,
} from "../components/learnoptions/modals";
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
              Hey. Have your
              <font style={{ color: "#FFFFFF" }}> Options</font> open.
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
            <WhatAreOptions />
          </Col>
          <Col xs="12" sm="6" md="3" className="margin-5px">
            <CallsAndPuts />
          </Col>
          <Col xs="12" sm="6" md="3" className="margin-5px">
          </Col>
          <Col xs="12" sm="6" md="3" className="margin-5px">
          </Col>
        </Row>
        <br />
        <Row>
          <Col> The Numbers </Col>
        </Row>        <br />
        <Row>
          <Col xs="12" sm="6" md="3" className="margin-5px">
            <OptionValuation />
          </Col>
          <Col xs="12" sm="6" md="3" className="margin-5px">
            <OptionProperties />
          </Col>
          <Col xs="12" sm="6" md="3" className="margin-5px">
          </Col>
          <Col xs="12" sm="6" md="3" className="margin-5px">
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Intro;
