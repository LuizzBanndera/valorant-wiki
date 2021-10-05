import Header from '../components/header'
import Footer from '../components/footer'
import styled from 'styled-components'
import CardAgents from '../components/cardAgent'

export default function AgentsFC () {  
  return (
    <WrapperStyled className="wrapper">
      <Header/>
      <ContainerStyled className="container">
        <CardAgents/>
        <CardAgents/>
        <CardAgents/>
      </ContainerStyled>
      <Footer/>
    </WrapperStyled>
  )
}

const WrapperStyled = styled.div`
`
const ContainerStyled = styled.div`
`