import * as React from 'react'
import {motion} from 'framer-motion'

export const Bounce = (props: any) => {      
  return (
  <motion.div transition={{duration: 0.2}}  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.999 }}>
    {props.children}
  </motion.div>
  )
}