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


const style_bond_p = {
  fontSize: "14px",
  margin: 0,
};

const selectAvailableBonds = (state) => state.bonds.bonds;
const selectPortfolio = (state) => state.bonds.portfolio;
const selectTime = (state) => state.bonds.time;

export default function BasicCardExample() {
  const portfolio = useSelector(selectPortfolio);

  function handleBuy(name, numContracts, bondData, value) {
    if (portfolio.cash < value * numContracts) {
      console.log("Not enough cash");
      return;
    }
    dispatch(
      tradeBonds({
        bondName: name,
        numContracts: numContracts,
        bondData: bondData,
        cashChange: -value * numContracts,
      })
    );
  }

  // function handleSell(name, value) {
  //   if (!(name in portfolio.holdings)) {
  //     console.log("Not enough bonds to sell");
  //     return;
  //   }
  //   dispatch(
  //     tradeBonds({
  //       bondName: name,
  //       numContracts: -1,
  //       cashChange: value,
  //     })
  //   );
  // }

  const dispatch = useDispatch();
  const bonds = useSelector(selectAvailableBonds);
  const time = useSelector(selectTime);

  let available_bonds = [];
  for (const [name, this_bond] of Object.entries(bonds)) {
    let maturityDate = new Date(time);
    maturityDate.setFullYear(maturityDate.getFullYear() + this_bond.maturityLength);
    let maturityDateStr = maturityDate.toLocaleDateString();

    let nameWithDate = name + " " + maturityDateStr;

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
              style={{ padding: "0.5rem 1.5rem", margin: "0.25rem 0.6rem" }}
              onClick={() =>
                handleBuy(nameWithDate, 1, this_bond, this_bond.value)
              }
            >
              Buy 1
            </Button>{" "}
            <Button
              style={{ padding: "0.5rem 1.5rem", margin: "0.25rem 0.6rem" }}
              onClick={() =>
                handleBuy(nameWithDate, 10, this_bond, this_bond.value)
              }
            >
              Buy 10
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
