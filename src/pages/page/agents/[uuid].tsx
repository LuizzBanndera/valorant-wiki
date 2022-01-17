import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import db from '../../../services/api'
import { TAgents, TAgentData } from '../../shared/types/types.agents'
import { AxiosResponse } from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import BackGround from 'public/images/v_background.svg'

type TStyledProps = {   
  idx: number
}

export default function Agent(agent: TAgentData) {
  
  const {data} = agent    
  
  const agentName = () => {
    for (let index = 0; index < 5; index++) {
      return <p className='label'>{data.displayName}</p>      
    }
  }

   agentName()


  return (    
    <Container>
      <AgentBio>
        <p className='label'>{data.displayName}</p>
        <p className='g-label'>{data.description}</p>
      </AgentBio>               
      <AgentImage>
        <div className='image-container'>
          <Image className='image' src={data.fullPortrait} quality={100}  width={800} height={800} alt='agent'/>
        </div>
        <div className='header-content'>
          <AgentName> 
            {Array.from({length: 5}, (_, idx) => (<p key={idx} className='label'>{data.displayName}</p>))}
          </AgentName>
          <SquareBackGround/>    
        </div>
      </AgentImage>
      <Details>
        <RoleDetail>
          <p className='g-title'>/{data.role.displayName}</p>
          <p className='g-label'>{data.role.description}</p>
        </RoleDetail>
        <AgentSkills>                
        <p className='g-title'>/HABILIDADES</p>
        {data.abilities.map((abilitie, idx) => (                  
          <SkillsDetails key={idx}>
            {                  
              abilitie.displayIcon
              ?
              <div className='image-container'>
                <div className='skill-name'>
                  <Image className='image' src={abilitie.displayIcon} width={50} height={50} alt='abilitie' quality={100}/>
                  <p className='g-title'>{abilitie.displayName}</p>      
                </div>
                <p className='g-label'>{abilitie.description}</p>
              </div>
              :
              <a>P</a>
            }
          </SkillsDetails>          
        ))}
        </AgentSkills>
      </Details>          
    </Container>
  )
}

//styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  padding: 2rem;
  
  @media (min-width: 880px) {
    flex-direction: row;
    height: 88vh;
    align-items: center;
  }

`
const AgentImage = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5rem;

  .image-container {
    display: contents;
    > div {
      position: absolute !important;
      z-index: 2 !important;   
      max-width: 40rem !important;
    }
  }
  
  .header-content {
    width: 100%;
    display: flex;
    align-items: center;
  }

`

const AgentSkills = styled.div`
  display: flex;
  flex-direction: column;
  max-width: min-content;
  z-index: 2;  
  min-width: 400px;
  height: 80%;

  .image-container {
    display: flex;
    flex-direction: column;    
    img {
      width: 30px;
    }    

    .skill-name {      
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .label {
    color: #0f1923;
    a {
      color: #FF4654;
    }
  }   
  
  @media (max-width: 880px) {
    margin-left: 0;
    min-width: 100%;
  }
`
const AgentName = styled.div`
  color: #0f1923;
  z-index: 1;
  font-size: 5rem;
  margin-left: 15px;

  @media (max-width: 880px) {
    z-index: 1;
    left: 35px;
    p {
      font-size: 50px;
    }
  }

  @media (min-width: 880px) {
    position: absolute;    
  }
`
const SquareBackGround = styled.div`
  background-color: #FF4654;
  height: 32rem;
  width: 25rem;
  position: relative;  
  z-index: 0;
  @media (max-width: 880px) {
    left: 25px !important;
    position: absolute;
    width: 15rem;
    height: 20rem;
  }
`
const AgentBio = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20%;

  .label {    
    font-size: 48px;
    color: #FF4654;
  }
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  transition: all 500ms;
  font-size: 14px;  
  position: relative;
  max-width: min-content;  
`
const RoleDetail = styled.div`
  display: flex;
  flex-direction: column;
  .label {
    color: #0f1923;
    border-bottom-style: groove;
  }
`
const SkillsDetails = styled.div`
  display: flex;
  padding: 0.5rem 0;
  margin-left: 5px;
  flex-direction: column;
  cursor: pointer;
  align-items: flex-start;

  .g-title {
    font-size: 14px;
  }
  `

//functions-next

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
