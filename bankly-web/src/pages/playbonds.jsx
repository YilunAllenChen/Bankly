import React from "react";
import { Container, Row, Col, Button } from "shards-react";
import StartupModal from "../components/bonds/startup_modal";
import BondsList from "../components/bonds/bonds_list";
import Portfolio from "../components/bonds/portfolio";
import BondsTimePriceController from "../components/bonds/time_price_controller";
import PortfolioLineChart from "../components/bonds/chart";
import EndGameModal from "../components/bonds/end_game_modal";
import "../css/common.css";
import { useDispatch } from "react-redux";
import { bondsTradingStatus } from "../states/store";

function PlayBond() {

  const dispatch = useDispatch();

  function handleEndGame() {
    dispatch(bondsTradingStatus(true));
  }

  return (
    <div className="App-header">
      <StartupModal />
      <EndGameModal />
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
            <Row>
              <Col xs="6" md="8" lg="9"></Col>
              <Col xs="6" md="4" lg="3">
                <Button theme="danger" onClick={handleEndGame}>I'm Done!</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default PlayBond;
