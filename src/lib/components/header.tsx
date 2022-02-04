import {useRouter} from 'next/router'
import {Nav} from 'rsuite'
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

const NavStyled = styled(Nav)`
  display: flex;
  color: var(--g-white);
  width: 100%;
  padding: 10px;
  gap: 20px !important;
  letter-spacing: 2px;
  border-radius: 2px;
  font-family: 'Anton', cursive;

  @media (max-width: 576px) {
    justify-content: space-between;  
  }  
`

const ItemStyled = styled(Nav.Item)`
  display: flex !important;
  text-transform: uppercase;
  height: 35px;
  align-items: center;
  border-radius: 2px;
  padding: 5px;
  transition: all 500ms;  
  :hover {
    background-color: #FF4654 !important;    
    color: whitesmoke;
  }
`
export default Header