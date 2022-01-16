import { GetStaticProps } from 'next'
import db from '../../services/api'
import { AxiosResponse } from 'axios'
import styled from 'styled-components'
import CardWeapons from '@components/cardWeapons';


export default function Weapons({data}: TWeapons) {

  return (
  <Container>
    {
      data.map((weapon, idx) => (
        <div key={idx}>
          <CardWeapons {...weapon}/>
        </div>
      ))
    }
  </Container>)
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2% 5%;
  gap: 2rem;
`

export const getStaticProps : GetStaticProps = async () => {
  try {
    const res : AxiosResponse<TWeapons> = await db.get('/weapons')
    
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