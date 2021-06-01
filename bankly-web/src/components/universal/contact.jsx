import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import "./floating_menu.css"

export default class BasicModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { open } = this.state;
    return (
      <>
        <Button className="optionbutton" onClick={this.toggle}>
          Contact Me!
        </Button>
        <Modal open={open} toggle={this.toggle}>
          <ModalHeader>Contact</ModalHeader>
          <ModalBody className="black">
            <p>Feedback? Collaboration? Friendly chat?</p>
            <p>Shoot me an email!</p>
            <p style={{color: "#5577FF"}}>allenchenyilun1999@gmail.com</p>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
