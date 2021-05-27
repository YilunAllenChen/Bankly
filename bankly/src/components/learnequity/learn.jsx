import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";

import "../../css/equity.css";

export class WhatIsEquity extends React.Component {
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
        <Button onClick={this.toggle}>🤔 What the junk is Equity?</Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>What's Equity?</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              <b>Equity is basically how much of a business/company you own.</b>{" "}
              If you have 5% equity in Uber Inc, it means you own 5% of Uber's
              business!
            </p>
            <p>
              Think about a farm. Farming business is good but you don't want to
              do the farming yourself. So you decide to buy a small piece of
              that farmland, and let farmers do the farming part. That's it! You
              own some Equity of that farm!
            </p>
            <p>
              To show their appreciation for you being part of the business and
              owning equity, some companies throw part of their profits into
              your pockets, in forms of
              <font style={{ color: "red" }}> dividends</font> !
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export class HowToTradeEquity extends React.Component {
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
        <Button onClick={this.toggle}>🤔 How Do I Trade Equity?</Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>What's Equity?</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              You can trade equity by buying/selling{" "}
              <font style={{ color: "red" }}>shares of stocks</font> on stock
              exchanges. Shares are basically tokens to show that you actually
              own that equity.
            </p>
            <p>
              There are brokers like Robinhood, WeBull, TDAmerite and others
              where you can trade stocks on your phone. If you're rich, you
              might also find bankers who're willing to do that for you for a
              fee (of course!).
            </p>
            <p>
              Generally speaking, you can trade equity on the stock exchanges on
              weekdays, 9:30AM - 4:00PM EST.
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export class StockGoesUp extends React.Component {
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
        <Button onClick={this.toggle}>📈 Stock Goes Up!</Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>Stock goes up</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              When a stock that you own goes up in price, if you sell it, you
              make profits! Very intuitive right?
            </p>
            <p>
              There could be many reasons why stocks go up/down. Generally
              speaking, if a business is good, it goes up! This includes and is
              not limited to:
            </p>
            <ul>
              <li>Good Leadership (a good boss matters!)</li>
              <li>
                Strong sales/profitability (makes good products and sell a lot
                of them!)
              </li>
              <li>
                Good Industry Outlook (people think what they do is going to
                become big!)
              </li>
            </ul>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export class Dividends extends React.Component {
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
        <Button onClick={this.toggle}>💰 Dividends!</Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>Dividends</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              You don't have to sell stocks to make money! Some companies give
              you cash award for simply holding their stock for a long time.
            </p>
            <p>
              Typically companies that pay dividends do it 4 times a year. (Or,
              quarterly dividends)
            </p>
            <p>
              Typically, companies in banking, real estate and energy industries
              pay more dividends. Tech companies like to use that extra cash to
              fuel their growths, so they don't pay a lot of dividends.
            </p>
            <p>
              What's good about dividends is that you not only get to enjoy this
              extra handful of cash - you also benefit from their stock price
              going up!
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
