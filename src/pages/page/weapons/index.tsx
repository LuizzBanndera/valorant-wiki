import { GetStaticProps } from 'next'
import db from '@services/api'
import { AxiosResponse } from 'axios'
import styled from 'styled-components'
import CardWeapons from '@components/cardWeapons';
import { TWeapons } from '../../shared/types/types.weapons';


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
  justify-content: space-evenly;

  padding: 3rem ;
  gap: 2rem;
`

export const getStaticProps : GetStaticProps = async ({locale}) => {
  try {
    const res : AxiosResponse<TWeapons> = await db.get(`/weapons?language=${locale}`)
    

    //TODO remover revalidate
    const data = res.data.data
    return {
      props: {
        data
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