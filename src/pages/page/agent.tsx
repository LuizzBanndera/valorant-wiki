import Image from 'next/image'
import styled from 'styled-components'
import Raze from '../../../public/images/v_agents.svg'


export default function Agent() {

  return (
    <Container className="container">
      <Wrapper className="wrapper">
        <Image src={Raze} layout='fixed' alt='test'/>
        <Details>
          <AgentDetail>
            <p className='label'>RAZE</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Quis dolorem ex, praesentium magni earum nemo quas accusantium cupiditate 
              sunt minus saepe nihil vitae laboriosam, nesciunt debitis doloribus. 
              Enim, totam repellendus.</p>
          </AgentDetail>
          <RoleDetail>
            <p className='label'>/DUELISTA</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Quis dolorem ex, praesentium magni earum nemo quas accusantium cupiditate 
              sunt minus saepe nihil vitae laboriosam, nesciunt debitis doloribus. 
              Enim, totam repellendus.</p>
          </RoleDetail>
        </Details>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`

`
const Wrapper = styled.div`
  width: 100%;
  align-items: flex-start;
  justify-content: center !important;
  flex-direction: row !important ;
  p {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;    
  }
  
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
`
const AgentDetail = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;

  .label {
    font-size: 48px;
    color: red;
  }
  p {
    font-size: 18px;
  }
`
const RoleDetail = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;

  .label {
    font-size: 20px;
    text-align: right;
  }
  p {
    text-align: right;
    font-size: 14px;
  }
`