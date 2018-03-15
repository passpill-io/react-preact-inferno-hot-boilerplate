import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Oo from './Oo'
import Functional from './Functional'

class App extends Component {
  state = {
    text: ''
  }
  render() {
    return (
      <div>
        <Functional onChange={ e => this.setState({text: e.target.value})} value={ this.state.text } />
        <Oo />
      </div>
    );
  }
}

export default hot(module)(App)
