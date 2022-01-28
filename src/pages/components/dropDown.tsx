import Dropdown from 'rsuite/Dropdown'
import styled from 'styled-components'
import GlobalIcon from '@rsuite/icons/Global';
import { IconButton } from 'rsuite';

export default function DropDown() {

  const renderIconButton = (props: any, ref: any) => {
    return (
      <IconButton {...props} ref={ref} icon={<GlobalIcon />} circle color="red" appearance="subtle" />
    )
  } 

  return(
    <Container>
     <Dropdown renderToggle={renderIconButton} placement="bottomEnd">
        <Dropdown.Item eventKey={0}>Português</Dropdown.Item>
        <Dropdown.Item eventKey={1}>English</Dropdown.Item>        
      </Dropdown> 
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  right: 1rem;
  *.rs-dropdown-menu {
    background-color: unset;
    .rs-dropdown-item {
      background-color: unset;
      :hover {
        color: whitesmoke;
      }
    }
  }
`