import React, { useEffect } from 'react';
import styles from '../styles/components/Catalog.module.css';
import { useState } from 'react';
import axios from 'axios';
import { useMemo } from 'react';
import Modal from 'react-modal';
import api from '../services/api';

// export interface Produto {
//   id?: number;
//   name?: string;
//   quantity?: number;
//   price?: number;
// }


const baseURL = "http://localhost:8082/product";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [busca, setBusca] = useState();



  useEffect(() => {
    api
      .get("/product")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  function createPost() {
    api
      .post("/product",{
            "name": "mortadela",
            "quantity": 78,
            "price": 66.34
 })
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  if (!products) return null;

  console.log(products)
  
  
  const totalProducts= () =>{
    return 'x'
  }
  const qtPage = () =>{
    return 'y'
  }


  const productsFiltered = useMemo(() => {
    const lowerBusca = products;
    return products
    .filter((list) => list.toLowerCase().includes(lowerBusca.toLowerCase()));
  }, [busca, products])  
  
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%', 
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
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
            <button onClick={openModal} className={styles.buttonNewProduct}>Novo Produto</button> 
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"

              >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Novo Produto</h2>

                <form className={styles.modal}>
                <p>Nome do item</p>
                <input />
                <p>Quantidade</p>
                <input />
                <p>Preço</p>
                <input />
                </form>
                <div className={styles.buttonAlign}>
                <button onClick={createPost} onChange={(ev) => setProducts(ev.target.value)} className={styles.buttonModal} >Salvar</button>
                <button onClick={closeModal} className={styles.buttonModal} >Fechar</button>
                </div>
            </Modal>
            </div>
          </div>
          <div>
            {productsFiltered.map((list) => (
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



//get
  // React.useEffect(() => {
  //   axios.get(api).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

    // function createPost() {
  //   axios.post(api, {
  //       name: "Hello World!",
  //       quantity: "This is a new post."
  //       price:""
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

