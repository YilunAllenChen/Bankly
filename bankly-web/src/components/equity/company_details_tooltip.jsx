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
        <span id="companyDetailsTooltip">
          Pear Inc. is an American multinational pear company headquartered in
          somewhere, that designs, develops, and sells pears-related computer
          softwares and pears-related online services.
        </span>
        <Tooltip
          open={this.state.open}
          placement="bottom"
          target="#companyDetailsTooltip"
          toggle={this.toggle}
          style={{ fontSize: 14 }}
        >
          <p>
            You can find this kind of information on the internet - what the
            company does, where it is, how many people, even yearly revenues!
          </p>
          <p>
            Doing some company research before you invest is always a good idea. ALWAYS.
          </p>
        </Tooltip>
      </span>
    );
  }
}
