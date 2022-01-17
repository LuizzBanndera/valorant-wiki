import styled from "styled-components"
import Image from "next/image"
import { Bounce } from "../shared/motion"

export default function CardWeapons(data: TWeapon) {

  const category = data.category.substring(data.category.indexOf('::')+2)
  
  return(
    <Container>
      <Bounce>           
        <div className="image-container">
          <Image className="image" src={data.displayIcon} alt="weapon" layout="fill" objectFit="contain"/>
          <div className="square-background"/>
        </div>
        <div className="description label">
          <a>_{data.displayName}</a>
          <p>/{category}</p>
        </div>
      </Bounce>
    </Container>
  )
}

//styled components
const Container = styled.div`
  display: flex;
  -webkit-tap-highlight-color: transparent;
  flex-direction: column;
  cursor: pointer;
  height: 140px;
  border-style: groove;
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
      width: 512px;
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
    font-size: 12px;
    color: #0f1923;    
    top: -9.5rem;    
    a {
      font-size: 30px;
    }
  }
`