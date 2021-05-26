import React from "react";
import { Container, Row, Col } from "shards-react";
import LineChart from "../components/play/equity_line";
import EquityForm from "../components/play/equity_form";

import "../css/common.css";


function Intro() {
  

  return (
    <div className="App-header">
      <Container style={{ height: "100vh", width: "100%", paddingTop: "30px" }}>

        <br />
        <Row>
          <Col sm="12" md="6" lg="6">
            <LineChart />
          </Col>
          <Col sm="12" md="6" lg="6">
            <EquityForm />
            <hr></hr>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default Intro;
