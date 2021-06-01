import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";

import "../../css/scrollable_modal.css";

export class WhatAreOptions extends React.Component {
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
          🧐 What are options?
        </Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>What's a option?</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              When you hear option, think
              <b>
                <span style={{ color: "red" }}> right</span>
              </b>
              . The right to buy or sell certain assets at a predetermined
              price.
            </p>
            <p>
              If you hold an option to buy 100 shares of Apple's stocks at $120
              a share before the end of this year, then you are entitled to
              really buy Apple shares at $120 before the option expires, even
              when Apple's stocks are trading at, for example, $200 a share!
            </p>
            <p>
              Options are like six-guns. They're really really powerful, but you
              need to be careful not to shoot your own feet! For example, if,
              when your option to buy Apple share at $120 expires, Apple shares
              are trading at below $120 at $100/share, then there's no point to
              buy shares at $120! Your option basically become toilet paper
              (actually worse - since it's not even physical paper!)
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export class CallsAndPuts extends React.Component {
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
         📰 Calls And Puts?
        </Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>Calls And Puts?</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              Calls are rights to buy. If you buy in calls, it means you think
              the asset is going up.
            </p>
            <p>
              Puts are rights to sell. If you buy in puts, it means you think
              the asset is going down.
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export class OptionValuation extends React.Component {
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
         📊 How to Value Options?
        </Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>Evaluating an option?</ModalHeader>
          <ModalBody className="modalbody">
            <p>Let's say Amazing Inc. stock is trading at $100 a share.</p>
            <p>
              What would a $50 call that expires next year contract be worth,
              per share? In other words, how much is it going to cost to
              purchase this option?
            </p>
            <p>
              We need to divide it into two parts.
              <ul>
                <li>
                  The first part being the intrinsic value: If you exercise this
                  option to buy up the shares, and then resell the shares at
                  market prices immediately, you would make a $50 profit! So $50
                  would be the intrinsic value.
                </li>
                <li>
                  However, people believe Amazing Inc. can still head up higher
                  before the end of the year. This expectation, the time factor,
                  is the second part that contributes to the option's price. It
                  usually drives the price up even more. Let's say, by $10 per
                  share.
                </li>
              </ul>
            </p>
            <p></p>
            <p>In this case, the price of the option per share would be $60.</p>
            <p>
              But hey, you're basically spending $60 to enjoy the profit of a
              whole share, which is priced at $100! That's right - options are
              leveraged by nature.
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export class OptionProperties extends React.Component {
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
         💰 Making/Losing Money
        </Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>Making/losing Money with Options</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              Let's say you love Amazing Inc., and think it'll go up. Right now,
              Amazing Inc. shares are currently trading at $100 / share.
            </p>
            <p>
              You think to yourself that Amazing Inc. shares will shoot up to
              $200 and above in no time! So you start purchasing $200 calls that
              expires by the end of the time.
            </p>
            <p>
              At the time, $200 calls are priced at $5 / share. Very cheap -
              because people don't believe it'll go that high! (Such options are called "Out of money")
            </p>
            <p>
              Let say you purchased 10 contracts with 100 shares per contract.
              Let's review your order: You purchased, in total, the right to buy
              1,000 Amazing Inc. shares at $200 / share, by the end of the year.
              You spent 10 * 100 * 5 = $5000 on these 10 contracts of options.
            </p>
            <p>
              Now, if by the end of the year, Amazing Inc. didn't go up to $200,
              your options will expire worthless. However, Amazing Inc. did
              really well and went up to $300. Holy molly!
            </p>
            <p>
              Now, with the options, you are entitled to purchase the
              shares at $200 / share. You did that and sold the shares at market
              price immediately. That's ($300 - $200) * 1000 = $100,000 into your pocket!
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
