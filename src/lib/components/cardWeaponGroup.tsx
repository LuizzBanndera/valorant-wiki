import styled from 'styled-components'

const CardWeaponGroup = (props: any) => {
  const {description, image} = props

  return (    
    <Container>
      <p className='g-title'>{description}</p>
    </Container>    
  )
}

const Container = styled.div`
  display: flex;
  cursor: pointer;
  transition: all 0.3s ease-in-out;  
  height: 3rem;
  width: 10rem;
  background-color: #66666612;
  align-items: center;
  :hover {
    background-color: var(--g-red);
    -webkit-box-shadow: 0px 0px 20px 1px rgba(255,70,84,0.81); 
    box-shadow: 0px 0px 20px 1px rgba(255,70,84,0.81);    
  }
  
  p {
    transition: all 0.3s ease-in-out;
    width: 100%;    
    font-size: 14px;
    text-align: center;
    margin: 0;    
  }
  :hover p{
    transform: translate(-0.6rem, -1.5rem) !important;
  }
`

export default CardWeaponGroup