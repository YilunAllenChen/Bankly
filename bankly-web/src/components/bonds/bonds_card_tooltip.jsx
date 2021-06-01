import React from "react";
import {
  Tooltip,
  Button,
  Col,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
} from "shards-react";

import { connect } from "react-redux";

import { tradeBonds } from "../../states/store";

const style_bond_p = {
  fontSize: "14px",
  margin: 0,
};

class TooltipExample extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { open: false };
    this.handleBuy = this.handleBuy.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleBuy(portfolio, name, numContracts, bondData, value) {
    if (portfolio.cash < value * numContracts) {
      console.log("Not enough cash");
      return;
    }
    this.props.dispatch(
      tradeBonds({
        bondName: name,
        numContracts: numContracts,
        bondData: bondData,
        cashChange: -value * numContracts,
      })
    );
  }

  render() {
    let { portfolio, this_bond, maturityDateStr, nameWithDate } = this.props;
    let id = this_bond.name.replace(/ /g, "_").replace(".", "");
    return (
      <>
        <Col
          key={this_bond.name}
          sm="12"
          md="6"
          style={{ padding: "0px" }}
          id={id}
        >
          <Card style={{ margin: "10px" }}>
            <CardHeader
              className="black"
              style={{ textAlign: "center", padding: "0.7rem 0.9rem" }}
            >
              {this_bond.name}
            </CardHeader>
            <CardBody
              className="black"
              style={{ textAlign: "center", padding: "1rem" }}
            >
              <p style={style_bond_p}>{maturityDateStr}</p>
              <p style={style_bond_p}>{this_bond.coupon}</p>
              <p style={style_bond_p}>${this_bond.nominal.toLocaleString()}</p>
              <p style={style_bond_p}>{this_bond.frequency}</p>
              <p style={style_bond_p}>{this_bond.rating}</p>
            </CardBody>
            <CardFooter
              style={{ textAlign: "center", padding: "0.6rem 0.9rem" }}
              className="black"
            >
              <Button
                style={{ padding: "0.5rem 1.5rem", margin: "0.25rem 0.6rem" }}
                onClick={() =>
                  this.handleBuy(
                    portfolio,
                    nameWithDate,
                    1,
                    this_bond,
                    this_bond.value
                  )
                }
              >
                Buy 1
              </Button>{" "}
              <Button
                style={{ padding: "0.5rem 1.5rem", margin: "0.25rem 0.6rem" }}
                onClick={() =>
                  this.handleBuy(
                    portfolio,
                    nameWithDate,
                    10,
                    this_bond,
                    this_bond.value
                  )
                }
              >
                Buy 10
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Tooltip
          open={this.state.open}
          target={"#" + id}
          toggle={this.toggle}
          style={{ fontSize: 14 }}
        >
          <p>Here's everything you need to know about the bond.</p>
          <p>
            maturity date, coupon, nominal, payment frequency, and credit
            ratings.
          </p>
        </Tooltip>
      </>
    );
  }
}

export default connect()(TooltipExample);
