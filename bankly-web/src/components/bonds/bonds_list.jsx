import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Col,
  Row,
  Container,
} from "shards-react";

import { useSelector, useDispatch } from "react-redux";
import { tradeBonds } from "../../states/store";

const today = new Date();

const style_bond_p = {
  fontSize: "14px",
  margin: 0,
};

const selectAvailableBonds = (state) => state.bonds.bonds;
const selectPortfolio = (state) => state.bonds.portfolio;

export default function BasicCardExample() {
  const portfolio = useSelector(selectPortfolio);

  function handleBuy(name, value) {
    if (portfolio.cash < value) {
      console.log("Not enough cash");
      return;
    }
    dispatch(
      tradeBonds({
        bondName: name,
        numContracts: 1,
        cashChange: -value,
      })
    );
  }

  function handleSell(name, value) {
    if (!(name in portfolio.holdings)){
      console.log("Not enough bonds to sell");
      return;
    }
    dispatch(
      tradeBonds({
        bondName: name,
        numContracts: -1,
        cashChange: value,
      })
    );
  }

  const dispatch = useDispatch();
  const bonds = useSelector(selectAvailableBonds);

  let available_bonds = [];
  for (const [name, this_bond] of Object.entries(bonds)) {
    let maturityDate = new Date();
    maturityDate.setFullYear(today.getFullYear() + this_bond.maturityLength);
    let maturityDateStr = maturityDate.toLocaleDateString();

    available_bonds.push(
      <Col key={name} sm="12" md="6" style={{ padding: "0px" }}>
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
              style={{ padding: "0.5rem 1.5rem", margin: "0.25rem 1rem" }}
              onClick={() => handleBuy(name, this_bond.value)}
            >
              Buy
            </Button>
            <Button
              style={{ padding: "0.5rem 1.5rem", margin: "0.25rem 1rem" }}
              onClick={() => handleSell(name, this_bond.value)}
            >
              Sell
            </Button>
          </CardFooter>
        </Card>
      </Col>
    );
  }

  return (
    <Container>
      <Row>{available_bonds}</Row>
    </Container>
  );
}
