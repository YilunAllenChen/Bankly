import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  CardFooter,
} from "shards-react";
import { useSelector } from "react-redux";

const listGroupStyle = {
  borderColor: "black",
  fontSize: "15px",
  color: "black",
};

const listGroupItemsStyle = {
  padding: "0.4rem 0.6rem",
};

const selectPortfolio = (state) => state.bonds.portfolio;
const selectBonds = (state) => state.bonds.bonds;
const selectTime = (state) => state.bonds.time;

export default function CardBodyTitleSubtitleExample() {
  let portfolio = useSelector(selectPortfolio);
  let bondsData = useSelector(selectBonds);
  let holdings = portfolio.holdings;

  const time = useSelector(selectTime);
  let listGroupItems = [];
  let yearlyCoupon = 0;

  for (const [bondName, numBonds] of Object.entries(holdings)) {
    let bondEntry = bondsData[bondName];
    yearlyCoupon += numBonds * bondEntry.coupon * bondEntry.nominal / 100;
    listGroupItems.push(
      <ListGroupItem style={listGroupItemsStyle}>
        <Row>
          <Col xs="8" md="10">
            <p style={{ marginBottom: "0px" }}>
              <span style={{ fontSize: "1.1rem", color: "#000000" }}>
                <b>{bondEntry.name}</b>
              </span>
            </p>
            <p style={{ marginBottom: "0.0rem" }}>
              <span style={{ fontSize: "0.9rem", color: "#777777" }}>
                {bondEntry.nominal} - {bondEntry.coupon} - {bondEntry.frequency}{" "}
                - {bondEntry.rating}
              </span>
            </p>
          </Col>
          <Col xs="4" md="2" style={{ textAlign: "center" }}>
            <span style={{ color: "#000000" }}>{numBonds}</span>
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
  if (listGroupItems.length === 0) {
    listGroupItems = (
      <h6>You're not holding any bond at this moment. Let's go shopping!</h6>
    );
  }
  return (
    <Card style={{width: "100%", margin: "10px"}}>
      <CardBody className="black">
        <CardTitle>Your Portfolio</CardTitle>
        <CardSubtitle>Cash: {portfolio.cash}</CardSubtitle>
        <br />
        <ListGroup style={listGroupStyle}>{listGroupItems}</ListGroup>
      </CardBody>
      <CardFooter className="black">Your expected yearly coupon: ${yearlyCoupon.toFixed(2).toLocaleString()}</CardFooter>
    </Card>
  );
}
