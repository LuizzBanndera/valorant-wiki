import {useContext} from 'react'
import Dropdown from 'rsuite/Dropdown'
import styled from 'styled-components'
import GlobalIcon from '@rsuite/icons/Global';
import { IconButton } from 'rsuite';
import {ReactContext} from '@ctx/state'

export default function DropDown() {

  const ctx = useContext(ReactContext)
  const lang = ctx.state.language

  const renderIconButton = (props: any, ref: any) => {
    return (
      <IconButton {...props} ref={ref} icon={<GlobalIcon />} circle color="red" appearance="subtle" />
    )
  }

  const handleLang = (idx: number) => lang.setSelectedLanguage(idx)

  return(
    <Container>
     <Dropdown renderToggle={renderIconButton} placement="bottomEnd">
        <Dropdown.Item eventKey={0} onClick={() => handleLang(0)}>{lang.value.languages.br}</Dropdown.Item>
        <Dropdown.Item eventKey={1} onClick={() => handleLang(1)}>{lang.value.languages.en}</Dropdown.Item>        
      </Dropdown> 
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  right: 1rem;
  @media(max-width: 600px) {
      position: unset;
    }
  *.rs-dropdown-menu {
    background-color: unset;
    .rs-dropdown-item {
      text-transform: uppercase;
      background-color: unset;
      :hover {
        color: whitesmoke;
      }
    }
  }
`