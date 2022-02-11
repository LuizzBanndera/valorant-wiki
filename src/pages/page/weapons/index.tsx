import { GetStaticProps } from 'next'
import db from '@services/api'
import { AxiosResponse } from 'axios'
import styled from 'styled-components'
import CardWeapons from '@db/lib/components/cardWeapon'
import { TWeapon, TWeapons } from '../../../lib/shared/types/types.weapons'
import CardWeaponGroup from '@components/cardWeaponGroup'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Weapons({data}: TWeapons) {

  let uniqueCat = new Set()  

  const [weapons, setWeapons] = useState<TWeapon[]>(data)

  const categoryData = data.map((weapon) => {
    return {
      description: weapon.shopData?.categoryText || 'Combat',
      image: weapon.displayIcon
    }
  })

  const category = categoryData.filter((value) => {
    const isPresentInSet = uniqueCat.has(value.description)

    uniqueCat.add(value.description)

    return !isPresentInSet
  })
  const handleCategory = (category: string) => {
    setWeapons(data.filter((value) => value.shopData ? value.shopData?.categoryText === category : 'Combat' === category))
    
  }  

  useEffect(() => {}, [weapons])

  return (
  <Container>
    <div className="categories">
    {      
      category.map((cat, idx) => (        
        <CardWeaponGroup onClick={() => handleCategory(cat.description)} key={idx} description={cat.description}/>
      ))
    }
    </div>
    <div className='items'>
    {
      weapons.map((weapon, idx) => (
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
    overflow-x: auto;
    gap: 1rem;
    padding: 1rem;
    z-index: 4;
    width: -webkit-fill-available;
    /* justify-content: space-evenly; */
    border-bottom-style: groove;
    background-color: var(--g-darkblue);
    padding-bottom: 2rem;
    border-width: 1px;
    margin-top: 20px;
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