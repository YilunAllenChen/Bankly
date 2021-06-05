import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";

import "../../css/scrollable_modal.css";

export class WhatIsFX extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, theme: "primary" };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
      theme: "success",
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button theme={this.state.theme} onClick={this.toggle}>
          🧐 What is FX?
        </Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>What's FX?</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              When you hear FX, think
              <b>
                <span style={{ color: "red" }}>
                  {" "}
                  buying/selling other currencies.
                </span>
              </b>
              . It might be counter-intuitive, but the value of money can
              change!
            </p>
            <p>
              FX deals with this kind of fluctuations of values of different
              kinds of currencies. Sometimes, US Dollars is better to hold, and
              sometimes, the Chinese Yuan would be nice to have.
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export class WhyMoneyMove extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, theme: "primary" };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
      theme: "success",
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button theme={this.state.theme} onClick={this.toggle}>
          🧐 Value of Money Moves??
        </Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>How Does Value of Money Move?</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              You're probably familiar with the idea of inflation and deflation.
              That's the change of purchasing power of your money. If you could
              buy 1 loaf of bread with a coin, and now you need 2 coins, it's
              inflation. Vice versa.
            </p>
            <p>
              Now we just need to change the loafs of bread to other currencies!
              If you could buy a Mars Coin coin (currency on Mars) with $1 USD,
              and somehow now you need $2 USD for 1 Mars Coin(due to inflation),
              your USD is depreciating!
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export class SpotFX extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, theme: "primary" };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
      theme: "success",
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button theme={this.state.theme} onClick={this.toggle}>
          🧐 Spot FX?
        </Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>Spot FX?</ModalHeader>
          <ModalBody className="modalbody">
            <p>Spot FX is the most common way to trade FX.</p>
            <p>When you hear "Spot", think "the day after tomorrow", or t+2.</p>
            <p>
              What is means is, what you decided to buy/sell today, you'll pay
              for it/receive payment on the day after tomorrow.
            </p>
            <p>
              Let's make a spot trade. You want to buy 1M Mars Coin (The
              currency on Mars, abbreviated as MRC) on spot date. The bank says
              yes. The exchange rate of USD/MRC is 2.00. That means you'll need
              to pay $2M in USD.
            </p>
            <p>
              Now, two days from today is when you'll pay for the 1M Mars Coin
              with $2M. Maybe at this point the exchange rate has changed. Maybe
              2.10 or something. But you'll pay at the exchange rate on the day
              that the trade was made.
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export class ForwardFX extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, theme: "primary" };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
      theme: "success",
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button theme={this.state.theme} onClick={this.toggle}>
          🧐 Forward FX?
        </Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>Forward FX?</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              Remember the swaps we played with earlier? Forward FX is usually
              done with FX swaps. Ah. Our good friend swaps.
            </p>
            <p>
              Yes. We're putting that onto Foreign Exchange. Ooooh things are
              getting complicated.
            </p>
            <p>
              What it is, essentially, is two foreign exchange deals made at the
              same time, but settled on two different days.
            </p>
            <p>
              As an example, let's say you entered a swap position with a bank.
              You agreed to buy 1M Mars Coin, paid with USD, and sell the same
              amount of Mars Coins later this week.
            </p>
            <p>You might be wondering, why the heck do I want to do that?</p>
            <p>
              Well, if banks want to move settlement dates around for a deal
              that's already made, they can use these beauties! For example, a
              bank made a spot trade to buy Mars Coins that happens on Monday
              (hence settles on Wednesday), they can use a S/N (Spot-Next) swap
              to move the spot trade's settlement date to Thursday.
            </p>
            <p>
              That's because for a S/N swap, you're selling Mars Coins (the same
              amount that you were buying) on the spot date, and re-buying them
              on Thursday.
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
