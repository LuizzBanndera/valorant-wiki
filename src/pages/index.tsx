import type { NextPage } from 'next'
import styled from 'styled-components'
import CardMenu from './components/cardMenu'

const Items  = [
  {
    title : 'AGENTES',
    image : '/images/v_agents.svg'
  },
  {
    title : 'ARMAS',
    image : '/images/v_guns.svg'
  },
  {
    title : 'MAPAS',
    image : '/images/v_maps.svg'
  }
]

const Home: NextPage = () => {
  return (
      <ContainerStyled>
        {Items.map(({title, image}, idx) => (
          <ItemStyled key={idx} image={image} position={idx+1}>
            <CardMenu title={title}/>
          </ItemStyled>
        ))}
          <BackGroundStyled/>
      </ContainerStyled>
  )
}

const ContainerStyled = styled.ul`
  display: flex;
  min-height: 86vh;
  padding: 3rem;  
  justify-content: center;
  align-items: center;
  gap: 1rem;
  list-style-type: none;
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
