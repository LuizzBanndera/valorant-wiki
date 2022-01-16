import styled from "styled-components"
import Image from "next/image"

export default function CardWeapons(data: TWeapon) {
  
  return(
    <Container>
      <div className="image-container">
        <Image className="image" src={data.displayIcon} alt="weapon" layout="fill" objectFit="contain"/>
        <div className="square-background"/>
      </div>
      <div className="description label">
        <a>{data.displayName}</a>
        <p>Assalt Rifle</p>
      </div>
    </Container>
  )
}

//styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  transition: .3s ease-in-out;  
  :hover {
    background-color: #FF4654;
    border-color:#FF4654;
    color: whitesmoke;    
  }  

  .image-container {
    width: 312px;
    height: 200px;
    position: relative;
    z-index: 0;
  }

  .square-background {
    width: 250px;
    height: 100px;
    margin-top: 20px;
    margin-left: 20px;
    background-color: #FF4654;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1rem 0;
    border-bottom-style: solid;
    position: relative;
    top: -5rem;
    color: #858585;
    font-size: 12px;

    a {
      color: #FF4654;
      font-size: 20px;
    }
  }
  :hover a {
    transition: .3s ease-in-out;
    color: whitesmoke;
  } 
  :hover p {
    transition: .3s ease-in-out;
    color: whitesmoke;
  }
`