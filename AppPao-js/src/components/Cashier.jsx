import React, { useEffect, useState } from "react";
import api from "../services/api";
import styles from "../styles/components/Cashier.module.css";

function Cashier() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/product")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.error("ops! get deu ruim" + err);
      });
  }, []);

  // const handleAddProduct = () => {
  //   const newProducts = verifyExistItem();
  //   setNewProducts(newProducts);
  // };

  // useEffect(() => {}, [products]);

  // function verifyExistItem() {
  //   const existItem = products.some((product) => product.id === item.id);
  //   if (existItem) {
  //     const newCart = cart.map((product) => {
  //       return product.id === item.id
  //         ? { ...product, amount: product.amount + 1 }
  //         : product;
  //     });
  //     return newCart;
  //   } else {
  //     const newItem = { ...item, amount: 1 };
  //     const newCart = [...cart, newItem];
  //     return newCart;
  //   }
  // }

  return (
    <div className={styles.cashier}>
      <div className={styles.mainContainer}>
        <div className={styles.sectionTitle}>Caixa</div>
        <div className={styles.search}>
          <div className={styles.firstRow}>
            <div>
              <input type="text" placeholder="Nome do produto..." />
            </div>
            <div>
              <input type="text" placeholder="Valor..." />
            </div>
          </div>
          <div className={styles.secondRow}>
            <div>
              <div className={styles.input}>
                <input type="text" placeholder="Quantidade..." />
              </div>
              <div className={styles.input}>
                <input type="text" placeholder="Subtotal..." />
              </div>
            </div>
          </div>
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
              {products.map((amendoim) => {
                return (
                  <tr>
                    <td>0{amendoim.id}</td>
                    <td>{amendoim.name}</td>
                    <td>{amendoim.quantity}</td>
                    <td>R${amendoim.price}</td>
                    <td>
                      <button>Selecionar</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.cashierButtons}>
        <div className={styles.cashierButtonsFirst}>
          <button className={styles.registerRequestButton}>
            Registrar Pedido
          </button>
          <button className={styles.cancelButton}>Cancelar</button>
        </div>
        <button className={styles.registerSaleButton}>Registrar Venda</button>
      </div>
    </div>
  );
}

export default Cashier;
