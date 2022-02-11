import styled from 'styled-components'

export default function CardMenu (props: any) {
  return (
      <CardStyled {...props}>
        <Label className="ter">{props.name ? props.name : 'menu'}</Label>
        <Label className="sec">{props.name ? props.name : 'menu'}</Label>
        <Label className="first">{props.name ? props.name : 'menu'}</Label>
        <Label className="sec">{props.name ? props.name : 'menu'}</Label>
        <Label className="ter">{props.name ? props.name : 'menu'}</Label>
      </CardStyled>
  )
}

const Label = styled.p`
  text-transform: uppercase;
  @media (max-width: 576px) {
    display: ${props => props.className !== 'first' ? 'none' : 'block'};
    visibility: ${props => props.className !== 'first' ? 'hidden' : 'visible'};
  }
`

const CardStyled = styled.button<{background : string}>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;  
  flex-direction: column;
  background-position: top;
  width: 250px;
  color: var(--g-white);
  font-size: 52px;
  font-family: 'Anton', cursive;  
  user-select: none;
  -webkit-box-shadow: 0px 12px 16px -6px rgba(0,0,0,0.55); 
  box-shadow: 0px 12px 16px -6px rgba(0,0,0,0.55);
  transition: all 500ms;
  border-radius: 2px;
  background-image: url(${props => props.background ? props.background : ''});    
  cursor: pointer;
  .sec {
    color: #d3c7b882;    
  }
  .ter {
    color: #ab9f9038;    
  }  
  p {
    margin: 0 ;
    letter-spacing: 3px;
  }
  :hover {    
    background-color: #666666;
    background-color: var(--g-red);
    z-index: 1;
    -webkit-box-shadow: 0px 0px 20px 1px rgba(255,70,84,0.81); 
    box-shadow: 0px 0px 20px 1px rgba(255,70,84,0.81);
  }

  @media (max-width: 576px) {
    height: 175px;    
    width: 300px;
  }
`