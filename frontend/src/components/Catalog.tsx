import React, { ReactNode } from 'react';
import styles from '../styles/components/Catalog.module.css'
import {Api} from "../providers";
import { useState } from 'react';
import axios from 'axios';



export interface Produto {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

// const getApi: GetApi = {};

const baseURL = "http://localhost:8082/product";

function Catalog() {
  const [post, setPost] = useState<Produto[]>([]);
  const [busca, setBusca] = useState<Produto[]>();

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  console.log(post)
  
  
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
            <input 
              type="text" 
              value={busca} 
              onChange={(ev) => setBusca(ev.target.value)} 
              />
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
            {post.map((list) => (
              <p>{list.name}</p>
            ))}
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