import { AxiosResponse } from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import styled from "styled-components"
import db from '@services/api'
import Image from 'next/image'
import {Line} from 'rc-progress'
import { useEffect, useState } from "react"
import { sleep } from "@shared/utils"

type TStats = {
  fireRate: number
  magSize: number
  wallPen: number
  reloadTime: number
}


export default function Weapon({data}: TWeaponData) {

  const category = data
  .category
  .substring(data.category.indexOf('::')+2)

  const wallPenetration = data
  .weaponStats
  .wallPenetration
  .substring(data.weaponStats.wallPenetration.indexOf('::')+2)

  const [stats, setStats] = useState({fireRate : 0,
    magSize : 0,
    wallPen : 0,
    reloadTime : 0,})
  
  const handleStats = async () => {
    let wallPen

    switch (wallPenetration) {
      case 'Low': wallPen = 20
      break;
      case 'Medium': wallPen = 50
      break;
      case 'High': wallPen = 90
      break;
      default: wallPen = 0
      break;
    }

    await sleep(1000)
    
    setStats({
      fireRate: (data.weaponStats.fireRate * 7),
      magSize: data.weaponStats.magazineSize,
      wallPen: wallPen,
      reloadTime: (100-(data.weaponStats.reloadTimeSeconds * 18))
    })
    
  }

  
  handleStats()

  useEffect(() => {}, [stats.magSize])

return (

  <Container>
    <WeaponContainer>
      <div className="weapon-image">
        <Image 
          quality={100} 
          className="image" 
          src={data.displayIcon} 
          alt="weapon" 
          layout="fill" 
          objectFit="contain"
        />
        <div className="weapon-bg"/>
      </div>
      <div className="weapon-info">
        <p className="g-red-title">{data.displayName+`.`}</p>
        <p className="g-title">{`//características`}</p>
        <div className="info-item">
          <p className="g-label">categoria:</p>
          <p className="g-label">{category}</p>
        </div>
        <div className="info-item">
          <p className="g-label">valor:</p>
          <p className="g-label">{data.shopData.cost}</p>
        </div>                
        <div className="weapon-stats">
          <div className="info-stats">
            <p className="g-label">taxa de disparo:</p>                        
            <Line percent={stats.fireRate || 0} strokeColor="antiquewhite" trailColor="#0f1923"/>
          </div>
          <div className="info-stats">
            <p className="g-label">tamanho do pente:</p>
            <Line percent={stats.magSize || 0} strokeColor="antiquewhite" trailColor="#0f1923"/>
          </div>
          <div className="info-stats">
            <p className="g-label">penetração:</p>
            <Line percent={stats.wallPen || 0} strokeColor="antiquewhite" trailColor="#0f1923"/>
          </div>
          <div className="info-stats">
            <p className="g-label">recarregamento:</p>
            <Line percent={stats.reloadTime || 0} strokeColor="antiquewhite" trailColor="#0f1923"/>
          </div>
        </div>
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
  display: flex;
  flex-direction: column;
  width: 60vw;
  .weapon-image {
    height: 15rem;  
    max-width: 34rem;
    position: relative;
    .image {
      z-index: 1!important;
    }

    .weapon-bg {
      position: relative;
      height: 10rem;
      background-color: var(--g-red);
      width: 20rem;
      bottom: -40px;
      left: 143px;
      z-index: 0;
    }

  }
  .weapon-info {
    padding: 1rem;
    max-width: 536px;
    .g-red-title {
      margin-top: 0;
    }
    .info-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .weapon-stats {
      padding: 0.5rem;
      margin-top: 1rem;
      border-style: groove;
      border-width: 1px;
      display: flex;
      flex-direction: column;

      .info-stats {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .g-label {
          margin: 3px 0 3px;
        }
        .rc-progress-line {
          height: 0.5rem;
          width: 20rem;
          * {
            transition: all 500ms;
          }
            

        }
      }
    }
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
