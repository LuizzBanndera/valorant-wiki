import React, {useState} from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import db from '../../services/api'
import { iAgents, iAgent } from '../shared/types/types.agents'
import { AxiosResponse } from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'


export default function Agent(agent: iAgent) {

  const {data} = agent
  
  const [abilitie, setAbiilite] = useState(data.abilities[0].description)
  
  return (
    <Wrapper className="wrapper">
    <Header/>
      <Container className="container">
        <React.Fragment >
          <Image id="agent"  src={data.fullPortrait}  width={800} height={800} alt='agent'/>
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
              <p className='label'>/HABILIDADES</p>
              <SkillsDetails>
                {data.abilities.map((abilitie, idx) => (                  
                  <SkillImage key={idx} onMouseOver={() => setAbiilite(abilitie.description)}>
                    <Image src={abilitie.displayIcon} width={50} height={50} alt='abilitie'/>
                  </SkillImage>                  
                ))}      
              </SkillsDetails>
              <SkillDescription>
                <p className='label'>NOME</p>
                <p>{abilitie}</p>
              </SkillDescription>
            </Skills>
          </Details>          
        </React.Fragment>              
      </Container>
    <Footer/>
  </Wrapper>
  )
}

export const getStaticPaths : GetStaticPaths = async () => {

  const res : AxiosResponse<iAgents> = await db.get('/agents', {
    params: {        
      isPlayableCharacter: true
    }
  })

  const data = res.data.data  

  const paths = data.map((agent: any) => ({
    params: {agent: agent.displayName},
  }))

  return {paths, fallback: false}

}

export const getStaticProps : GetStaticProps = async ({params}) => {
  try {
    const res : AxiosResponse<iAgents> = await db.get(`/agents/5f8d3a7f-467b-97f3-062c-13acf203c006`, {
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
  #agent {
    z-index: -1;
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
const Details = styled.div`
  display: flex;
  flex-direction: column;  
  position: relative;
  width: 112vh;
  left: -112px;
  z-index: 1;
  gap: 2rem;
  border-style: groove;
  max-width: 40rem;  
  background-color: whitesmoke;
  padding: 0.5rem;
  transition: all 500ms;
`
const AgentDetail = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;

  .label {
    font-size: 48px;
    color: red;
  }
`
const RoleDetail = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
`

const Skills = styled.div`
`
const SkillsDetails = styled.div`
  display: flex;  
  height: 6rem;
  padding: 0.5rem;
  gap: 0.5rem;
  width: max-content;
  `
const SkillImage = styled.div`
display: flex;  
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 5rem;  
  border-radius: 42px !important;
  background-color: black;
  
  :hover {
    background-color: red;
  }  
`
const SkillDescription = styled.div`  
  margin-top: 10px;  
  max-width: 40rem;
`