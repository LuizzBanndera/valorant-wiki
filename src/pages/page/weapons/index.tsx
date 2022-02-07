import { GetStaticProps } from 'next'
import db from '@services/api'
import { AxiosResponse } from 'axios'
import styled from 'styled-components'
import CardWeapons from '@db/lib/components/cardWeapon'
import { TWeapons } from '../../../lib/shared/types/types.weapons'
import CardWeaponGroup from '@components/cardWeaponGroup'

export default function Weapons({data}: TWeapons) {
  let uniqueCat = new Set()

  let category : [{description: string, image: string}] = [{description: '', image: ''}]

  const categoryData = data.map((weapon, idx) => {
    return {
      description: weapon.shopData?.categoryText || 'Combat',
      image: weapon.displayIcon
    }
  })

  category = categoryData.filter((value) => {
    const isPresentInSet = uniqueCat.has(value.description)

    uniqueCat.add(value.description)

    return !isPresentInSet
  })

  console.log(category)
  
  
  return (
  <Container>
    <div className="categories">
    {      
      category.map((cat, idx) => (        
        <CardWeaponGroup key={idx} description={cat.description}/>
        ))
      }
    </div>
    <div className='items'>
    {
      data.map((weapon, idx) => (
        <div key={idx}>
          <CardWeapons {...weapon}/>
        </div>
      ))
    }
    </div>
  </Container>)
}

const Container = styled.div`
  .categories {  
    display: flex;
    position: sticky;
    z-index: 5;
    width: -webkit-fill-available;
    justify-content: space-evenly;
    border-bottom-style: groove;
    background-color: var(--g-darkblue);
    padding-bottom: 2rem;
    border-width: 1px;   
  }
  .items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 0 60px;
  gap: 2rem;  
  }
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