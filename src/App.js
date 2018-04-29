import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Oo from './Oo'
import Functional from './Functional'

class App extends Component {
  state = {
    text: ''
  }
  ports = {
    3101: 'React',
    3102: 'Preact',
    3103: 'Inferno'
  }
  render() {
    return (
      <div>
        <h1>{ this.ports[ location.port ] }</h1>
        <Functional onChange={ e => this.setState({text: e.target.value})} value={ this.state.text } />
        <Oo />
      </div>
    );
  }
}

export default hot(module)(App)
