import Image from 'next/image'
import styled from 'styled-components'
import {Agent} from '../shared/types/types.agents'
import {Bounce} from '../shared/motion'

export default function CardAgentComponent ({data}: Agent) {      
  
  return (
    <Bounce>
    <Card id="card">      
      <Image id="picture" src={data.displayIcon} width="200" height="200" alt="logo"/>
      <strong>{data.displayName}</strong>
      <p>{data.role.displayName}</p>
    </Card>
    </Bounce>
  )
}

const Card = styled.div`
  display: flex; 
  flex-direction: column;
  width: 145px;  
  font-family: 'Anton', cursive; 
  cursor: pointer;
  border-bottom-style: solid;  
  border-color:#666666;
  color: #666666;
  transition: .3s ease-in-out;  
  :hover {
    background-color: #FF4654;
    border-color:#FF4654;
    color: whitesmoke;    
  }  

  strong, p {
    padding: 5px;
    margin: 0px;
    text-transform: uppercase;
  }

  strong {    
  letter-spacing: 0.15em;  
  position: relative;
  font-size: 20px;
  color: #FF4654;
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
  
  :hover  strong {
    transition: .3s ease-in-out;
    color: whitesmoke;
  }
  
`