import { AxiosResponse } from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import styled from "styled-components"
import db from '@services/api'
import Image from 'next/image'
import {Line} from 'rc-progress'
import { useEffect, useState } from "react"
import { sleep } from "@shared/utils"
import {TWeaponData, TWeapons, TSkins} from '@shared/types/types.weapons'

export default function Weapon({data}: TWeaponData) {

  const category = data.category.substring(data.category.indexOf('::')+2)

  const [stats, setStats] = useState({fireRate : 0, magSize : 0, wallPen : 0, reloadTime : 0, catName: '*****', cost: 0})

  const [loaded, setLoaded] = useState(false)
  
  const handleStats = async () => {
    
    if (!loaded) {      

      setLoaded(true)
            
      if (category === 'Melee') {

        setStats({
          fireRate: 100,
          magSize: 100,
          wallPen: 100,
          reloadTime: 100,
          catName: category,
          cost: 0
        })

      } else {        
        
        let wallPen
        let wallPenetration = data
        .weaponStats
        .wallPenetration
        .substring(data.weaponStats.wallPenetration.indexOf('::')+2)
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
          reloadTime: (100-(data.weaponStats.reloadTimeSeconds * 18)),
          catName: data.shopData.categoryText,
          cost: data.shopData.cost
        })    

      }

    }    
  }  
  
  handleStats()

  useEffect(() => {}, [stats])

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
          <p className="g-label">{stats.catName}</p>
        </div>
        <div className="info-item">
          <p className="g-label">valor:</p>
          <p className="g-label">{stats.cost}</p>
        </div>                
        <div className="weapon-stats">
          <div className="info-stats">
            <p className="g-label">taxa de disparo:</p>                        
            <Line percent={stats.fireRate} strokeColor="antiquewhite" trailColor="#0f1923"/>
          </div>
          <div className="info-stats">
            <p className="g-label">tam. do pente:</p>
            <Line percent={stats.magSize} strokeColor="antiquewhite" trailColor="#0f1923"/>
          </div>
          <div className="info-stats">
            <p className="g-label">penetração:</p>
            <Line percent={stats.wallPen} strokeColor="antiquewhite" trailColor="#0f1923"/>
          </div>
          <div className="info-stats">
            <p className="g-label">recarregamento:</p>
            <Line percent={stats.reloadTime} strokeColor="antiquewhite" trailColor="#0f1923"/>
          </div>
        </div>
      </div>
    </WeaponContainer>
    <SkinsContainer>
      {
        data.skins.map((skin, idx) => (
          <div key={idx}>  
          <div className="skin" key={idx}>
            <div className="skin-image">
              {                                
              <Image quality={90} className="image" src={skin.chromas[0].fullRender} alt="" layout="fill" objectFit="contain"/>                                    
              }
            </div>
            <div className="skin-stats">
              <p className="g-title">{skin.displayName}</p>
            </div>
          </div> 
          </div>
        ))
      }
    </SkinsContainer>
  </Container>)
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  gap: 5rem;
  justify-content: center;
`
const WeaponContainer = styled.div`
  display: flex;
  flex-direction: column;
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
      @media (max-width: 600px) {
        left: auto;
      }      
    }

  }
  .weapon-info {
    padding: 1rem;
    max-width: 536px;
    
    @media (max-width: 600px) {
      max-width: 100vw;
      padding: unset;
    }
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
        gap: 1rem;
        justify-content: space-between;
        .g-label {
          margin: 3px 0 3px;
        }
        .rc-progress-line {
          height: 0.5rem;
          width: 20rem;
          @media (max-width: 600px) {
            width: 8rem;
          }
        }
      }
    }
  }
`
const SkinsContainer = styled.div`  
  height: 100%;
  overflow: auto;
  width: 29vw;

  @media (max-width: 600px) {
    width: 100%;
    padding: 1rem;
  }
  .skin {
    border-bottom-style: groove;
    border-width: 1px;
  }
  .skin-image {
    height: 15rem;  
    max-width: 34rem;    
    position: relative;
    @media (max-width: 600px) {
      left: unset;
    }
    .image {
      z-index: 1!important;
    }
  }
  .skin-stats {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-top: -3rem;
    z-index: 2;
  }
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
