import React from "react";
import { Container, Row, Col } from "shards-react";
import StartupModal from "../components/bonds/startup_modal";
import BondsList from "../components/bonds/bonds_list";
import Portfolio from "../components/bonds/portfolio";
import BondsTimePriceController from "../components/bonds/time_price_controller";
import PortfolioLineChart from "../components/bonds/chart";
import "../css/common.css";

function PlayBond() {
  return (
    <div className="App-header">
      <StartupModal />
      <BondsTimePriceController />

      <Container style={{ height: "100vh", width: "100%", paddingTop: "30px" }}>
        <br />
        <Row>
          <Col sm="12" md="6">
            <BondsList />
          </Col>
          <Col sm="12" md="6">
            <hr />
            <Row style={{ minHeight: "300px" }}>
              <PortfolioLineChart />
            </Row>
            <Row>
              <Portfolio />
            </Row>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default PlayBond;
