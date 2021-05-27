import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import { connect } from "react-redux";
import {
  toPage,
  resetStockData,
} from "../../states/store";

class EndgameModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleGoBack() {
    this.props.dispatch(resetStockData());
    this.props.dispatch(
      toPage({
        view: "learnEquity",
      })
    );
  }

  render() {
    const open = this.props.doneEquityTrading;
    const numDays = this.props.lastTimestamp;
    const totalValue =
      this.props.portfolio.stocks.PEAR * this.props.lastQuote +
      this.props.portfolio.cash;

    let PLmsg = "";
    if (totalValue > 100000) {
      PLmsg = (
        <p>
          🤑 You made a HUGE gain! Hope you realized the power of buying &
          holding good companies!"{" "}
        </p>
      );
    } else if (totalValue > 10000) {
      PLmsg = (
        <p>😆 Not bad! You made quite a fortune through equity trading!"</p>
      );
    } else if (totalValue === 10000) {
      PLmsg = (
        <p>
          🤨 Looks like you haven't moved an inch! Did you really try your best?
        </p>
      );
    } else if (totalValue > 8000) {
      PLmsg = (
        <p>
          😐 You suffered a small loss but pulled out in time! But remember -
          patience is key!
        </p>
      );
    } else {
      PLmsg = (
        <p>
          😗 Uh-oh. Looks like we suffered quite some loss. Don't feel upset!
          Here's a secret: Volatility is temperarory. Buy and hold good
          companies!
        </p>
      );
    }

    return (
      <div>
        <Modal open={open} toggle={this.toggle}>
          <ModalHeader>Let's take a look...</ModalHeader>
          <ModalBody className="black">
            <p>Out of the last {numDays} days...</p>
            {PLmsg}
            <Button onClick={this.handleGoBack}>
              Let's take a quick review and try it again.
            </Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  doneEquityTrading: state.equity.done,
  portfolio: state.equity.portfolio,
  lastTimestamp:
    state.equity.lineChartData.labels[
      state.equity.lineChartData.labels.length - 1
    ],
  lastQuote:
    state.equity.lineChartData.datasets[0].data[
      state.equity.lineChartData.datasets[0].data.length - 1
    ],
});

export default connect(mapStateToProps)(EndgameModal);
