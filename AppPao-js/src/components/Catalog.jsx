import React, { useEffect, useState } from 'react';
import styles from '../styles/components/Catalog.module.css';
import axios from 'axios';
import { useMemo } from 'react';
import Modal from 'react-modal';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';


const initialValue = [{
  name: '',
  quantity: 0,
  price: 0,
}]


// const baseURL = "http://localhost:8082/product";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [busca, setBusca] = useState([]);
  const [values, setValues] = useState(initialValue);
  // const history = useNavigate();

  

  function onChange(ev){
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value })
  }

  function onSubmit(ev){
    ev.preventDefault();

    api
      .post("/product", values)
      .then((response) => alert('Item cadastrado com sucesso!') &&
      setProducts(response.data))
      .catch((err) => {
        console.error("ops! post deu ruim" + err);
      });
  }

  // if (!products) return null;

  // useEffect(() => {
  //   api
  //     .get("/product")
  //     .then((response) => setProducts(response.data))
  //     .catch((err) => {
  //       console.error("ops! get deu ruim" + err);
  //     });
  // }, []);
  
  const totalProducts= () =>{
    return 'x'
  }
  const qtPage = () =>{
    return 'y'
  }


  // const productsFiltered = useMemo(() => {
  //   const lowerBusca = products.toString().toLowerCase();
  //   return products
  //   .filter((list) => list.toString().toLowerCase().includes(lowerBusca));
  // }, [busca, products])  


  console.log(products)
  
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
      
        <div>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Novo Produto</h2>

                <form className={styles.modal} onSubmit={onSubmit}>
                <p>Nome do item</p>
                <input id="name" name="name" type="text" onChange={onChange}/>
                <p>Quantidade</p>
                <input id="quantity" name="quantity" type="number" onChange={onChange}/>
                <p>Preço</p>
                <input id="price" name="price" type="number" onChange={onChange}/>
      
                <div className={styles.buttonAlign}>
                <button type="submit" className={styles.buttonModal}>Salvar</button>
                </div>
                </form>
                </div>
        {/* <div className={styles.search}>
          <div className={styles.searchTitle}>
            Localizar
          </div>
          <div>
            <input 
              id="price" name="price" type="text"
              value={busca} 
              onChange={(ev) => setBusca(ev.target.value)} 
              />
          </div>
          <div className={styles.searchButtons}>
            <button className={styles.buttonSearch}>Localizar</button>
            <button className={styles.buttonExport}>Exportar</button>
          </div>           */}
        </div>

        {/* <div className={styles.search}>
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

                <form className={styles.modal} onSubmit={onSubmit}>
                <p>Nome do item</p>
                <input id="name" name="name" type="text" onChange={onChange}/>
                <p>Quantidade</p>
                <input id="quantity" name="quantity" type="number" onChange={onChange}/>
                <p>Preço</p>
                <input id="price" name="price" type="number" onChange={onChange}/>
      
                <div className={styles.buttonAlign}>
                <button type="submit" className={styles.buttonModal}>Salvar</button>
                <button onClick={closeModal} className={styles.buttonModal} >Fechar</button>
                </div>
                </form>
            </Modal>


            </div>
          </div>
          <div>
            {/* {products.map((amendoim) => (
              <p>{amendoim.name}</p>
              
            ))} */}
          {/* </div> 
        </div>
        <div className={styles.pagination}>
            <div>
              Mostrando de 1 até {qtPage()} de {totalProducts()} produtos
            </div>
          </div> */} 
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

