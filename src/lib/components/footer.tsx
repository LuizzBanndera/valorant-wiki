import styled from "styled-components"

export default function FooterFC () {

  return (
    <FooterStyled className="footer">
      Valorant-wikii is a non official website and not endorsed by Riot Games in any way.
    </FooterStyled> 
  )
}

const FooterStyled = styled.div`  
  background-color: #0f1923a6;
  color: var(--g-gray);
  text-align: center;
  font-size: 12px;
`