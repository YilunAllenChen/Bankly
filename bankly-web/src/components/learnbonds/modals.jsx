import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";

import "../../css/scrollable_modal.css";

export class WhatAreBonds extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.toggle}>🧐 What are bonds?</Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>What's a bond?</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              When you hear bond, think{" "}
              <b>
                <span style={{ color: "red" }}> debt</span>
              </b>
              .
            </p>
            <p>
              Imagine your best friend asks you to lend $1,000. As a return,
              every month in the upcoming year, he/she/they would give you a $10
              bill, and when it's exactly a year from now, he/she/they would pay
              you the full amount ($1,000) back. So, that is to say, after one
              year, a total of $1,120 will end up in your pocket. Sounds like a
              good deal!
            </p>
            <p>
              {" "}
              Now, your friend is{" "}
              <b>
                <span style={{ color: "red" }}> in your debt.</span>
              </b>{" "}
              But, to make it sound fancy, we'd call it, instead of debt, a{" "}
              <span style={{ color: "red" }}> bond </span>. Your friend issued a
              bond.
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export class BuyerOrSeller extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.toggle}>🛒 Buyer Or Seller?</Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>What's a bond?</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              Remember your friends who borrowed your money to do their
              business?
            </p>
            <p>
              In this scenario, you are the <b>buyer</b> of the bond (because
              you "paid" money to them!). Your friend is the <b>seller</b> of
              the bond (because he "received" your money!)
            </p>
            <p>So, when you see people dealing bonds, remember one thing: </p>
            <p>
              <strong>The Seller of the bond is in the Buyer's debt.</strong>
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export class Coupons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.toggle}>💵 Coupon: The Monthly Bill</Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>Coupon: The Dollar Bill</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              Remember the $10 bill your friend pays you every month for that
              $1,000 you lended?
            </p>
            <p>
              Big banks call this recurring little payments "series of cash
              flows" (think about all the money flowing our way - we love that).
              And how big of a percentage this monthly bill is compared to the
              amount lended, calculated annualy, is called a{" "}
              <span style={{ color: "red" }}>
                <b>Coupon.</b>
              </span>
            </p>
            <p>
              In this case, for the $1,000 we lended, we would receive $120
              every year in these cash flows. So the coupon of this bond would
              be 12%.
            </p>
            <p>Woah. That's a big coupon! Typically, coupons are below 5%.</p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export class MatureDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { open } = this.state;

    const today = new Date();
    let oneYearLater = new Date();
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);

    const todayStr = today.toLocaleDateString();
    const oneYearLaterStr = oneYearLater.toLocaleDateString();

    return (
      <div>
        <Button onClick={this.toggle}>🗓️ Maturity Date: Due Date</Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>Maturity Date: The Due Date</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              Your friend says the full amount, $1,000, will be paid back in
              exactly 1 year.
            </p>
            <p>
              So let see. Today is {todayStr}... So that means on{" "}
              {oneYearLaterStr} your friend will pay back the full original
              amount, $1,000 (and possibly plus a coupon payment on that day
              too!).
            </p>
            <p>
              That means, {oneYearLaterStr} is the{" "}
              <span style={{ color: "red" }}>
                <b>maturity date.</b>
              </span>{" "}
              Sometimes they're also called the{" "}
              <span style={{ color: "red" }}>
                <b>redemption date.</b>
              </span>{" "}
            </p>
            <p>So yes, basically Due Date. Just sounds fancier.</p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export class Nominal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.toggle}>💳 Nominal: Money Lended</Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>Nominal: Money Lended</ModalHeader>
          <ModalBody className="modalbody">
            <p>Remember how much you lended, the $1,000?</p>
            <p>
              That's your{" "}
              <span style={{ color: "red" }}>
                <b>Nominal.</b>
              </span>{" "}
              Or some people might also call it the{" "}
              <span style={{ color: "red" }}>
                <b>par.</b>
              </span>{" "}
            </p>
            <p>That's it! It's that simple.</p>

            <p>
              Oh, also, an important example. Let's say your friend sells you
              another piece of the exact same bond. You would now own 2 pieces
              of bonds, both with a $1,000 nominal.
            </p>
            <p>Now your friend owes you 2 * $1,000 = $2,000.</p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export class GovernmentBonds extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.toggle}>👑 Government Bonds</Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>Government Bonds</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              {" "}
              You probably have heard about these bonds that the government
              sells.{" "}
            </p>

            <p>
              For example, in the U.S. there are:
              <ul>
                <li>T-bonds (longest time, biggest coupon)</li>
                <li>T-notes(medium time, medium size coupon)</li>
                <li>T-bills(shortest time, smallest coupon)</li>
              </ul>
            </p>

            <p>
              The government typically uses this money to make our lives better
              and fund its day-to-day operations.
            </p>

            <p>
              As you could probably imagine, government bonds are usually
              considered the <span style={{ color: "green" }}>safest</span> -
              there's very little chance an entire country/government went
              bankrupt and wouldn't be able to pay back the bond!
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export class CorporateBonds extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.toggle}>👔 Corporate Bonds</Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>Corporate Bonds</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              Corporate bonds, intuitively, are bonds sold by corporates, or
              companies.
            </p>

            <p>
              Companies like bonds because it's a good and cheap way to get
              money to fund their growth and operations.
            </p>

            <p>
              Corporate bonds are a bit more risky than government bonds - but
              to make up for this extra risk for investors, they typically have
              a bigger coupon (tempting!).
            </p>

            <br></br>
            <p>
              *Something cool: Some corporate bonds can turn into the
              equity/stocks of that company! No, it's not alchemy or black
              magic. It's called a{" "}
              <span style={{ color: "red" }}>
                <b>Convertible Bond.</b>
              </span>{" "}
              Search it up!
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export class Defaults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.toggle}>👿 Debt Defaults</Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>Debt Defaults</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              Oops. Your friend's business went down the toilet. He/she/they
              said he/she/they can't pay back the bond anymore. It
              <span style={{ color: "red" }}>
                <b> defaulted</b>
              </span>
              .
            </p>

            <p>
              Oh, snap. Debt defaults happens sometimes, but let's hope it
              doesn't really happen to you.
            </p>

            <p>
              If a bond defaulted, you won't get your money back. What already
              went into your pocket, you get to keep. However, your original
              amount won't be repaid.
            </p>

            <p>
              It sounds horrible! But, it's a risk we have to undertake when
              investing in bonds.
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
