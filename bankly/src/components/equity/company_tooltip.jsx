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
        <span id="companyTooltip">🍐 PEAR (Pear Inc.)</span>
        <Tooltip
          open={this.state.open}
          placement="bottom"
          target="#companyTooltip"
          toggle={this.toggle}
          style={{ fontSize: 14 }}
        >
          <p>
            OK. This is not a real company. But it'll do for our little trading
            game. Try trading its stocks! Pear Inc. has been a pioneer in
            pear-related softwares and its business is booming!
          </p>
        </Tooltip>
      </span>
    );
  }
}
