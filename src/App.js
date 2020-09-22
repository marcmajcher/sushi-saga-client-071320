import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Wallet from './containers/Wallet';

const API = 'http://localhost:3000/sushis';
const NUM_PIECES = 4;

class App extends Component {
  state = {
    sushi: [],
    startIndex: 0,
    money: 100,
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((sushi) => this.setState({ sushi }));
  }

  showMore = () => {
    this.setState({ startIndex: this.state.startIndex + NUM_PIECES });
  };

  eatSushi = (sushi) => {
    const newMoney = this.state.money - sushi.price;
    if (newMoney >= 0) {
      this.setState({ money: newMoney });

      const newSushi = this.state.sushi.map((piece) => {
        const newPiece = { ...piece };
        if (sushi.id === piece.id) {
          newPiece.eaten = true;
        }
        return newPiece;
      });
      this.setState({ sushi: newSushi });
    }
  };

  addMoney = (amount) => {
    this.setState({ money: this.state.money + parseInt(amount) });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          showMore={this.showMore}
          eatSushi={this.eatSushi}
          sushi={this.state.sushi.slice(
            this.state.startIndex,
            this.state.startIndex + NUM_PIECES
          )}
        />
        <Table
          money={this.state.money}
          plates={this.state.sushi.filter((piece) => piece.eaten)}
        />
        <Wallet addMoney={this.addMoney} />
      </div>
    );
  }
}

export default App;
