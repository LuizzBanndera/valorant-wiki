import Header from '../components/header'
import Footer from '../components/footer'
import styled from 'styled-components'
import CardAgents from '../components/cardAgent'
import db from '../../services/api'
import { AxiosResponse } from 'axios'
import { GetStaticProps } from 'next'
import {Agents} from '../shared/types/types.agents'

export default function AgentsMenu ({data}: Agents) {
  
  return (
    <WrapperStyled className="wrapper">
      <Header/>
      <ContainerStyled className="container">        
        {                 
          data.map((agent, idx) => (
            <CardAgents data={agent} key={idx}/>
          ))        
        }        
      </ContainerStyled>
      <Footer/>
    </WrapperStyled>
  )
}

// pre-render function data fetch
export const getStaticProps : GetStaticProps = async () => {
  try {
    const res : AxiosResponse<Agents> = await db.get('/agents', {
      params: {        
        isPlayableCharacter: true
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

//styled components
const WrapperStyled = styled.div`  
`
const ContainerStyled = styled.div`
  flex-wrap: wrap;
  align-content: center;
`