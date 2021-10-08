import styled from "styled-components"

export default function FooterFC () {

  return (
    <FooterStyled className="footer">
    All rights reserved.
    </FooterStyled> 
  )
}

const FooterStyled = styled.div`
  @media(max-width: 820px ) {
    position: fixed;
    bottom: 0;
    clear: both;    
  }
`