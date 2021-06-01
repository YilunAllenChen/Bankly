import React from "react";
import { Button, Modal, ModalBody, ModalHeader, Row } from "shards-react";
import { connect } from "react-redux";
import {
  toPage,
  resetStockData,
  equityTradingStatus,
} from "../../states/store";
import "./css/end_game_modal.css";

class EndgameModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
    this.handleGoToBonds = this.handleGoToBonds.bind(this);
    this.handleResetGame = this.handleResetGame.bind(this);
    this.handleContinueGame = this.handleContinueGame.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleGoToBonds() {
    this.props.dispatch(equityTradingStatus(true));
    this.props.dispatch(
      toPage({
        view: "learnBonds",
      })
    );
  }

  handleResetGame() {
    this.props.dispatch(resetStockData());
    this.props.dispatch(equityTradingStatus(false));
  }

  handleContinueGame() {
    this.props.dispatch(equityTradingStatus(false));
  }

  render() {
    const open = this.props.doneEquityTrading;
    const numDays = this.props.lastTimestamp;
    const totalValue =
      this.props.portfolio.stocks.PEAR * this.props.lastQuote +
      this.props.portfolio.cash;

    let PLmsg = "";
    if (totalValue > 30000) {
      PLmsg = (
        <span>
          <p>
            🤑 You made such a HUGE gain! Hope you realized the power of buying &
            holding good companies!"{" "}
          </p>{" "}
          <p>
            You made ${(totalValue - 10000).toFixed(2)} in profits - that's a{" "}
            <span style={{ color: "#118811" }}>
              {(((totalValue - 10000) / 10000) * 100).toFixed(2)}%
            </span>{" "}
            gain from where you started! Congratulations!
          </p>
        </span>
      );
    } else if (totalValue > 10000) {
      PLmsg = (
        <span>
          <p>😆 Not bad! You made quite a small fortune through equity trading!</p>
          <p>
            You made ${(totalValue - 10000).toFixed(2)} in profits - that's a{" "}
            <span style={{ color: "#118811" }}>
              {(((totalValue - 10000) / 10000) * 100).toFixed(2)}%
            </span>{" "}
            gain from where you started! Congratulations!
          </p>
        </span>
      );
    } else if (totalValue === 10000) {
      PLmsg = (
        <p>
          🤨 Looks like you haven't moved an inch! Did you really try your best?
        </p>
      );
    } else if (totalValue > 8000) {
      PLmsg = (
        <span>
          <p>😐 You suffered a small loss but pulled out just in time!</p>
          <p>
            You made a ${(totalValue - 10000).toFixed(2)} in loss. That's a{" "}
            <span style={{ color: "#881111" }}>
              {(((totalValue - 10000) / 10000) * 100).toFixed(2)}%
            </span>{" "}
            loss from what we had in the beginning. It's ok! Don't feel bad! Remember:
            patience is key!
          </p>
        </span>
      );
    } else {
      PLmsg = (
        <span>
          <p>😗 Uh-oh. Looks like we suffered quite some loss here.</p>{" "}
          <p>
            You made a ${(totalValue - 10000).toFixed(2)} in loss. That's a{" "}
            <span style={{ color: "#881111" }}>
              {(((totalValue - 10000) / 10000) * 100).toFixed(2)}%
            </span>{" "}
            loss from what we had in the beginning. Don't feel upset! Here's a
            secret: Volatility is temperarory. Buy and hold good companies for a
            long time!
          </p>
        </span>
      );
    }

    return (
      <div>
        <Modal open={open} toggle={this.toggle}>
          <ModalHeader>Let's take a look...</ModalHeader>
          <ModalBody className="black">
            <p>Out of the past {numDays} days...</p>
            {PLmsg}

            <br></br>
            <Row>
              <Button
                outline
                theme="success"
                className="optionbutton"
                onClick={this.handleGoToBonds}
              >
                Next Up: Bonds!
              </Button>{" "}
            </Row>
            <Row>
              <Button
                outline
                theme="warning"
                className="optionbutton"
                onClick={this.handleContinueGame}
              >
                I'm not done yet! Continue the game!
              </Button>{" "}
            </Row>
            <Row>
              <Button
                outline
                theme="danger"
                className="optionbutton"
                onClick={this.handleResetGame}
              >
                Need a Restart? Click here.
              </Button>
            </Row>
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
