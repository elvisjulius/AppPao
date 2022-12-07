import React, { useEffect, useState } from "react";
import api from "../services/api";
import styles from "../styles/components/Report.module.css";

function Report() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/request")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.error("ops! get deu ruim" + err);
      });
  }, []);

  console.log("Get", products);

  return (
    <div className={styles.report}>
      <div className={styles.mainContainer}>
        <div className={styles.sectionTitle}></div>

        <div className={styles.newProduct}>
          <div>
            <h2>Lista de pedidos</h2>
          </div>
        </div>

        <div className={styles.selector}>
          {products.map((laranja) => (
            <label for="happy-radio" class={styles.happyCard}>
              <h1>Pedido nº {laranja.id}</h1>
              <ul>
                {laranja.request.map((limao) => (
                  <>
                    <li>Item: {limao.name}</li>
                    <li>Quantidade: {limao.quantity}</li>
                    <li>Preço: {limao.price}</li>
                    <li>-</li>
                  </>
                ))}
              </ul>

              <p>Total R${laranja.totalPrice}</p>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Report;
