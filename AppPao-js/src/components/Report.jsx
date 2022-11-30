import React from 'react'
import styles from '../styles/components/Report.module.css'

function Report() {
  return (
    <div className={styles.report}>
      <div className={styles.mainContainer}>
        <div className={styles.sectionTitle}>
          Relatório
        </div>
        <div className={styles.search}>
          <div className={styles.firstRow}>            
            <div>
              <p>Valor</p> 
              <input type="text" />
            </div>
            <div>
              <p>Data cadastro Inicio</p>                 
              <input type="text" />
            </div> 
            <div>
              <p>Data cadastro Fim</p>                 
                <input type="text" />
            </div>             
          </div>
          <div className={styles.secondRow}>
            
            <div>
              <button className={styles.listButton}>Listar</button>
              <button className={styles.exportButton}>Exportar</button>
            </div>              
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

export default Report