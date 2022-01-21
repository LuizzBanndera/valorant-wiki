import { AxiosResponse } from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import styled from "styled-components"
import db from '@services/api'
import Image from 'next/image'
import {Line} from 'rc-progress'


export default function Weapon({data}: TWeaponData) {

  const category = data.category.substring(data.category.indexOf('::')+2)
  const wallPenetration = data.weaponStats.wallPenetration.substring(data.weaponStats.wallPenetration.indexOf('::')+2)
  const fireMode = data.weaponStats.fireMode.substring(data.weaponStats.fireMode.indexOf('::')+2)
  
  return(
  <Container>
    <WeaponContainer>
      <div className="weapon-image">
        <p className="g-red-title">{data.displayName+`.`}</p>
        <Image 
          quality={100} 
          priority 
          className="image" 
          src={data.displayIcon} 
          alt="" 
          layout="fill" 
          objectFit="contain"
        />
      </div>
      <div className="weapon-info">
        <p className="g-title">{`//características`}</p>
        <div className="info-item">
          <p className="g-label">nome:</p>
          <p className="g-label">{data.displayName}</p>
        </div>
        <div className="info-item">
          <p className="g-label">categoria:</p>
          <p className="g-label">{data.shopData.cost}</p>
        </div>                
        <div className="weapon-stats">
          <div className="info-stats">
            <p className="g-label">taxa de disparo:</p>                        
            <Line percent={13} strokeColor="antiquewhite" trailColor="#0f1923"/>
          </div>
          <div className="info-stats">
            <p className="g-label">tamanho do pente:</p>
            <Line percent={10} strokeColor="antiquewhite" trailColor="#0f1923"/>
          </div>
          <div className="info-stats">
            <p className="g-label">penetração:</p>
            <Line percent={100} strokeColor="antiquewhite" trailColor="#0f1923"/>
          </div>
          <div className="info-stats">
            <p className="g-label">recarregamento:</p>
            <Line percent={80} strokeColor="antiquewhite" trailColor="#0f1923"/>
          </div>
          <div className="info-stats">
            <p className="g-label">zoom(ADS):</p>
            <Line percent={100} strokeColor="antiquewhite" trailColor="#0f1923"/>
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
  width: 60vw;
  height: inherit;
  .weapon-image {
    margin-left: 5rem;
    height: 50%;
    width: 40vw;
    position: relative;
  }
  .weapon-info {
    padding: 1rem;
    max-width: 536px;
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
        .rc-progress-line {
          height: 0.5rem;
          width: 20rem;
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
