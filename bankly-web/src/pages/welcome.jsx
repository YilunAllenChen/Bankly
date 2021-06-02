import React from "react";
import { Container, Row, Col } from "shards-react";
import { Button } from "shards-react";
import "../css/common.css";

import { useDispatch } from "react-redux";
import { toPage } from "../states/store";

function Intro() {
  const dispatch = useDispatch();

  return (
    <div className="App-header">
      <Container
        style={{ height: "100vh", maxWidth: "100%", paddingTop: "30px" }}
      >
        <Row className="centered">
          <Container>
            <Row>
              <Col>
                <p>Financial Market.</p>
                <p>Learn how it's done by playing it. </p>
              </Col>
            </Row>
            <br />

            <Row>
              <Col>
                <Button
                  pill
                  theme="info"
                  size="lg"
                  onClick={() => {
                    dispatch(
                      toPage({
                        view: "learnEquity",
                      })
                    );
                  }}
                >
                  Get Started Now!
                </Button>
              </Col>
            </Row>
            <br></br>
            <br></br>
            <Row>
              <Col>
                <div>Learn and Play:</div>
                <ul>
                  <li>Equity</li>
                  <li>Bonds</li>
                  <li>
                    <span style={{ color: "#AAAAAA" }}>
                      More under development...
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
            <hr></hr>
          </Container>
        </Row>
      </Container>
    </div>
  );
}

export default Intro;
