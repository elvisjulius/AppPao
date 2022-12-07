import React, { useEffect, useState } from 'react';
import styles from '../styles/components/Catalog.module.css';
import api from '../services/api';



const initialValue = [{
  name: '',
  quantity: 0,
  price: 0,
}]


function Catalog() {
  const [products, setProducts] = useState([]);
  const [busca, setBusca] = useState([]);
  const [values, setValues] = useState(initialValue);

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

  console.log(products)

  return (
    <div className={styles.catalog}>
      <div className={styles.mainContainer}>
      
        <div>
        <h2>Novo Produto</h2>

                <form className={styles.modal} onSubmit={onSubmit}>
                <h4>Nome do item</h4>
                <input id="name" name="name" type="text" onChange={onChange}/>
                <h4>Quantidade</h4>
                <input id="quantity" name="quantity" type="number" onChange={onChange}/>
                <h4>Preço</h4>
                <input id="price" name="price" type="float" onChange={onChange}/>
      
                <div className={styles.buttonAlign}>
                <button type="submit" className={styles.buttonModal}>Salvar</button>
                </div>
                </form>
                </div>

        </div>
      </div>
  )
          
        }

export default Catalog
