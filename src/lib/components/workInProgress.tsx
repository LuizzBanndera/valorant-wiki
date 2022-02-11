import Image from 'next/image'
import WorkInPrgsSVG  from '@public/images/v_work_in_progress.svg'
import styled from 'styled-components'

export default function WorkInProgress() {

  return(
    <Container>
      <Image src={WorkInPrgsSVG} layout='fixed' objectFit='cover' alt="work in progress"/>
    </Container>
  )
}

const Container = styled.div`
  >div {
    max-width: 300px;
  }
`