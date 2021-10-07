import { useEffect, useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styled from 'styled-components'
import CardAgents from '../components/cardAgent'
import db from '../../services/api'
import { AxiosResponse } from 'axios'
import { GetStaticProps } from 'next'

type Agents = {
  agent : Agent
}

type Agent = {
  uuid : string
  displayName : string
  description : string
  displayIcon : string
}

export default function AgentsMenu () {

  const [data, setData] = useState<Agents[]>([])

  useEffect(() => {
    async function agents() {
      try {
        const {data}: AxiosResponse<Agents[]> = await db.get('/agents')
        
        setData(data)

      } catch (error) {
        console.log(error)
      }
    }    
    agents()
  }, [])
  
  return (
    <WrapperStyled className="wrapper">
      <Header/>
      <ContainerStyled className="container">
        {          
          data.map(({agent}, idx) => (
            <CardAgents key={idx} data={agent}/>
          ))
        }
      </ContainerStyled>
      <Footer/>
    </WrapperStyled>
  )
}

export const getStaticProps : GetStaticProps = async () => {
  try {
    const {data}: AxiosResponse<Agents[]> = await db.get('/agents')
      
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

const WrapperStyled = styled.div`
`
const ContainerStyled = styled.div`
`