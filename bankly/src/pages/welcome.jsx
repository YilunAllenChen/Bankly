import React from "react";
import { Container, Row, Col } from "shards-react";
import { Button } from "shards-react";
import "../css/welcome.css";

import { useSelector, useDispatch } from "react-redux";
import { to_any, to_second, to_welcome } from "../states/global";

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
              <Col style={{ textAlign: "center" }}>
                Financial Market. Learn how it's done.
              </Col>
            </Row>
            <br />

            <Row>
              <Button
                pill
                theme="info"
                size="lg"
                onClick={() => {
                  dispatch(to_second());
                  console.log("click")
                }}
              >
                Get Started Now!
              </Button>
            </Row>
          </Container>
        </Row>
      </Container>
    </div>
  );
}

export default Intro;
