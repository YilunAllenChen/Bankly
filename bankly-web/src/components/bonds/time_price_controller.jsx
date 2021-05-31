import React from "react";

import { connect } from "react-redux";
import { stepBondsTime } from "../../states/store";

class BondTimePriceController extends React.Component {
  constructor(props) {
    super(props);
  }

  timeStep = () => {
    if (this.props.done) return;
    this.props.dispatch(stepBondsTime());
  };

  componentDidMount() {
    this.timeStepInterval = setInterval(this.timeStep.bind(this), 60);
  }

  componentWillUnmount() {
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
