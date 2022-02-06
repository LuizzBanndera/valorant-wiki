import { GetStaticProps } from 'next'
import db from '@services/api'
import { AxiosResponse } from 'axios'
import styled from 'styled-components'
import CardWeapons from '@db/lib/components/cardWeapon';
import { TWeapons } from '../../../lib/shared/types/types.weapons';

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
  padding: 2rem 0 60px;
  gap: 2rem;
`

export const getStaticProps : GetStaticProps = async ({locale}) => {
  try {
    const res : AxiosResponse<TWeapons> = await db.get(`/weapons?language=${locale}`)
    
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