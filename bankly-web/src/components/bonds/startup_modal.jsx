import React from "react";
import { Modal, ModalBody, ModalHeader } from "shards-react";

export default class BasicModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
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
      <div>
        <Modal open={open} toggle={this.toggle}>
          <ModalHeader>Welcome to Bond Trading</ModalHeader>
          <ModalBody className="black">
            <p>👋 Ready to trade some Bonds?</p>
            <p>Click around to see what different things mean! </p>
            <p>When you're ready, find your favorite bond, and click on <span style={{color: "blue"}}>BUY</span> buttons!</p>
            <p>Hold your bonds to receive coupons!</p>
            <p>When you feel good about the result, hit <span style={{color: "red"}}>I'm DONE!</span> on the bottom right to see how you did! </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
