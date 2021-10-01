import styles from './cardMenu.module.scss'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export default function CardMenu (props: any) {
  return (
    <motion.div transition={{duration: 0.4}}  whileHover={{ scale: 1.10 }} whileTap={{ scale: 0.999 }}>
      <CardStyled>
        <strong className="ter">{props.title ? props.title : 'menu'}</strong>
        <strong className="sec">{props.title ? props.title : 'menu'}</strong>
        <strong className="first">{props.title ? props.title : 'menu'}</strong>
        <strong className="sec">{props.title ? props.title : 'menu'}</strong>
        <strong className="ter">{props.title ? props.title : 'menu'}</strong>
      </CardStyled>
    </motion.div>
  )
}

const CardStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  flex-direction: column;
  height: 450px;
  width: 250px;
  background-color: darkgrey;
  background-color: #858585;
  color: whitesmoke;
  font-size: 52px;
  font-family: 'Anton', cursive;  
  cursor: pointer;
  user-select: none;
  -webkit-box-shadow: 0px 12px 16px -6px rgba(0,0,0,0.55); 
  box-shadow: 0px 12px 16px -6px rgba(0,0,0,0.55);
  transition: all 500ms;
  border-radius: 2px;
  .sec {
    color: rgb(203 203 203);    
  }
  .ter {
    color: rgb(167 167 167);    
  }  
  :hover {
  background-color: #FF4654;
}
`