import styled from 'styled-components'
import {Bounce} from '../shared/motion'

export default function CardMenu (props: any) {
  return (
    <Bounce>
      <CardStyled>
        <p className="ter">{props.title ? props.title : 'menu'}</p>
        <p className="sec">{props.title ? props.title : 'menu'}</p>
        <p className="first">{props.title ? props.title : 'menu'}</p>
        <p className="sec">{props.title ? props.title : 'menu'}</p>
        <p className="ter">{props.title ? props.title : 'menu'}</p>
      </CardStyled>
    </Bounce>
  )
}

const CardStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  flex-direction: column;
  height: 450px;
  width: 250px;
  background-color: darkgrey;
  background-color: #858585;
  color: whitesmoke;
  font-size: 52px;
  font-family: 'Anton', cursive;  
  cursor: pointer;
  user-select: none;
  -webkit-box-shadow: 0px 12px 16px -6px rgba(0,0,0,0.55); 
  box-shadow: 0px 12px 16px -6px rgba(0,0,0,0.55);
  transition: all 500ms;
  border-radius: 2px;
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
`