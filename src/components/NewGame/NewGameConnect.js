import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { clearGame } from './GameState.js'
import Level from './Level.js'

import NewGame from './NewGameStyled';

class NewGameConnect extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirectToGame: false
    }

    this.handleLevelSelect = this.handleLevelSelect.bind(this)
  }

  handleLevelSelect(level) {
    clearGame()

    Level(level)

    this.setState({
      redirectToGame: true
    })
  }

  render() {
    return this.state.redirectToGame
      ? <Redirect to="/game" />
      : <NewGame onLevelSelect={this.handleLevelSelect} />
  }
}

export default NewGameConnect
