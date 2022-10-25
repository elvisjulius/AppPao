import React from 'react'
import styles from '../styles/components/Catalog.module.css'

function Catalog() {
  
  const totalProducts= () =>{
    return 'x'
  }
  const qtPage = () =>{
    return 'y'
  }
  return (
    <div className={styles.catalog}>
      <div className={styles.mainContainer}>
        <div className={styles.sectionTitle}>
          Gerenciar Produtos
        </div>
        <div className={styles.search}>
          <div className={styles.searchTitle}>
            Localizar
          </div>
          <div>
            <input type="text" />
          </div>
          <div className={styles.searchButtons}>
            <button onClick={()=>alert('Funcionou')} className={styles.buttonSearch}>Localizar</button>
            <button onClick={()=>alert('Funcionou')} className={styles.buttonExport}>Exportar</button>
          </div>          
        </div>

        <div className={styles.search}>
          <div className={styles.newProduct}>
            <div>
              <p>Produtos Disponiveis</p>
            </div>
            <div>
            <button onClick={()=>alert('Funcionou')} className={styles.buttonNewProduct}>Novo Produto</button> 
            </div>
          </div>
          <div>
            Tabelas com produtos <br />Tabelas com produtos <br />Tabelas com produtos <br />Tabelas com produtos <br />
          </div> 
        </div>
        <div className={styles.pagination}>
            <div>
              Mostrando de 1 até {qtPage()} de {totalProducts()} produtos
            </div>
          </div>
      </div>
    </div>
  )
}

export default Catalog