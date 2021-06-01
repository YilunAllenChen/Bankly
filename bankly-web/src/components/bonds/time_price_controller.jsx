import React from "react";

import { connect } from "react-redux";
import { stepBondsTime, bondsTradingStatus } from "../../states/store";

class BondTimePriceController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  timeStep = () => {
    if (this.props.done) return;
    this.props.dispatch(stepBondsTime());
  };

  componentDidMount() {
    this.timeStepInterval = setInterval(this.timeStep.bind(this), 1000);
  }

  componentWillUnmount() {
    this.props.dispatch(bondsTradingStatus(false));
    clearInterval(this.timeStepInterval);
  }

  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({
  portfolio: state.bonds.portfolio,
  done: state.bonds.done,
});

export default connect(mapStateToProps)(BondTimePriceController);
