import {dropRight, shuffle} from 'lodash'
import cards from './cards.js'
import { saveSettings } from './GameState.js'

const getBoardSize = (level) => {
  switch (level) {
    case 'ease':
      return 18
    case 'medium':
      return 30
    case 'hard':
      return 45
    case 'very-hard':
      return 60

    default:
      return 18
  }
}

const getLevelCards = (level) => {
  const shuffledCards = shuffle(cards)
  const boardSize = getBoardSize(level)

  const elementsToDropAmount = shuffledCards.length - boardSize

  return dropRight(shuffledCards, elementsToDropAmount)
}

const Level = (level) => {
  saveSettings({
    level
  })
}

export {
  getLevelCards
}

export default Level
