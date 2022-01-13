import styled from 'styled-components'
import {Bounce} from '../shared/motion'

export default function CardMenu (props: any) {
  return (
    <Bounce>
      <CardStyled {...props}>
        <Label className="ter">{props.name ? props.name : 'menu'}</Label>
        <Label className="sec">{props.name ? props.name : 'menu'}</Label>
        <Label className="first">{props.name ? props.name : 'menu'}</Label>
        <Label className="sec">{props.name ? props.name : 'menu'}</Label>
        <Label className="ter">{props.name ? props.name : 'menu'}</Label>
      </CardStyled>
    </Bounce>
  )
}

const Label = styled.p`
  @media (max-width: 576px) {
    display: ${props => props.className !== 'first' ? 'none' : 'block'};
    visibility: ${props => props.className !== 'first' ? 'hidden' : 'visible'};
  }
`

const CardStyled = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;  
  flex-direction: column;
  height: 450px;
  width: 250px;
  background-color: #858585;
  color: whitesmoke;
  font-size: 52px;
  font-family: 'Anton', cursive;  
  user-select: none;
  -webkit-box-shadow: 0px 12px 16px -6px rgba(0,0,0,0.55); 
  box-shadow: 0px 12px 16px -6px rgba(0,0,0,0.55);
  transition: all 500ms;
  border-radius: 2px;
  cursor: pointer;
  .sec {
    color: rgb(203 203 203);    
  }
  .ter {
    color: rgb(167 167 167);    
  }  
  p {
    margin: 0 ;
    letter-spacing: 3px;
  }
  :hover {    
    background-color: #FF4654;
    z-index: 1;
  }

  @media (max-width: 576px) {
    height: 175px;    
    width: 300px;
  }
`