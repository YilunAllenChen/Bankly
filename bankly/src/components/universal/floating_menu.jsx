import { TiThMenuOutline } from "react-icons/ti";
import "./floating_menu.css";

import React from "react";
import { Button, Modal, ModalBody, ModalHeader, Col, Row } from "shards-react";
import { toPage } from "../../states/store";
import { connect } from "react-redux";

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
            <span className="white">Portal! </span>
          </ModalHeader>
          <ModalBody className="darkmodalbody center">
            👋 Where are we going today?
            <p>Don't worry - we'll save your progress.</p>
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
              </Col>
              <Col xs="12" md="6">
                <h5 className="white center"> Play </h5>{" "}
                <Row>
                  <Button
                    className="optionbutton"
                    theme="light"
                    onClick={() => this.goToPage("equity")}
                  >
                    Equity
                  </Button>
                </Row>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect()(FloatingMenu);
