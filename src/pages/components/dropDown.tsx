import {useContext} from 'react'
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
     
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  right: 1rem;
  @media(max-width: 600px) {
      position: unset;
  }
`