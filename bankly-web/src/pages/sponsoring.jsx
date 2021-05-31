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
                      "https://buy.stripe.com/test_00g9Bz3fObVjbaU3cf",
                      "_blank"
                    );
                  }}
                >
                  💛 $5 Smol Cup of Coffee (Under Development)
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
                      "https://buy.stripe.com/test_6oEfZXcQo4sRdj2cMQ",
                      "_blank"
                    );
                  }}
                >
                  💛 $20 Big Cup of Coffee (Under Development)
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
