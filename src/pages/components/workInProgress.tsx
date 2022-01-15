import Image from 'next/image'
import IMG from 'public/images/v_work_in_progress.svg'
import styled from 'styled-components'

export default function WorkInProgress() {

  return(
    <Container>
      <Image src={IMG} layout='fixed' alt="work in progress"/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  >div {
    max-width: 300px;
  }
`