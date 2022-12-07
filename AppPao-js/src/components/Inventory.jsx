import React, { useEffect, useState } from "react";
import styles from "../styles/components/Inventory.module.css";
import api from "../services/api";

function Inventory() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/product")
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
            <h2>Estoque</h2>
          </div>
        </div>

        <div className={styles.selector}>
          {products.map((laranja) => (
            <label for="happy-radio" class={styles.happyCard}>
              <h1>{laranja.name}</h1>
              <ul>
                    <li>Quantidade: {laranja.quantity}</li>
                    <li></li>
                    <li></li>
              </ul>

              <p>Total R${laranja.price}</p>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Inventory;
