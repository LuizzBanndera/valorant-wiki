import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import CardMenu from './components/cardMenu'

const Items  = [
  {
    title : 'AGENTES',
    image : '/images/v_agents.svg',
    path  :'/page/agents'
  },
  {
    title : 'ARMAS',
    image : '/images/v_guns.svg',
    path  : '/page/weapons'
  },
  {
    title : 'MAPAS',
    image : '/images/v_maps.svg',
    path  : '/page/maps'
  }
]

const Home: NextPage = () => {

  const router = useRouter()
  const handleClick = (path: string) => (router.push(path))

  return (
      <ContainerStyled>
        {Items.map(({title, image, path}, idx) => (
          <ItemStyled key={idx} image={image} position={idx+1}>
            <CardMenu onClick={() => handleClick(path)} name={title}/>
          </ItemStyled>
        ))}
          <BackGroundStyled/>
      </ContainerStyled>
  )
}

const ContainerStyled = styled.ul`
  all: unset;
  display: flex;  
  min-height: 87vh;  
  justify-content: center;
  align-items: center;
  gap: 1rem;
  list-style-type: none;

  @media (max-width: 880px) {
    flex-direction: column;    
  }
`
const BackGroundStyled = styled.div`  
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;  
  background-position: bottom right;  
  background-repeat: no-repeat;

  @media (max-width: 880px) {
    display: none;
  }  
  `
const ItemStyled = styled.li<{image: string; position: number}>`  
  :nth-child(${(p) => p.position}):hover ~ div {
    background-image: url(${(p) => p.image})!important;
    z-index: auto;
  }
  :nth-child(${(p) => p.position}):hover {
    z-index: 1;
  }
`
export default Home
