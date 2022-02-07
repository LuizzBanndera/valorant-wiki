import {NextComponentType} from 'next/types'
import styled from 'styled-components'
import Img from '@public/images/v_weapons_bg.svg'

const CardWeaponGroup: NextComponentType = () => {

  return (
    
      <Container background={Img}>
        <p className='g-title'>ARMAS PESADAS</p>
      </Container>
    
  )

}

const Container = styled.div<{background: string}>`
  display: flex;
  cursor: pointer;
  transition: all 0.3s ease-in-out;  
  position: absolute;
  height: 7rem;
  width: 15rem;
  background-color: var(--g-gray);
  /* background-image: url(props => props.background); */
  :hover {
    background-color: var(--g-red);
    -webkit-box-shadow: 0px 0px 20px 1px rgba(255,70,84,0.81); 
    box-shadow: 0px 0px 20px 1px rgba(255,70,84,0.81);    
  }
  
  p {
    transition: all 0.3s ease-in-out;
    width: 100%;    
    font-size: 30px;
    text-align: center;
    margin: 0;    
  }
  :hover p{
    transform: translate(-0.6rem, -1.5rem) !important;
  }
`

export default CardWeaponGroup