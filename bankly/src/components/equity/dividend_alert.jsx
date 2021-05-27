import React from "react";
import { Alert } from "shards-react";
import "../../css/alert.css"

import { connect } from "react-redux";
import { tradeStock } from "../../states/global";

class SelfDismissingAlertExample extends React.Component {
  constructor(props) {
    super(props);

    this.interval = null;
    this.state = {
      visible: false,
      countdown: 0,
      timeUntilDismissed: 5
    };

    this.lastDividendPayment = 0;

    this.showAlert = this.showAlert.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.clearInterval = this.clearInterval.bind(this);
  }

  showAlert() {
    this.clearInterval();
    this.setState({ visible: true, countdown: 0, timeUntilDismissed: 5 });
    this.interval = setInterval(this.handleTimeChange, 1000);
  }

  handleTimeChange() {
    if (this.state.countdown < this.state.timeUntilDismissed - 1) {
      this.setState({
        ...this.state,
        ...{ countdown: this.state.countdown + 1 }
      });
      return;
    }

    this.setState({ ...this.state, ...{ visible: false } });
    this.clearInterval();
  }

  clearInterval() {
    clearInterval(this.interval);
    this.interval = null;
  }

  componentDidMount() {
    this.checkDividendDate = setInterval(
      this.checkDividend.bind(this),
      2500
    );
  }

  checkDividend() {
    if (this.props.lastTimestamp % 90 === 0)
    {
      let dividendStock = this.props.portfolio.stocks.PEAR;
      if (dividendStock <= 0) return;
      let dividendYield = this.props.stockData.yields.PEAR;
      let dividend = dividendStock * dividendYield / 4 / 100 * this.props.lastQuote;
      this.lastDividendPayment = dividend;
      this.props.dispatch(tradeStock({
        symbol: "PEAR",
        numShares: 0, 
        cashChange: dividend
      }));
      this.showAlert();
    }
  }


  render() {
    return (
      <div>
        <Alert className="mb-3 dividendAlert" open={this.state.visible} theme="success">
          Cha-ching! You just received your quarterly dividend: ${this.lastDividendPayment}
        </Alert>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  portfolio: state.equity.portfolio,
  stockData: state.equity.stocks,
  lastTimestamp: state.equity.lineChartData.labels[state.equity.lineChartData.labels.length - 1],
  lastQuote : state.equity.lineChartData.datasets[0].data[state.equity.lineChartData.datasets[0].data.length - 1]
})

export default connect(mapStateToProps)(SelfDismissingAlertExample)