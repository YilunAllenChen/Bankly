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
const selectTime = (state) => state.bonds.time;

export default function CardBodyTitleSubtitleExample() {
  let portfolio = useSelector(selectPortfolio);
  const time = useSelector(selectTime);

  const timeStr = new Date(time).toLocaleDateString();

  let holdings = portfolio.holdings;

  let listGroupItems = [];
  let yearlyCoupon = 0;

  console.log(portfolio)

  for (const [bondName, holdingData] of Object.entries(holdings)) {
    let bondEntry = holdingData.bondData;
    yearlyCoupon +=
      (holdingData.numContracts * bondEntry.coupon * bondEntry.nominal) / 100;
    listGroupItems.push(
      <ListGroupItem style={listGroupItemsStyle}>
        <Row>
          <Col xs="8" md="10">
            <p style={{ marginBottom: "0px" }}>
              <span style={{ fontSize: "1.1rem", color: "#000000" }}>
                <b>{bondName}</b>
              </span>
            </p>
          </Col>
          <Col xs="4" md="2" style={{ textAlign: "center" }}>
            <span style={{ color: "#000000" }}>{holdingData.numContracts}</span>
          </Col>
        </Row>
        <p style={{ marginBottom: "0.0rem" }}>
          <span style={{ fontSize: "0.9rem", color: "#777777" }}>
            {bondEntry.coupon} - {bondEntry.frequency} - {bondEntry.rating}
          </span>
        </p>
      </ListGroupItem>
    );
  }
  if (listGroupItems.length === 0) {
    listGroupItems = (
      <h6>You're not holding any bond at this moment. Let's go shopping!</h6>
    );
  }
  return (
    <Card style={{ width: "100%", margin: "10px" }}>
      <CardBody className="black">
        <CardTitle>Your Portfolio | Today: {timeStr}</CardTitle>
        <CardSubtitle>Cash: {portfolio.cash}</CardSubtitle>
        <br />
        <ListGroup style={listGroupStyle}>{listGroupItems}</ListGroup>
      </CardBody>
      <CardFooter className="black">
        Your expected yearly coupon: ${yearlyCoupon.toFixed(2).toLocaleString()}
      </CardFooter>
    </Card>
  );
}
