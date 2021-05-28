import React from "react";
import { Container, Row, Col } from "shards-react";
import "../css/common.css";
import "../css/indev.css";

function Intro() {
  return (
    <div className="App-header">
      <Container style={{ height: "100vh", width: "100%", paddingTop: "30px" }}>
        <Row className="centered">
          <Col>
            <h4 style={{ textAlign: "center", color: "#FFFFFF" }}>
              <div className="hammer">🛠️ Tink Tink...🛠</div> ️
            </h4>
            <hr style={{ borderColor: "#CCCCCC" }}></hr>
            <Row>
              <Col style={{ color: "#AAAAAA" }}>
                We're still building this feature. Check back later!
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Intro;
