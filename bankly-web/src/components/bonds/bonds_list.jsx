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

import BondsCardTooltip from "./bonds_card_tooltip";

const selectAvailableBonds = (state) => state.bonds.bonds;
const selectPortfolio = (state) => state.bonds.portfolio;
const selectTime = (state) => state.bonds.time;

export default function BasicCardExample() {
  const portfolio = useSelector(selectPortfolio);
  const bonds = useSelector(selectAvailableBonds);
  const time = useSelector(selectTime);

  let available_bonds = [];
  for (const [name, this_bond] of Object.entries(bonds)) {
    let maturityDate = new Date(time);
    maturityDate.setFullYear(
      maturityDate.getFullYear() + this_bond.maturityLength
    );
    let maturityDateStr = maturityDate.toLocaleDateString();

    let nameWithDate = name + " " + maturityDateStr;
    available_bonds.push(<BondsCardTooltip
      portfolio={portfolio}
      maturityDateStr={maturityDateStr}
      nameWithDate={nameWithDate}
      this_bond={this_bond}
      />);
  }

  return (
    <Container>
      <Row>{available_bonds}</Row>
    </Container>
  );
}
