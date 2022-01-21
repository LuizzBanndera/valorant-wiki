import { AxiosResponse } from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import styled from "styled-components"
import db from '@services/api'
import Image from 'next/image'
export default function Weapon({data}: TWeaponData) {
  
  return(
  <Container>
    <WeaponContainer>
      <div className="weapon-image">
        <Image quality={100} priority className="image" src={data.displayIcon} alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className="weapon-stats">
        <p className="g-title">{`//CARACTERÍSTCAS`}</p>
        <p className="g-label">{`NOME: `+data.displayName}</p>
      </div>
    </WeaponContainer>
    <SkinsContainer>
      <div className="skin-image"></div>
      <div className="skin-stats"></div>
    </SkinsContainer>
  </Container>)
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`
const WeaponContainer = styled.div`
  /* background-color: firebrick; */
  width: 60vw;
  .weapon-image {
    margin-left: 5rem;
    height: 50vh;
    width: 40vw;
    position: relative;
  }
  .weapon-stats {
    padding: 1rem;
  }
`
const SkinsContainer = styled.div`
background-color: blueviolet;
width: 40vw;
`

//functions-next
export const getStaticPaths : GetStaticPaths = async () => {

  const res : AxiosResponse<TWeapons> = await db.get('/weapons')
  
  const data = res.data.data

  const paths = data.map((weapon: any) => ({    
    params: {uuid: weapon.uuid}
  }))

  return {paths, fallback: false}

}

export const getStaticProps : GetStaticProps = async ({params}: any) => {  

  try {
    const res : AxiosResponse<TWeapons> = await db.get(`/weapons/${params.uuid}`)
    
    const data = res.data.data
        
    //TODO remover revalidate antes de lan�ar em produ��o
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
