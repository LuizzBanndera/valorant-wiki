import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import db from '@services/api'
import { TAgents, TAgentData, TAgent } from '@shared/types/types.agents'
import { AxiosResponse } from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import Loading from '@components/loading'
import { useTranslations } from 'next-intl'

export default function Agent(agent: TAgentData) {

  const t = useTranslations('Agents')  

  const [imageLoaded, setImageLoaded] = useState(false)
  
  const {data} = agent

  const handleLoadImage = (e: any) => {
    const target = e.target
    if (target.src.indexOf('data:image/gif;base64') < 0) {
      setImageLoaded(true)
    }
  }

  const handleAbilite = (idx: number) => {
    let label : string
    switch (idx) {
      case 4: label = `(${t('passive')})`
      break;
      case 3: label = '(ultimate)'
      break;
      default:label = ''
      break;
    }
    return label
  }

  useEffect(() => {}, [imageLoaded])

  return (  
 <>
  <Loading style={{visibility: imageLoaded ? 'hidden' : 'unset'}}/>  
  <Container style={{visibility: imageLoaded ? 'unset' : 'hidden'}}>
      <AgentBio>
        <p className='label'>{data.displayName}.</p>
        <p className='g-label'>{data.description}</p>
        <div>
          <p className='g-title'>{`//${data.role.displayName}`}</p>
          <p className='g-label'>{data.role.description}</p>
        </div>        
      </AgentBio>               
      <AgentImage>
        <div className='header-content'>
          <AgentName> 
            {Array.from({length: 5}, (_, idx) => (<p key={idx} className='label'>{data.displayName}</p>))}
          </AgentName>
          <SquareBackGround/>    
        </div>
        <div className='image-container'>
          <Image 
            onLoad={e => handleLoadImage(e)}             
            className='image' 
            src={data.fullPortrait} 
            quality={100}            
            alt='agent'
            objectFit="contain"
            width={650}
            height={650}
          />
        </div>
      </AgentImage>
      <AgentDetails>
        <AgentSkills>                
        <p className='g-title'>{`//`+t('skills')}</p>
        {data.abilities.map((abilitie, idx) => (                  
          <SkillsDetails key={idx}>                               
            <div className='image-container'>
              <div className='skill-name'>
                {
                  abilitie.displayIcon
                  ?
                  <Image 
                  className='image' 
                  src={abilitie.displayIcon} 
                  width={50} height={50} 
                    alt='abilitie' 
                    quality={80}/>
                    :
                    <></>
                }
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                  <p className='g-title'>{abilitie.displayName}</p>
                  <p className='g-label' style={{margin: '0 0 0 5px'}}>{handleAbilite(idx)}</p>
                </div>              
              </div>
              <p className='g-label'>{abilitie.description}</p>
            </div>         
          </SkillsDetails>          
        ))}
        </AgentSkills>
      </AgentDetails>          
    </Container>
  </>
  )
}

//styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
  @media (min-width: 600px) {  
    flex-direction: row;    
    align-items: center;
  }
  `
const AgentImage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .header-content {
    display: flex;
    align-items: center;
  }
  .image-container {
    position: absolute;
    z-index: 1;
  }

  @media(min-width: 732px) {
    .image-container {      
      left: 25%;      
    }
  }
  @media(min-width: 732px) and (max-width: 1083px) {
    .image-container {
      left: 50%;
    }
  }
`
const AgentDetails = styled.div`
  transition: all 500ms;
  height: 80vh;
  overflow: auto;
  z-index: 2;
  border-bottom-style: groove;
  border-width: 1px;
  border-color: var(--g-white);
  background-color: #0f19238f;

  @media (min-width: 600px ) {
    max-width: min-content;  
    min-width: 400px;
  }
  `
const AgentSkills = styled.div`
  z-index: 2;

  .image-container {
    img {
      width: 30px !important;
    }    
    .skill-name {      
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
  .g-title {
    margin: 0;
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
  
  @media (min-width: 600px) {
    position: absolute;    
  }
  @media (max-width: 600px) {
    p {
      font-size: 50px;
    }
  }  
`
const SquareBackGround = styled.div`
  background-color: var(--g-red);
  height: 32rem;
  width: 20rem;
  @media (max-width: 600px) {
    left: 25px;
    position: absolute;
    width: 15rem;
    height: 20rem;
  }
`
const AgentBio = styled.div`
  display: flex;
  flex-direction: column;  
  
  .label {    
    font-size: 48px;
    color: var(--g-red);
  }
  @media (min-width: 732px) {
    max-width: 300px;
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

  const paths = data.map((agent: TAgent) => (
    {params: {uuid: agent.uuid}}
  ))
  
  return {paths, fallback: false}

}

export const getStaticProps : GetStaticProps = async ({params, locale}) => {
  
  const param = params!

  try {
    const res : AxiosResponse<TAgents> = await db.get(`/agents/${param.uuid}?language=${locale}`, {
      params: {        
        isPlayableCharacter: true,
      }
    })
    
    const data = res.data.data    
    return {
      props: {
        data,
        messages: (require(`../../../messages/${locale}.json`))
      }
    }

  } catch (error) {
    return {
      props: {
        error
      }
    }
  }

}
