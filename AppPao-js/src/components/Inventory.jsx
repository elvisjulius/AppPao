import React, { useEffect, useState } from "react";
import styles from "../styles/components/Inventory.module.css";
import api from "../services/api";

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function Inventory() {
  const [products, setProducts] = useState([]);
  const [busca, setBusca] = useState([]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('PAGE_PRODUCTS');

  useEffect(() => {
    api
      .get("/product")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.error("ops! get deu ruim" + err);
      });
  }, []);

  const addToCart = (products) => {
    setCart([...cart, products])
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

  const renderProducts = () => (
    <>
    <h1>Products</h1>
              <table>
                <thead>
                <tr>
                  
                  <td>Código</td>
                  <td>Nome</td>
                  <td>Quantidade</td>
                  <td>valor</td>
                  <td>&nbsp;</td>
                </tr>
                </thead>
                <tbody>
                {products.map((amendoim, idx) => {
                  return (
                <tr key={idx}>
                  <td>0{amendoim.id}</td>
                  <td>{amendoim.name}</td>
                  <td>{amendoim.quantity}</td>
                  <td>R${amendoim.price}</td>
                  <td><button onClick={() => addToCart(products)}>Add</button></td>
                </tr>
                )})}
                </tbody>
              </table>
              </>
  )

  console.log(cart)

  const renderCart = () => (
    <>
    <h1>Cart</h1>
              <table>
                <thead>
                <tr>
                  
                  <td>Código</td>
                  <td>Nome</td>
                  <td>Quantidade</td>
                  <td>valor</td>
                  <td>&nbsp;</td>
                </tr>
                </thead>
                <tbody>
                {cart.map((amendoim, idx) => {
                  return (
                <tr key={idx}>
                  <td>0{amendoim.id}</td>
                  <td>{amendoim.name}</td>
                  <td>{amendoim.quantity}</td>
                  <td>R${amendoim.price}</td>
                  {/* <td><button onClick={() => addToCart(products)}>Add</button></td> */}
                </tr>
                )})}
                </tbody>
              </table>
              </>

)



  // const productsFiltered = useMemo(() => {
  //   const lowerBusca = products.toString().toLowerCase();
  //   return products
  //   .filter((list) => list.toString().toLowerCase().includes(lowerBusca));
  // }, [busca, products])

  return (
    <div className={styles.catalog}>
      <div className={styles.mainContainer}>
        <div className={styles.sectionTitle}>Controlar Estoque</div>
        <div className={styles.search}>
          <div className={styles.searchTitle}>Localizar produto</div>
          <div className={styles.searchInputButtons}>
            <input
              type="text"
              placeholder="Digite a informação do produto que deseja localizar"
            />
            <button
              className={styles.buttonSearch}
              onClick={() => navigateTo(PAGE_CART)}
            >
              Go to cart ({cart.length})
            </button>
            <button
              onClick={() => navigateTo(PAGE_PRODUCTS)}
              className={styles.buttonImport}
            >
              View Products
            </button>
          </div>
        </div>
        <div className={styles.search}>
          <div className={styles.newProduct}>
            <div>
              <p>Produtos Disponiveis no site</p>
            </div>
          </div>
          <div>
            {page === PAGE_PRODUCTS && renderProducts()}              
            {page === PAGE_CART && renderCart()}              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
