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
        <span id="dividendTooltip">Dividend Yield: 8.02</span>
        <Tooltip
          open={this.state.open}
          placement='bottom'
          target="#dividendTooltip"
          toggle={this.toggle}
          style={{ fontSize: 14 }}
        >
          <p>8.02%! That's a really good dividend yield!😁</p>
          <p>
            Remember this is quarterly so you will be receiving around 2% of
            your stake at PEAR every around 90 days.
          </p>
        </Tooltip>
      </span>
    );
  }
}
