import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ className }) => (
  <div className={className}>
    <ul>
      <li>
        <Link to="/game">Resume game</Link>
      </li>
      <li>
        <Link to="/new-game">New game</Link>
      </li>
    </ul>
  </div>
)

export default Menu