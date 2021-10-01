import styled from "styled-components"

export default function FooterFC () {

  return (
    <FooterStyled>
    All rights reserved.
    </FooterStyled> 
  )
}

const FooterStyled = styled.footer`
  width: 100%;
  height: 70px;
  color: #666666;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 820px ) {
    position: fixed;
    bottom: 0;
    clear: both;    
  }
`