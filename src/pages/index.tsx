import type { NextPage } from 'next'
import styled from 'styled-components'
import CardMenu from './components/cardMenu'
import Header from './components/header'
import Footer from './components/footer'

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
      <Header />
      <MenuStyled>
        {Items.map(({title, image}, idx) => (
          <ItemStyled key={idx} image={image} position={idx+1}>
            <CardMenu title={title}/>
          </ItemStyled>
        ))}        
          <BackGroundStyled/>                
      </MenuStyled>
      <Footer/>      
    </ContainerStyled>
  )
}

const ContainerStyled = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 0 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;  

  @media(max-width: 820px) {
    width: fit-content;
  }
`
const MenuStyled = styled.ul`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  list-style-type: none;
`
const BackGroundStyled = styled.li`  
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;  
  background-color: #EBE8E0;
  background-position: bottom right;  
  background-repeat: no-repeat;    
  `
const ItemStyled = styled.li<{image: string; position: number}>`
  :nth-child(${(p) => p.position}):hover ~ li {background-image: url(${(p) => p.image})}
`
export default Home
