import Image from 'next/image'
import styled from 'styled-components'
import {iAgent} from '../shared/types/types.agents'
import {Bounce} from '../shared/motion'
import {useRouter} from 'next/router'

export default function CardAgent (agent: iAgent) {   
  
  const Router = useRouter()  

  const handleClick = (uuid: string) => {    
    Router.push({pathname:`/page/agent/[uuid]`, query: {uuid}})    
  }

  return (
    <Bounce>
    <Card id="card" onClick={() => handleClick(agent.uuid)}>      
      <Image id="picture" src={agent.displayIcon} width="200" height="200" alt="logo"/>
      <p className='label'>{agent.displayName}</p>
      <p>{agent.role.displayName}</p>
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

  .label {        
  font-size: 20px;
  color: #FF4654;
  }
  
  p {
    font-size: 12px;
  }  
  :hover p {
    transition: .3s ease-in-out;
    color: whitesmoke;
  }
  
`