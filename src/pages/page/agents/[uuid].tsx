import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import db from '../../../services/api'
import { TAgents, TAgentData } from '../../shared/types/types.agents'
import { AxiosResponse } from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'

type TStyledProps = {   
  idx: number
}

export default function Agent(agent: TAgentData) {
  
  const {data} = agent    
  
  const [abilitieName, setAbilitieName] = useState(data.abilities[0].displayName)
  const [abilitieDescription, setAbiiliteDescription] = useState(data.abilities[0].description)
  
  const handleAbilitie = (description: string, name : string) => {
    setAbiiliteDescription(description)
    setAbilitieName(name)
  }
  
  const agentName = () => {

    for (let index = 0; index < 5; index++) {
      return <p className='label'>{data.displayName}</p>      
    }
  }

   agentName()


  return (    
    <Container>               
      <HeaderContainer>
        <div className='image-container'>
          <Image className='image' src={data.fullPortrait} quality={100}  width={800} height={800} alt='agent'/>
        </div>
        <div className='header-content'>
          <AgentName> 
            {Array.from({length: 5}, (_, idx) => (<p key={idx} className='label'>{data.displayName}</p>))}
          </AgentName>
          <SquareBackGround/>    
        </div>
      </HeaderContainer>
      <Bio>
      <Details>
        <AgentDetail>
          <p className='label'>{data.displayName}</p>
          <p>{data.description}</p>
        </AgentDetail>
        <RoleDetail>
          <p className='label'>/{data.role.displayName}</p>
          <p>{data.role.description}</p>
        </RoleDetail>
        <Skills>
          <p className='label'>/HABILIDADES/<a>{abilitieName}</a></p>
          <SkillsDetails>
            {data.abilities.map((abilitie, idx) => (                  
              <SkillImage              
              key={idx} 
              idx={idx}
              onMouseOver={() => handleAbilitie(abilitie.description, abilitie.displayName)}
              >                
                {                  
                  abilitie.displayIcon
                  ?
                  <Image src={abilitie.displayIcon} width={50} height={50} alt='abilitie' quality={100}/>
                  :
                  <a>P</a>
                }
              </SkillImage>                  
            ))}      
          </SkillsDetails>
        </Skills>
      </Details>          
          <SkillDescription>                
            <p>{abilitieDescription}</p>
          </SkillDescription>
      </Bio>
    </Container>
  )
}

export const getStaticPaths : GetStaticPaths = async () => {

  const res : AxiosResponse<TAgents> = await db.get('/agents', {
    params: {        
      isPlayableCharacter: true
    }
  })

  const data = res.data.data

  const paths = data.map((agent: any) => ({    
    params: {uuid: agent.uuid}
  }))

  return {paths, fallback: false}

}

export const getStaticProps : GetStaticProps = async ({params}: any) => {  

  try {
    const res : AxiosResponse<TAgents> = await db.get(`/agents/${params.uuid}`, {
      params: {        
        isPlayableCharacter: true,
      }
    })
    
    const data = res.data.data    
    
    return {
      props: {
        data
      },
      revalidate: 180
    }

  } catch (error) {
    return {
      props: {
        error
      },
      revalidate: 10
    }
  }

}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

`
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  .image-container {
    display: contents;
    > div {
      position: absolute !important;
      z-index: 2 !important;   
      max-width: 40rem !important;
      top: 1rem !important;
    }
  }
  
  .header-content {
    width: 100%;
    display: flex;
    align-items: center;
  }

`
const AgentName = styled.div`
  color: #666666;
  z-index: 1;

  @media (max-width: 576px) {
    position: relative;
    z-index: 1;
    left: 35px;
    p {
      font-size: 50px;
    }
  }

  font-size: 5rem;
  @media (min-width: 768px) {
  }
`
const SquareBackGround = styled.div`
  background-color: #FF4654;
  height: 32rem;
  width: 25rem;
  position: relative;
  right: 10rem;
  z-index: 0;
  @media (max-width: 576px) {
    left: 25px !important;
    position: absolute;
    width: 15rem;
    height: 20rem;
  }
`
const Bio = styled.div`
  display: flex;
  flex-direction: column;
  max-width: min-content;
  z-index: 1;
  @media (max-width: 576px) {
    min-width: 100%;
  }
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  transition: all 500ms;
  font-size: 14px;
`
const AgentDetail = styled.div`
  display: flex;
  flex-direction: column;

  .label {    
    font-size: 48px;
    color: #FF4654;
  }
`
const RoleDetail = styled.div`
  display: flex;
  flex-direction: column;
  .label {
    color: #858585;
    border-bottom-style: groove;
  }
`
const Skills = styled.div`  
  .label {

    color: #858585;
    a {
      color: #FF4654;
    }
  } 
`
const SkillsDetails = styled.div`
  display: flex;  
  height: 6rem;
  padding: 0.5rem 0;    
  `
const SkillImage = styled.div<TStyledProps>`
display: flex;  
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 5rem;       
  background-color: #858585;  
  :hover {
    background-color: #FF4654;
  }  
  a {
    font-family: 'Anton', cursive !important;
    
    font-size: 3rem;
    color: whitesmoke;
  }
`
const SkillDescription = styled.div`    
  margin-top: 0px;
  font-size: 14px;
  padding: 0 0.5rem;
`