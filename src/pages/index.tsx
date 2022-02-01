import { useContext } from 'react'
import CardMenu from '@components/cardMenu'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import {ReactContext} from '@ctx/state'


const Home: NextPage = () => {

  const ctx = useContext(ReactContext)
  const lang = ctx.state.language.value.menus
  
  const Items  = [
    {
      title : lang.agents,
      image : '/images/agent-logo.png',
      bg    : '/images/v_agents_bg.svg',
      path  :'/page/agents'
    },
    {
      title : lang.weapons,
      image : '/images/vandal-logo.png',
      bg    : '/images/v_weapons_bg.svg',    
      path  : '/page/weapons'
    },
    {
      title : lang.maps,
      image : '/images/maps-logo.png',
      bg    : '/images/v_maps_bg.svg',    
      path  : '/page/maps'
    }
  ]

  const router = useRouter()
  const handleClick = (path: string) => (router.push(path))

  const handleLang = () => {
    const lang = router.locale

    console.log(lang);
    

    switch (lang) {
      case 'en-US':
        ctx.state.language.setSelectedLanguage(0)        
        break;
      case 'pt-BR':
        ctx.state.language.setSelectedLanguage(1)
        break;
        default:        
        ctx.state.language.setSelectedLanguage(0)        
        break;
    }
  }

  handleLang()

  return (
     <ContainerStyled>
     {Items.map(({title, bg, path}, idx) => (
       <ItemStyled key={idx} bg={bg} position={idx+1}>
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
  gap: 1rem;
  height: 100%;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
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
  background-size: contain;
  @media (max-width: 600px) {
    display: none;
  }  
  `
const ItemStyled = styled.li<{bg: string; position: number}>`  
  :nth-child(${(p) => p.position}):hover ~ div {
    background-image: url(${(p) => p.bg})!important;
    z-index: auto;
  }
  :nth-child(${(p) => p.position}):hover {
    z-index: 1;
  }
`
export default Home
