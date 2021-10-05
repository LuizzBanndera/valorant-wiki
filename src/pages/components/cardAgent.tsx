import {Panel} from 'rsuite'
import Image from 'next/image'
import Img from 'public/images/a_jett.svg'
import styled from 'styled-components'

interface iAgente {
  id : string,
  name : string,
  image : string,
  description : string
}

export default function CardAgentComponent (props: iAgente) {

  return (
    <Card>      
      <Image id="picture" src={Img} objectFit="cover" layout="responsive" alt="logo"/>
      <strong>JETT</strong>
      <p>Duelista</p>
    </Card>
  )
}

const Card = styled.div`
  display: flex; 
  flex-direction: column;
  width: 170px;  
  font-family: 'Anton', cursive; 
  cursor: pointer;
  border-style: solid;
  border-color:#666666;
  color: #666666;
  transition: .30s ease-in-out;
  :hover {
    background-color: #FF4654;
    border-color:#FF4654;
    color: whitesmoke;
  }  

  strong, p {
    padding: 5px;
    margin: 0px;
  }

  strong {    
  letter-spacing: 0.15em;  
  position: relative;
  }
  
  p {
    font-size: 12px;
  }

  strong:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  strong:hover:after {
    width: 100%;
    left: 0;
  }

  
`