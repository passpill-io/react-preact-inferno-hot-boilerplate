import React, { Component } from 'react';

class Oo extends Component {
  state = {
    text: ''
  }

  render() {
    return (
      <div>
        <h2>Object Component</h2>
        <input type="text" onChange={ e => this.setState({text: e.target.value})} value={ this.state.text } />
      </div>
    );
  }
}

export default Oo;
