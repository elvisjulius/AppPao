import React from 'react'
import styles from '../styles/components/Aside.module.css'

function Aside() {
  return (
    <div className={styles.options}>
      <a href="/home">Home</a>
      <a href="/inventory">Estoque</a>
      <a href="/cashier">Caixa</a>
      <a href="/catalog">Cadastrar</a>
      <a href="/report">Relatorios</a>
      <a href="">Central de Ajuda</a>
    </div>    
  )
}

export default Aside