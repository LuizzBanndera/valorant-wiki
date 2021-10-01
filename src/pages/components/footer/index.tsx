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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`