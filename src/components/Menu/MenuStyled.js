import styled from 'styled-components'
import Menu from './Menu.js'

const MenuStyled = styled(Menu)`
  width: 100%;
  text-align: center;
  line-height: 2;
  
  a {
    color: white;
    font-size: 30px;
    text-decoration: none;
    
    &:hover {
      color: #9D9D9D;
    }
  }
`

export default MenuStyled
