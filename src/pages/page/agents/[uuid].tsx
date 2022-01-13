import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import db from '../../../services/api'
import { TAgents, TAgentData } from '../../shared/types/types.agents'
import { AxiosResponse } from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import {AvgColor} from '../../shared/utils'
import { repeat } from 'lodash'


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
      <ImageWrapper>
        <div> 
          {
            Array.from({length: 5}, (_, idx) => (<p key={idx} className='label'>{data.displayName}</p>))
          }
        </div>
        <Image id="agent" src={data.fullPortrait} quality={100}  width={800} height={800} alt='agent'/>
        <Square/>
      </ImageWrapper>
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
  z-index: 0;
  flex: 1;
  padding: 3rem;
  height: 86vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  list-style-type: none;
  padding: 0 1rem;

  #agent {
    z-index: 0;  
  }
  img {
    max-width: none !important;
    margin: none;      
  }
  p {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;    
  }  
  .label {
    font-size: 20px;    
  }  
`
const ImageWrapper = styled.div`
  display: flex;
  z-index: 0;
  align-items: center;

  div .label {
    position: relative;
    font-size: 6rem;
    right: -29rem;    
    z-index: -1;
    color: #bbbbbb;
  }
  #agent {
    position: absolute !important;
    left: 20% !important;
  }
`
const Square = styled.div`
  position: relative; 
  background-color: #FF4654;
  right: 41%;
  width: 30rem;
  height: 38rem;  
  z-index: -2;
`
const Bio = styled.div`
  display: flex;
  flex-direction: column;  
  position: relative;
  left: -33rem;
  min-height: 38rem;
  min-width: 500px;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-style: groove;
  max-width: 40rem;  
  background-color: whitesmoke;
  border-color: #ff4654c2;
  padding: 0.5rem;
  transition: all 500ms;
  font-size: 14px;
`
const AgentDetail = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;

  .label {
    font-size: 48px;
    color: #FF4654;
  }
`
const RoleDetail = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  margin-left: 20px;
  .label {
    color: #858585;
    border-bottom-style: groove;
  }
`
const Skills = styled.div`
  margin-left: 20px;  
  .label {
    border-bottom-style: groove;
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
  width: auto;
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
  max-width: 40rem;
  margin-top: 0px;
  font-size: 13px;  
  margin-left: 25px;
`