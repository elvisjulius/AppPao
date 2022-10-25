import React from 'react'
import styles from '../styles/components/Aside.module.css'

function Aside() {
  return (
    <div className={styles.options}>
      <a href="">Home</a>
      <a href="">Estoque</a>
      <a href="">Caixa</a>
      <a href="">Catalogo</a>
      <a href="">Relatorios</a>
      <a href="">Central de Ajuda</a>
    </div>    
  )
}

export default Aside