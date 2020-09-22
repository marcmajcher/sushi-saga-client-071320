import React, { Component } from 'react';

export default class Wallet extends Component {
  state = {
    amount: 0,
  };

  addMoney = () => {
    this.props.addMoney(this.state.amount);
    this.setState({ amount: 0 });
  };

  render() {
    return (
      <div>
        $$$${' '}
        <input
          type="number"
          value={this.state.amount}
          onChange={(e) => this.setState({ amount: e.target.value })}
        />
        <button onClick={this.addMoney}>Add Money</button>
      </div>
    );
  }
}
