import styled from "styled-components"
import Image from "next/image"
import { Bounce } from "@shared/motion"
import { useRouter } from "next/router"
import { TWeapon } from "../shared/types/types.weapons"

export default function CardWeapons(data: TWeapon) {

  const category = data.category.substring(data.category.indexOf('::')+2)


  const handleCategory = () => {
    if (category === 'Melee') {
      return category
    } else {
      return data.shopData.categoryText
    }
  }

  const Router = useRouter()

  const handleClick = (uuid: string, name: string) => {
    Router.push({pathname:`/page/weapons/[uuid]`, query: {uuid}}, `/weapons/${name}`)
  }
  
  return(
    <Container onClick={() => handleClick(data.uuid, data.displayName)}>
      <Bounce>           
        <div className="image-container">
          <Image className="image" src={data.displayIcon} alt="weapon" layout="fill" objectFit="contain"/>
          <div className="square-background"/>
        </div>
        <div className="description">
          <p className="g-title">_{data.displayName}</p>
          <p className="g-title sub">/{handleCategory()}</p>
        </div>
      </Bounce>
    </Container>
  )
}

//styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  height: 140px;
  border-bottom-style: groove;
  border-width: 1px;
  transition: all .3s ease-in-out;  
  :hover {
    background-color: #FF4654;
    border-color:#FF4654;
  }
  
  .image-container {
    width: 312px;    
    position: relative;
    z-index: 0;
    @media (min-width: 880px) { 
      width: 440px;
    }
  }

  .square-background {
    width: 250px;
    height: 100px;
    margin-top: 20px;
    margin-left: 20px;    
  }

  .description {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 1rem 2rem 0;    
    position: relative;    
    color: var(--g-white);  
    top: -10.5rem;
    .sub {
      font-size: 12px;
      color: var(--g-gray)
    }
  }
`