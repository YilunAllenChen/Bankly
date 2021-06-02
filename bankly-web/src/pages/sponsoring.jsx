import React from "react";
import { Container, Row, Col } from "shards-react";
import { Button } from "shards-react";
import "../css/common.css";


function Intro() {

  return (
    <div className="App-header">
      <Container
        style={{ height: "100vh", maxWidth: "100%", paddingTop: "30px" }}
      >
        <Row className="centered">
          <Container>
            <Row>
              <Col>
                <h3 style={{ color: "white" }}>
                  Become a Sponsor for Project Bankly.
                </h3>
                <p style={{ color: "#AABBCC" }}>
                  {" "}
                  Some extra cups of Coffee ☕ for me to make Bankly more
                  amazing!{" "}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  className="optionbutton"
                  outline
                  pill
                  theme="warning"
                  onClick={() => {
                    window.open(
                      "https://buy.stripe.com/14k14H1Gk3nm46Y4gn",
                      "_blank"
                    );
                  }}
                >
                  💛 $5 Smol Cup of Coffee
                </Button>
              </Col> <Col>
                <Button
                  className="optionbutton"
                  pill
                  outline
                  theme="warning"
                  onClick={() => {
                    window.open(
                      "https://buy.stripe.com/9AQ5kX2Koe205b23ck",
                      "_blank"
                    );
                  }}
                >
                  💛💛 $10 Big Cup of Coffee 
                </Button>
              </Col>
              <Col>
                <Button
                  className="optionbutton"
                  pill
                  outline
                  theme="warning"
                  onClick={() => {
                    window.open(
                      "https://buy.stripe.com/5kA6p184I3nmcDueV0",
                      "_blank"
                    );
                  }}
                >
                  💛💛💛 $20 COFFEE BUCKET 
                </Button>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </div>
  );
}

export default Intro;
