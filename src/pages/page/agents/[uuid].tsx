import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Header from '../../components/header'
import Footer from '../../components/footer'
import db from '../../../services/api'
import { TAgents, TAgentData } from '../../shared/types/types.agents'
import { AxiosResponse } from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'

export default function Agent(agent: TAgentData) {
  
  const {data} = agent
  
  const [abilitieName, setAbilitieName] = useState(data.abilities[0].displayName)
  const [abilitieDescription, setAbiiliteDescription] = useState(data.abilities[0].description)

  const handleAbilitie = (description: string, name : string) => {
    setAbiiliteDescription(description)
    setAbilitieName(name)
  }  
  
  return (
    <Wrapper className="wrapper">
    <Header/>
      <Container className="container">       
        <React.Fragment >
          <ImageWrapper>
            <div>              
              <p className='label'>{data.displayName}</p>
              <p className='label'>{data.displayName}</p>
              <p className='label'>{data.displayName}</p>
              <p className='label'>{data.displayName}</p>
              <p className='label'>{data.displayName}</p>
            </div>
            <Image id="agent" src={data.fullPortrait}  width={800} height={800} alt='agent'/>
            <div id="square"></div>
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
                  <SkillImage key={idx} onMouseOver={() => handleAbilitie(abilitie.description, abilitie.displayName)}>
                    <Image src={abilitie.displayIcon} width={50} height={50} alt='abilitie'/>
                  </SkillImage>                  
                ))}      
              </SkillsDetails>
            </Skills>
          </Details>          
              <SkillDescription>                
                <p>{abilitieDescription}</p>
              </SkillDescription>
          </Bio>
        </React.Fragment>           
      </Container>
    <Footer/>
  </Wrapper>
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
justify-content: center;
  #agent {
    z-index: -1;  
  }
  img {
    max-width: none !important;
    margin: none;      
  }
`
const Wrapper = styled.div`
  width: 100%;
  align-items: flex-start;
  justify-content: center !important;
  flex-direction: row !important ;
  p {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;    
  }  
  .label {
    font-size: 20px;    
  }
`
const ImageWrapper = styled.div`
  display: flex;
  z-index: -1;
  align-items: center;

  div .label {
    position: relative;
    font-size: 6rem;
    right: -27rem;    
    z-index: -1;
    color: darkgray;
  }
  #agent {
    position: absolute !important;
    right: -299px !important;
  }
  #square { 
    position: relative; 
    background-color: #858585;
    width: 300px;
    height: 400px;  
    z-index: -2;
    right: 352px;     
  }
`
const Bio = styled.div`
  display: flex;
  flex-direction: column;  
  position: relative;
  min-width: 450px;
  left: -390px;
  z-index: 1;
  min-height: 37rem;
  margin-top: 3rem;
  min-width: 470px;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-style: groove;
  /* border-color: #FF4654; */
  max-width: 40rem;  
  background-color: whitesmoke;
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
  gap: 1.5rem;
  width: max-content;
  `
const SkillImage = styled.div`
display: flex;  
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 5rem;    
  background-color: #858585;
  
  :hover {
    background-color: #FF4654;
  }  
`
const SkillDescription = styled.div`    
  max-width: 40rem;
  margin-top: 0px;
  font-size: 13px;  
  margin-left: 25px;
`