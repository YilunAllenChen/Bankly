import React from "react";
import { FormInput, Col, Row, Button } from "shards-react";

import { connect } from "react-redux";
import {
  appendEquityLineChartDataPoint,
  tradeStock,
} from "../../states/global";
import Portfolio from "./equity_portfolio";

class EquityForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      side: "Buy",
      numShares: 100,
      error: "",
    };

    this.changeNumShares = this.changeNumShares.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
    this.handleSell = this.handleSell.bind(this);
  }

  changeNumShares(e) {
    this.setState({
      numShares: parseInt(e.target.value),
    });
  }

  handleBuy() {
    let symbol = "PEAR";
    let historyPrice = this.props.lineChartData.datasets[0].data;
    let quote = historyPrice[historyPrice.length - 1];
    let { cash } = this.props.portfolio;
    let amount = this.state.numShares * quote;
    if (this.state.numShares < 0) {
      this.setState({
        error: "Woah. Can't buy negative number of shares!",
      });
      return;
    }
    if (amount > cash) {
      this.setState({
        error: "Can't buy that many - not enough cash!",
      });
      return;
    }
    this.props.dispatch(
      tradeStock({
        symbol: symbol,
        numShares: this.state.numShares,
        cashChange: -amount,
      })
    );
    this.setState({
      error: "",
    });
  }

  handleSell() {
    let symbol = "PEAR";
    let historyPrice = this.props.lineChartData.datasets[0].data;
    let quote = historyPrice[historyPrice.length - 1];
    let { stocks } = this.props.portfolio;
    let amount = this.state.numShares * quote;
    if (this.state.numShares < 0) {
      this.setState({
        error: "Woah. Can't sell negative number of shares!",
      });
      return;
    }
    if (this.state.numShares > stocks[symbol]) {
      this.setState({
        error:
          "Woah. Not enough shares to sell. If you want to learn to *short* a stock, try our later little games!",
      });
      return;
    }
    this.props.dispatch(
      tradeStock({
        symbol: symbol,
        numShares: -this.state.numShares,
        cashChange: amount,
      })
    );
    this.setState({
      error: "",
    });
  }

  pushNewPrice = () => {
    const data = this.props.lineChartData.datasets[0].data;
    let quote = data[data.length - 1];
    let newQuote = (quote * (0.94 + Math.random() * 0.13)).toFixed(2);
    console.log("Wala");
    this.props.dispatch(
      appendEquityLineChartDataPoint({
        value: newQuote,
      })
    );
  };

  componentDidMount() {
    this.intervalId = setInterval(this.pushNewPrice.bind(this), 2500);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render() {
    let historyPrice = this.props.lineChartData.datasets[0].data;
    let quote = historyPrice[historyPrice.length - 1];

    return (
      <div>
        <div>
          <h2 style={{ color: "white" }}>
            PEAR shares are trading at{" "}
            <font style={{ color: "aqua" }}>${quote}</font> per share.
          </h2>
          <hr></hr>

          <p>Enter the number of shares you want to trade.</p>
          <Row>
            <Col sm="6" lg="6">
              <FormInput
                type="number"
                size="lg"
                placeholder="100"
                onChange={this.changeNumShares}
              />
            </Col>
          </Row>
        </div>
        <hr></hr>
        <Row>
          <Col xs="6" md="4">
            <Button theme="info" onClick={this.handleBuy}>
              Buy {this.state.numShares} shares at {quote}
            </Button>
          </Col>
          <Col xs="6" md="4">
            <Button theme="info" onClick={this.handleSell}>
              Sell {this.state.numShares} shares at {quote}
            </Button>
          </Col>
        </Row>
        <Row>
          <font style={{ color: "red" }}>{this.state.error}</font>
        </Row>
        <hr></hr>
        <Portfolio />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lineChartData: state.equity.lineChartData,
  portfolio: state.equity.portfolio,
});

export default connect(mapStateToProps)(EquityForm);
