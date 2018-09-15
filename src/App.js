import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import styled from "styled-components";


class App extends Component {
  constructor(){
    super()
    this.state = {
      
        
    }

  }
  cardClick(card){
    console.log("card clicked", card)
  }
  render() {
    const cardsRendered = this.state.cards.map((rowOfCard, rowIndex)=> 
      <tr>
      {rowOfCard.map((card, indexOfCardInRow)=><td onClick={()=>this.cardClick(card)}><Card card = {card}/></td>)}
      </tr>)
    return (
      <div className="App">
        <header>
          Memory Game
        </header>
        <table><tbody>{cardsRendered}</tbody></table>
      </div>
    );
  }

}

export default App;
