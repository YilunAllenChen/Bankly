import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";

import "../../css/scrollable_modal.css";

export class WhatAreSwaps extends React.Component {
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
          🧐 What are Swaps?
        </Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>What's a swap?</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              Swap is basically two parties exchanging cash flows in different
              forms.
            </p>
            <p>
              OK that was pretty confusing. <strike>Scratch that.</strike>
            </p>
            <p>
              Now consider this: You have an 🍎 apple orchard. Your best friend
              Oliver owns a 🍇 grape field. You think apple prices will go up
              compared to grapes. Oliver, however, is a grape person. He thinks
              the opposite. So you two made a bet:
            </p>
            <p>
              You think 100kg of apples will be worth more than 50kg of olives.
              So every month, if 100kg of apples is indeed more expensive than
              50kg of grapes, then Oliver has to pay you that price difference.
              For example, if at the end of the month, apple is $5/kg and grapes
              are at $8/kg, then Oliver would have to pay you 5*100 - 8*50 =
              $100! Vice versa, if 50kgs of grapes are more expensive, then you
              need to pay Oliver.
            </p>
            <p>
              That's a swap! You're entering a swap position in apples vs.
              grapes.
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export class WhySwaps extends React.Component {
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
          🤲🏻 Profit or Loss?
        </Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>Swaps: When do you make/lose money?</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              You and Oliver have both been liking the swap contract that you
              made.
            </p>
            <p>
              Then something dramatic happened. On a stormy day, a big herd of
              raccoons 🦝 went into Oliver's grape fields and ate up most of the
              grapes. 🍇
            </p>
            <p>
              Then the supply and demand seesaw starts working. The shortage of
              grapes drove grape price up like a rocket. 📈
            </p>
            <p>
              Although Oliver is having difficulty staying afloat with his
              grapes fields, all of a sudden you need to pay a ton of money to
              him because grapes are so expensive at this moment!!
            </p>
            <p>
              That's how you can make/lose money in a swap. If the thing you are
              betting on goes up compared to the thing you bet against, you make
              money. Vice versa.
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export class Notional extends React.Component {
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
          🙂 Notional
        </Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>Notional</ModalHeader>
          <ModalBody className="modalbody">
            <p>Typically, swaps have a "face value" called a notional.</p>
            <p>
              TL;DR would be: Notional defines how big of a payment you will
              get/pay for a swap contract.
            </p>
            <p>
              For example, for a swap of $1,000 notional, you would be
              paying/receiving 10 times as much as a $100 notional swap, for the
              same change to the asset you bet on/against.
            </p>
            <p>
              Notionals come in many forms. In the war between apples and
              grapes, we could define the notional to be:{" "}
              <ol>
                <li>
                  fixed at the price of 100kg apples at the day when the swap is
                  made. That way we would have a Fixed Notional. Or:
                </li>
                <li>
                  let the notional float with the most up-to-date price of
                  100kgs of apples. That way we would be having a Variable
                  Notional.
                </li>
              </ol>
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export class SwapsStrategy extends React.Component {
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
          💭 Why Swaps
        </Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>Why Swaps</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              Why do we trade swaps? Well, let's look at Oliver!
            </p>
            <p>
              With the huge swap payment that we made, Oliver was able to quickly
              recover from the raccoon catastrophy. It's almost like he bought
              insurance on his grape fields. Ah, lucky Oliver!
            </p>
            <p>
              That's one of the most popular usage of swaps. It acts as a
              hedging tool to move risks off your shoulders.
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export class EquitySwaps extends React.Component {
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
        🏛️ Equity Swaps
        </Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>Equity Swaps</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              Oliver's grape 🍇 business is booming! His grape company went
              public and is now tradable on stock exchanges.
            </p>
            <p>
              You believe Oliver's business will continue its success, so you
              wish to enter a bullish swap position for Oliver's Grapes Inc.,
              meaning, you think Oliver's business will go up!
            </p>
            <p>
              This is when we need an Equity Swap. Let's say a bank comes to you
              and say, hey we can sell you that swap with $1,000 variable
              notional. You need to pay us monthly premiums at $10 per contract,
              and we pay you for the gains in the shares.
            </p>
            <p>
              Now what the heck does that mean? Don't panic. here's what that
              means.
            </p>
            <p>
              Let's say Oliver's Grapes Inc. is trading at $100 a share at this
              moment. Then buying 1 contract of swap would be more or less like
              owning $1,000/$100 = 10 shares of Oliver's Grapes Inc. stock.
            </p>
            <p>
              As an example, let's say the stock goes up by 20% to $120/share by
              the end of the month. Then the nominal value also grows by 20%,
              mirroring the growth of the share, to $1,200. Now, the bank will
              need to pay you the extra $200, because that's what you agreed
              upon. In the meantime, it's also time for you to pay the monthly
              premium. So we subtract the $10 from the $200, you got $190 in
              profits.
            </p>
            <p>
              Another example: the second month, the stock goes down 8.3% from
              $120 to $110 per share. Aw, snap. Now you not only need to pay the
              monthly premium, but also the capital loss on the equity. That'd
              be $1,200 * 8.3% + 10 = $110.
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export class InterestRateSwaps extends React.Component {
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
          💰 Interest Rate Swaps
        </Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>Interest Rate Swaps</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              There's this thing called LIBOR (London Inter-bank Offered Rate)
              that banks 🏦 around the world 🌎 all agree on. It's basically the
              interest rate that banks charge each other when lending each other
              money.
            </p>
            <p>
              Now, you can put swaps on that too! Let's say you want to borrow
              money from a local bank at a fixed rate, and lend into other banks
              at dynamic LIBOR rates.
            </p>
            <p>
              Hold on a second. Why would you do that? Well, if the fixed rate
              that you're borrowing is lower than LIBOR rate that you're
              receiving, then you're making money 💰 from that difference in
              interest rates! And that's exactly how Interest Rate Swaps work.
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export class CDS extends React.Component {
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
        📜 CDS in 2008 Crisis
        </Button>
        <Modal open={open} toggle={this.toggle} backdrop={false} size="lg">
          <ModalHeader>Credit Default Swaps in 2008</ModalHeader>
          <ModalBody className="modalbody">
            <p>
              You may remember what caused the 2008 financial crisis. It was
              partially caused by a special kind of swap called the Credit
              Default Swaps (CDS). What it does is this:
            </p>
            <p>
              Banks will pay AIG (American International Group, a very big
              company!) money monthly for these swaps. However, in case the
              average homeowners (like you and me) can't pay for their mortgages
              and default on their credits, AIG will need to pay big big money
              to the banks.
            </p>
            <p>
              What went wrong? All banks think them safe as long as they hold
              these swaps. However, as the mortgages start to default in a
              overwhelming way, AIG realizes that, holy molly, I can't pay that
              much insurance money because I don't have that much!
            </p>
            <p>
              These banks holding their swaps then realized, hey if AIG goes
              bankrupt, all of our swaps become toilet paper! That's such a huge
              loss on our ends that we would also go bankrupt!
            </p>
            <p>And yes, the whole financial system almost collapsed.</p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
