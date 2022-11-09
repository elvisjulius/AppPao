import React from 'react'
import styles from '../styles/components/Inventory.module.css'

function Inventory() {
  return (
    <div className={styles.catalog}>
      <div className={styles.mainContainer}>
        <div className={styles.sectionTitle}>
          Controlar Estoque
        </div>
        <div className={styles.search}>
          <div className={styles.searchTitle}>
            Localizar produto
          </div>
          <div className={styles.searchInputButtons}>
            <input type="text" placeholder='Digite a informação do produto que deseja localizar' />
            <button onClick={()=>alert('Funcionou')} className={styles.buttonSearch}>Localizar</button>
            <button onClick={()=>alert('Funcionou')} className={styles.buttonImport}>+ Importar Estoque</button>
          </div>         
        </div>
        <div className={styles.search}>
          <div className={styles.newProduct}>
            <div>
              <p>Produtos Disponiveis no site</p>
            </div>
          </div>
          <div>
            Tabelas com produtos <br />Tabelas com produtos <br />Tabelas com produtos <br />Tabelas com produtos <br />
          </div> 
        </div>

      </div>
    </div>
  )
}

export default Inventory