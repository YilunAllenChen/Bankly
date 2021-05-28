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
          <ModalHeader>Welcome to Equity Trading</ModalHeader>
          <ModalBody className="black">
            <p>👋 Ready to trade some Equity?</p>
            <p>Click around to see what different things mean! </p>
            <p>When you're ready, click on <span style={{color: "blue"}}>BUY</span> and <span style={{color: "blue"}}>SELL</span> buttons to start trading!</p>
            <p>Hold stocks for at least 90 days (ticks) to receive dividends!</p>
            <p>When you feel good about the result, hit <span style={{color: "red"}}>I'm DONE!</span> on the bottom right to see how you did! </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
