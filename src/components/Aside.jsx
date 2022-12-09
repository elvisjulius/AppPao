import React from 'react'
import styles from '../styles/components/Aside.module.css'

function Aside() {
  return (
    <div className={styles.options}>
      <a href="/">Cadastrar</a>
      <a href="/inventory">Estoque</a>
      <a href="/cashier">Caixa</a>
      <a href="/report">Pedidos</a>
    </div>    
  )
}

export default Aside