import React from "react";
import { Button, Modal, ModalBody, ModalHeader, Row } from "shards-react";
import { connect } from "react-redux";
import { toPage, resetBondsData, bondsTradingStatus } from "../../states/store";
import "./css/end_game_modal.css";

class EndgameModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
    this.handleGoToBonds = this.handleGoToBonds.bind(this);
    this.handleResetGame = this.handleResetGame.bind(this);
    this.handleContinueGame = this.handleContinueGame.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleGoToBonds() {
    this.props.dispatch(bondsTradingStatus(true));
    this.props.dispatch(
      toPage({
        view: "learnSwaps",
      })
    );
  }

  handleResetGame() {
    this.props.dispatch(resetBondsData());
    this.props.dispatch(bondsTradingStatus(false));
  }

  handleContinueGame() {
    this.props.dispatch(bondsTradingStatus(false));
  }

  render() {
    const open = this.props.doneBondsTrading;
    let totalValue = this.props.cash;
    for (const holdingData of Object.values(this.props.holdings)) {
      totalValue += holdingData.numContracts * holdingData.bondData.nominal;
    }
    return (
      <div>
        <Modal open={open} toggle={this.toggle}>
          <ModalHeader>Let's take a look...</ModalHeader>
          <ModalBody className="black">
            <p>
              Through investing in bonds with the initial $100,000 for all these
              years... you have made
            </p>
            <p style={{ color: "#55AA55" }}>
              ${(totalValue - 100000).toFixed(2)}!
            </p>
            <p>
              Now, that's a long time we spent to get this return. It's kind of
              boring, to some sense 🥱! But remember - patience is key! Bonds
              are slow, but they're far less volatile than equity!
            </p>
            <br></br>
            <Row>
              <Button
                outline
                theme="success"
                className="optionbutton"
                onClick={this.handleGoToBonds}
              >
                Next Up: Swaps
              </Button>{" "}
            </Row>
            <Row>
              <Button
                outline
                theme="warning"
                className="optionbutton"
                onClick={this.handleContinueGame}
              >
                I'm not done yet! Continue the game!
              </Button>{" "}
            </Row>
            <Row>
              <Button
                outline
                theme="danger"
                className="optionbutton"
                onClick={this.handleResetGame}
              >
                Need a Restart? Click here.
              </Button>
            </Row>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cash: state.bonds.portfolio.cash,
  holdings: state.bonds.portfolio.holdings,
  doneBondsTrading: state.bonds.done,
});

export default connect(mapStateToProps)(EndgameModal);
