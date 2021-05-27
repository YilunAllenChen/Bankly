import React from "react";
import { Tooltip } from "shards-react";

export default class TooltipExample extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { open: false };
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <span>
        <span id="portfolioHover"> shares of </span>
        <Tooltip
          open={this.state.open}
          placement="bottom"
          target="#portfolioHover"
          toggle={this.toggle}
          style={{ fontSize: 14 }}
        >
          <p>
            Nice! You own shares of this company. Many companies pay
            dividends - usually every 90 days or so.
          </p>
        </Tooltip>
      </span>
    );
  }
}
