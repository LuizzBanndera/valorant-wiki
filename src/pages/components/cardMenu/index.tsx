import styles from './cardMenu.module.scss'
import { motion } from 'framer-motion'

export default function CardMenu (props: any) {
  return (
    <motion.div transition={{duration: 0.4}}  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.999 }}>
      <div className={styles.card}>
        <strong className={styles.ter}>{props.title ? props.title : 'menu'}</strong>
        <strong className={styles.sec}>{props.title ? props.title : 'menu'}</strong>
        <strong className={styles.first}>{props.title ? props.title : 'menu'}</strong>
        <strong className={styles.sec}>{props.title ? props.title : 'menu'}</strong>
        <strong className={styles.ter}>{props.title ? props.title : 'menu'}</strong>
      </div>
    </motion.div>
  )
}