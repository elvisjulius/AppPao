import React from 'react'
import styles from '../styles/components/Cashier.module.css'

function Cashier() {
  return (
    <div className={styles.cashier}>
      <div className={styles.mainContainer}>
        <div className={styles.sectionTitle}>
          Caixa
        </div>
        <div className={styles.search}>
          <div className={styles.firstRow}>            
            <div>
              <p>Nome do Produto</p> 
              <input type="text" />
            </div>
            <div>
            <p>Data do Registro</p>               
              <input type="text" />
            </div> 
          </div>
          <div className={styles.secondRow}>
            <div>
              <div className={styles.input}>
              <p>Código do Produto</p>                 
                <input type="text" />
              </div> 
              <div className={styles.input}>
              <p>Quantidade</p>                 
                <input type="text" />
              </div> 
            </div>
            <div>
              <img src="" alt="" />  
              Imagem
            </div>   
          </div>            
        </div>
        
      </div>
      <div className={styles.cashierButtons}>
        <div className={styles.cashierButtonsFirst}>
          <button className={styles.registerRequestButton}>Registrar Pedido</button>
          <button className={styles.cancelButton}>Cancelar</button>
        </div>        
        <button className={styles.registerSaleButton}>Registrar Venda</button>
      </div>
    </div>
  )
}

export default Cashier