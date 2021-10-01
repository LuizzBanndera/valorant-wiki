import type { NextPage } from 'next'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import CardMenu from './components/cardMenu'
import Header from './components/header'
import Footer from './components/footer'
import Agents from '../../public/images/v_agents.svg'
import Image from 'next/image'

const Home: NextPage = () => {
  return (    
    <Container>
      <Header />
      <Menu>
        <Item>
          <CardMenu title="AGENTES"/>
        </Item>
        <Item>
          <CardMenu title="ARMAS"/>
        </Item>
        <Item>
          <CardMenu title="MAPAS"/>
        </Item>        
        <BG/>
        {/* <Image src={Agents} alt="bg" layout="fill"/> */}
      </Menu>
      <Footer/>      
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 0 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;  
`
const Menu = styled.ul`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  list-style-type: none;  
`
const BG = styled.li`  
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: .25s;
  pointer-events: none;  
  background-color: #EBE8E0;
`
const Item = styled.li`
  :first-child:hover ~ ${BG} {      
    background-color: whitesmoke;
  }
  :nth-child(2):hover ~ ${BG} {
    background-color: whitesmoke;
  }
  :nth-child(3):hover ~ ${BG} {
    background-color: whitesmoke;
  }
`

export default Home
