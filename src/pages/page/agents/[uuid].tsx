import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import db from '../../../services/api'
import { TAgents, TAgentData } from '../../shared/types/types.agents'
import { AxiosResponse } from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'

export default function Agent(agent: TAgentData) {

  const [imageLoaded, setImageLoaded] = useState(false)
  
  const {data} = agent

  const handleLoadImage = (e: any) => {
    const target = e.target
    if (target.src.indexOf('data:image/gif;base64') < 0) {
      setImageLoaded(true)
    }
  }

  useEffect(() => {}, [imageLoaded])
  return (    
    <Container>
      <AgentBio>
        <p className='label'>{data.displayName}.</p>
        <p className='g-label'>{data.description}</p>
        <div>
          <p className='g-title'>{`//`+data.role.displayName}</p>
          <p className='g-label'>{data.role.description}</p>
        </div>        
      </AgentBio>               
      <AgentImage>
        <div className='image-container'>  
          <Image 
            onLoad={e => handleLoadImage(e)} 
            priority className='image' 
            src={data.fullPortrait} 
            quality={100}
            width={800}
            height={800}
            alt='agent'
          />
        </div>
        <div className='header-content'>
          <AgentName> 
            {Array.from({length: 5}, (_, idx) => (<p key={idx} className='label'>{data.displayName}</p>))}
          </AgentName>
          <SquareBackGround/>    
        </div>
      </AgentImage>
      <AgentDetails>
        <AgentSkills>                
        <p className='g-title'>{`//HABILIDADES`}</p>
        {data.abilities.map((abilitie, idx) => (                  
          <SkillsDetails key={idx}>                               
            <div className='image-container'>
              <div className='skill-name'>
                {
                  abilitie.displayIcon
                  ?
                  <Image className='image' src={abilitie.displayIcon} width={50} height={50} alt='abilitie' quality={100}/>
                  :
                  <></>
                }
                {
                  idx === 4 
                  ?
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                    <p className='g-title'>{abilitie.displayName}</p>
                    <p className='g-label' style={{margin: '0 0 0 5px'}}>(passiva)</p>
                  </div>
                  :
                  <p className='g-title'>{abilitie.displayName}</p>
                }
              </div>
              <p className='g-label'>{abilitie.description}</p>
            </div>         
          </SkillsDetails>          
        ))}
        </AgentSkills>
      </AgentDetails>          
    </Container>
  )
}

//styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  flex-wrap: wrap;
  
  @media (min-width: 880px) {
    gap: 3rem;
    flex-direction: row;    
    align-items: center;
  }

`
const AgentImage = styled.div`
  display: flex;
  align-items: center;

  .image-container {
    display: contents;
    > div {
      position: absolute !important;
      z-index: 2 !important;   
      max-width: 40rem !important;
    }
  }
  
  .header-content {
    display: flex;
    align-items: center;
  }

  @media (min-width: 880px) {
  margin: 0 3rem 0 0;
  }

`
const AgentDetails = styled.div`
  transition: all 500ms;
  height: 80vh;
  overflow: auto;
  z-index: 2;
  border-bottom-style: inset;
  border-width: 2px;
  border-color: var(--g-white);

  @media (min-width: 500px ) {
    max-width: min-content;  
    min-width: 400px;
  }
  `
const AgentSkills = styled.div`
  z-index: 2;

  .image-container {
    img {
      width: 30px;
    }    

    .skill-name {      
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
  .g-label {
    margin-left: 15px;
  }
`
const AgentName = styled.div`
  color: var(--g-darkblue);
  z-index: 1;
  font-size: 5rem;
  margin-left: 15px;
  
  @media (min-width: 880px) {
    position: absolute;    
  }
  @media (max-width: 880px) {
    p {
      font-size: 50px;
    }
  }  
`
const SquareBackGround = styled.div`
  background-color: var(--g-red);
  height: 32rem;
  width: 25rem;
  @media (max-width: 880px) {
    left: 25px;
    position: absolute;
    width: 15rem;
    height: 20rem;
  }
`
const AgentBio = styled.div`
  display: flex;
  flex-direction: column;  
  max-width: 300px;

  .label {    
    font-size: 48px;
    color: var(--g-red);
  }
`
const SkillsDetails = styled.div`
  padding: 0.5rem 0;

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
