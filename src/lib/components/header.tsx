import {useRouter} from 'next/router'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { NextComponentType } from 'next/types'

const Header: NextComponentType = () => {
  
  const t = useTranslations('Menus')
  
  const menu = [
    {
      name: 'HOME',
      path: '/'
    },
    {
      name: t('agents'),
      path: '/page/agents'
    },
    {
      name: t('weapons'),
      path: '/page/weapons'
    },
    {
      name: t('maps'),
      path: '/page/maps'
    },
  ]
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

const NavStyled = styled.nav`
  display: flex;
  color: var(--g-white);
  width: 100%;
  padding: 10px;
  gap: 20px !important;
  letter-spacing: 2px;
  border-radius: 2px;
  font-family: 'Anton', cursive;

  @media (max-width: 576px) {
    justify-content: space-evenly;  
  }  
`

const ItemStyled = styled.li`
  display: flex !important;
  cursor: pointer;
  text-transform: uppercase;
  height: 35px;
  align-items: center;
  border-radius: 2px;
  padding: 5px;
  transition: all 500ms;  
  :hover {
    background-color: #FF4654 !important;    
    color: whitesmoke;
    -webkit-box-shadow: 0px 0px 20px 1px rgba(255,70,84,0.81); 
    box-shadow: 0px 0px 20px 1px rgba(255,70,84,0.81);     
  }
`
export default Header