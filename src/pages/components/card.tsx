import styled from "styled-components"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Card(props: any) {

  return(    
  <Container {...props}>
    <div className="container">
      <div className="box">
        <div className="imgBox">          
          <Image className="image" blurDataURL={props.image} layout="fill" src={props.image} alt=""/>
        </div>
        <div className="content">
          <h2 className="g-title">{props.name}</h2>
        </div>
      </div>
    </div>        
  </Container>
  )
}


const Container = styled.button`
all: unset;
cursor: pointer;
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  width: 100vw;
  min-height: 100vh;
  background-color: antiquewhite;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.container .box {
  position: relative;
  width: 20rem;
  height: 25rem;
  margin: 1rem;

  @media (max-width: 600px) {
    height: 10rem;
  }
}

.container .box:hover .imgBox {
  transform: translate(-1.5rem, -1.5rem);
}

.container .box:hover .content {
  transform: translate(1.5rem, 1.5rem);
}

.imgBox {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: all 0.3s ease-in-out;
}

.imgBox img {
  width: 30rem;
  height: 30rem;
  object-fit: cover;
  resize: both;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  background-color: antiquewhite;
  z-index: 1;
  align-items: flex-end;
  text-align: center;
  transition: 0.5s ease-in-out;
  @media (max-width: 600px) {
    top: 3rem;
  }
}

.content h2 {
  display: block;
  font-size: 2rem;
  color: #111;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 1px; 
}

.content span {
  color: #555;
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 2px;
}

@media (max-width: 600px) {
  .container .box:hover .content {
    transform: translate(0, 1.5rem);
    transform: none;
  }
  .container .box:hover .imgBox {
    transform: translate(0, -1.5rem);
    transform: none;
  }
}

`