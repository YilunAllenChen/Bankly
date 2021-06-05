import { TiThMenuOutline } from "react-icons/ti";
import "./floating_menu.css";

import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Col,
  Row,
  ModalFooter,
} from "shards-react";
import { toPage } from "../../states/store";
import { connect } from "react-redux";
import Contact from "./contact";

class FloatingMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
    this.goToPage = this.goToPage.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  goToPage(page) {
    this.toggle();
    this.props.dispatch(toPage({ view: page }));
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button className="floatingmenu" onClick={this.toggle}>
          <TiThMenuOutline></TiThMenuOutline>
        </Button>
        <Modal className="bigmodal" open={open} toggle={this.toggle}>
          <ModalHeader className="darkmodalheader">
            <span className="white">🔮 The Magical Portal </span>
          </ModalHeader>
          <ModalBody className="darkmodalbody center">
            👋 Already know where you're going?
            <p>Don't worry - we'll save all your progress.</p>
            <hr></hr>
            <Row>
              <Col xs="12">
                <Row>
                  <Button
                    className="optionbutton"
                    theme="success"
                    onClick={() => this.goToPage("welcome")}
                  >
                    🏠 Home Sweet Home
                  </Button>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs="12" md="6">
                <h5 className="white center"> Learn </h5>
                <Row>
                  <Button
                    className="optionbutton"
                    theme="info"
                    onClick={() => this.goToPage("learnEquity")}
                  >
                    Equity
                  </Button>
                </Row>
                <Row>
                  <Button
                    className="optionbutton"
                    theme="info"
                    onClick={() => this.goToPage("learnBonds")}
                  >
                    Bonds
                  </Button>
                </Row>
                <Row>
                  <Button
                    className="optionbutton"
                    theme="info"
                    onClick={() => this.goToPage("learnSwaps")}
                  >
                    Swaps
                  </Button>
                </Row>
                <Row>
                  <Button
                    className="optionbutton"
                    theme="info"
                    onClick={() => this.goToPage("learnOptions")}
                  >
                    Options
                  </Button>
                </Row>
                <Row>
                  <Button
                    className="optionbutton"
                    theme="info"
                    onClick={() => this.goToPage("learnFX")}
                  >
                    Foreign Exchange
                  </Button>
                </Row>
              </Col>
              <br />
              <Col xs="12" md="6">
                <h5 className="white center"> Play </h5>{" "}
                <Row>
                  <Button
                    className="optionbutton"
                    theme="light"
                    onClick={() => this.goToPage("playEquity")}
                  >
                    Equity
                  </Button>
                </Row>
                <Row>
                  <Button
                    className="optionbutton"
                    theme="light"
                    onClick={() => this.goToPage("playBonds")}
                  >
                    Bonds
                  </Button>
                </Row>
                <Row>
                  <Button
                    className="optionbutton"
                    theme="dark"
                    onClick={() => this.goToPage("playSwaps")}
                  >
                    Swaps
                  </Button>
                </Row>
                <Row>
                  <Button
                    className="optionbutton"
                    theme="dark"
                    onClick={() => this.goToPage("playOptions")}
                  >
                    Options
                  </Button>
                </Row>
                <Row>
                  <Button
                    className="optionbutton"
                    theme="dark"
                    onClick={() => this.goToPage("playFX")}
                  >
                    Foreign Exchange
                  </Button>
                </Row>
              </Col>{" "}
            </Row>
            <hr style={{ borderColor: "#5566AA" }} />
            <Row>
              <Col xs="12" md="6">
                <Row>
                  <Button
                    className="optionbutton"
                    theme="success"
                    onClick={() => this.goToPage("sponsoring")}
                  >
                    💙 Become a Sponsor
                  </Button>
                </Row>
              </Col>
              <Col xs="12" md="6">
                <Row>
                  <Contact />
                </Row>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter className="darkmodalheader">
            <div>
              *
              <Button size="sm" theme="dark">
                dark
              </Button>{" "}
              buttons are under development.
            </div>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect()(FloatingMenu);
