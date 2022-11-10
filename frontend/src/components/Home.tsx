import React from 'react'
import styles from '../styles/components/Home.module.css'

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.mainContainer}>
        <div className={styles.title}>
          Bem-vindo a AppPão!!
        </div>
        <div className={styles.dashboards}>
          <div className={styles.outOfStock}>
            Produtos em falta
          </div>
          <div className={styles.topSelling}>
            Pedidos mais vendidos
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home