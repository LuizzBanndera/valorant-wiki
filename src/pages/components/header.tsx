import {useRouter} from 'next/router'
import {Nav} from 'rsuite'
import styled from 'styled-components'

const menu = [
  {
    name: 'HOME',
    path: '/'
  },
  {
    name: 'AGENTES',
    path: '/page/agents'
  },
  {
    name: 'ARMAS',
    path: '/page/weapons'
  },
  {
    name: 'MAPAS',
    path: '/page/maps'
  },
]

export default function Header () {

  const router = useRouter()
  const handleClick = (path: string) => (router.push(path))

  return (    
    <NavStyled className="header">    
      {
        menu.map((item, idx) => (       
          <ItemStyled key={idx} onClick={() => handleClick(item.path)}>
             {item.name}
          </ItemStyled>
        ))
      }
    </NavStyled>    
  )
}

const NavStyled = styled(Nav)`
  display: flex;
  color: var(--g-white);
  width: 100%;
  padding: 10px;
  gap: 20px !important;
  letter-spacing: 2px;
  border-radius: 2px;
  font-family: 'Anton', cursive;
  border-bottom-style: groove;
  border-width: 2px;
  border-color: var(--g-white);
  @media (max-width: 576px) {
    justify-content: space-between;  
  }  
`

const ItemStyled = styled(Nav.Item)`
  display: flex;
  height: 35px;
  align-items: center;
  border-radius: 2px;
  padding: 5px;
  transition: all 500ms;
  :hover {
    background-color: #FF4654;    
    color: whitesmoke;
  }
`