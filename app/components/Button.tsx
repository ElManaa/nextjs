import React from 'react'
import styles from '@/styles/Button.module.scss'

type Props = {
    label : string
    variation? : ( "primary" | "secondary" | false ) 
}

const Button = ( {label , variation = false }: Props)  => { 
  return (
    <button className={`${styles.buttonMain} ${variation && styles[variation]}`}> {label} </button>
  )
}


export default Button