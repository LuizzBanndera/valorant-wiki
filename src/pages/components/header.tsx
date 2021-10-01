
import Brand from '../../../../public/images/v_logo_black.png'
import Image from 'next/image'
import {Nav} from 'rsuite'
import styled from 'styled-components'

export default function Header () {

  return (    
    <NavStyled>
      <Image src={Brand} alt="VALORANT" width={100} height={60}/>      
      <ItemStyled>AGENTES</ItemStyled>
      <ItemStyled>ARMAS</ItemStyled>
      <ItemStyled>MAPAS</ItemStyled>
    </NavStyled>    
  )
}

const NavStyled = styled(Nav)`
  display: flex;
  color: whitesmoke;
  width: 100%;
  margin-top: 5px;
  height: 50px;  
  align-items: center;
  padding: 10px;
  gap: 20px !important;
  letter-spacing: 2px;
  border-radius: 2px;
  font-family: 'Anton', cursive;

  @media(max-width: 820px) {
    margin-top: 10px;
    font-size: 44px;
    justify-content: center;
    img {
      visibility:hidden;
      display: none !important;
    }
  }
`

const ItemStyled = styled(Nav.Item)`
  color: #666666;
  display: flex;
  height: 35px;
  align-items: center;
  border-radius: 2px;
  padding: 5px;
  transition: all 500ms;
  :hover {
    background-color: darkgrey;    
  }
`