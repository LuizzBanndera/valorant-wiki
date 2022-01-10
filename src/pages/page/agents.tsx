import Header from '../components/header'
import Footer from '../components/footer'
import styled from 'styled-components'
import CardAgents from '../components/cardAgent'
import db from '../../services/api'
import { AxiosResponse } from 'axios'
import { GetStaticProps } from 'next'
import {iAgents} from '../shared/types/types.agents'
import { useRouter } from 'next/router'

export default function AgentsMenu ({data}: iAgents) {

  const Router = useRouter()

  const handleClick = (agent: string ,id: string) => {
    console.log('agent');
    
    Router.push(`/page/`+agent)
  }

  return (
    <WrapperStyled className="wrapper">
      <Header/>
      <ContainerStyled className="container">        
        {            
          data.map((agent, idx) => (            
            <div key={idx}>
              <CardAgents {...agent} />
            </div>
          ))        
        }        
      </ContainerStyled>
      <Footer/>
    </WrapperStyled>
  )
}

export const getStaticProps : GetStaticProps = async () => {
  try {
    const res : AxiosResponse<iAgents> = await db.get('/agents', {
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