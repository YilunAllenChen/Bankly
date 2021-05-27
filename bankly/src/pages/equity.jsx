import React from "react";
import { Container, Row, Col } from "shards-react";
import LineChart from "../components/equity/stockData";
import EquityForm from "../components/equity/form";
import DividendAlert from "../components/equity/dividend_alert"
import StartupModal from "../components/equity/startup_modal"
import EndgameModal from "../components/equity/end_game_modal";

import "../css/common.css";

function Intro() {
  return (
    <div className="App-header">
      <StartupModal />
      <EndgameModal />

      <DividendAlert></DividendAlert>
      <Container style={{ height: "100vh", width: "100%", paddingTop: "30px" }}>
        <br />
        <Row>
          <Col sm="12" md="6" lg="6">
            <LineChart />
          </Col>
          <Col sm="12" md="6" lg="6" style={{marginTop: '30px'}}>
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
