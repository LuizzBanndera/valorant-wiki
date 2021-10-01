import Header from '../components/header'
import Footer from '../components/footer'
import styled from 'styled-components'

export default function AgentsFC () {  
  return (
    <WrapperStyled className="wrapper">
      <Header/>
      <ContainerStyled className="container">
        <div>card</div>
        <div>card</div>
        <div>card</div>
        <div>card</div>
        <div>card</div>
        <div>card</div>
        <div>card</div>
        <div>card</div>
        <div>card</div>
      </ContainerStyled>
      <Footer/>
    </WrapperStyled>
  )
}

const WrapperStyled = styled.div`
`
const ContainerStyled = styled.div`
`