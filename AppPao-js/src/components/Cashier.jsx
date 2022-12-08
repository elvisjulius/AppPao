import React, { useEffect, useState } from "react";
import api from "../services/api";
import styles from "../styles/components/Cashier.module.css";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

const initialValues = [
  {
    id: 1,
    name: "mortadela",
    quantity: 78,
    price: 66.34,
  },
  {
    id: 2,
    name: "mussarela",
    quantity: 78,
    price: 66.34,
  },
];

const requestOrder = {
  request: [],
  totalPrice: 0.0,
};

function Cashier() {
  const [products, setProducts] = useState([]);
  const [busca, setBusca] = useState([]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("PAGE_PRODUCTS");
  const [request, setRequest] = useState();

  useEffect(() => {
    api
      .get("/product")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.error("ops! get deu ruim" + err);
      });
  }, []);

  const addToCart = (products) => {
    setCart([...cart, { ...products }]);
  };

  const removefromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const sendRequest = (cart) => {
    setRequest({
      request:[
        ...cart
      ],
      totalPrice: 0.0
      });
      alert('Pedido Registrado')
  }

  console.log("Cart", cart);

  const decreaseProduct = (products) => {
    const itemIndex = cart.findIndex((item) => item.id === products.id);

    if (cart[itemIndex].quantity > 1) {
      const newCart = cart;
      newCart[itemIndex].quantity -= 1;
      setCart(newCart)
    } else {
      const nextCartItems = cart.filter((item) => item.id !== products.id);
      console.log(nextCartItems);
    }
  };

  const increaseProduct = (products) => {
    const itemIndex = cart.findIndex((item) => item.id === products.id);

    console.log("itemIndex", products.id)

    if (itemIndex >= 0) {
      const newCart = cart;
      newCart[itemIndex] = {
        ...newCart[itemIndex],
        quantity: newCart[itemIndex].quantity + 1,
      };
      setCart(newCart)
    }
  };



  function onSubmit(ev){
    ev.preventDefault();

    api
      .post("/request", request)
      // .then((response) => console.log(response))
      .then((response) => alert('Pedido cadastrado com sucesso!') &&
      setRequest(response.data))
      .catch((err) => {
        console.error("ops! post deu ruim" + err);
      });
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
                <td>
                  <button className={styles.registerRequestButton} onClick={() => addToCart(amendoim)}>Add</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );

  const renderCart = () => (
    <>
      <h1>
        Carrinho
      </h1>

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
                <td> <button onClick={() => decreaseProduct(amendoim)}>-</button>
                    <button>{amendoim.quantity}</button>
                    <button onClick={() => increaseProduct(amendoim)}>+</button></td>
                <td>R${amendoim.price*amendoim.quantity}</td>
                <td>
                  <button className={styles.cancelButton} onClick={() => removefromCart(amendoim)}>
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );

  return (
    <div className={styles.cashier}>
      <div className={styles.mainContainer}>
        <div className={styles.search}>
          <div className={styles.firstRow}>
          
          </div>
          <div className={styles.secondRow}>
            <div>
             
              <button
                className={styles.registerRequestButton} 
                onClick={() => navigateTo(PAGE_CART)}
              >
                Meu carrinho ({cart.length})
              </button>
              <button
                onClick={() => navigateTo(PAGE_PRODUCTS)}
                className={styles.registerRequestButton} 
              >
                Lista de Produtos
              </button>
            </div>
          </div>
          {page === PAGE_PRODUCTS && renderProducts()}
          {page === PAGE_CART && renderCart()}
        </div>
      </div>
      <div className={styles.cashierButtons}>
          <button className={styles.registerRequestButton} onClick={() => sendRequest(cart)}>
            Registrar Pedido
          </button>
        <button className={styles.registerSaleButton} onClick={onSubmit}>Registrar Venda</button>
      </div>
    </div>
  );
}

export default Cashier;
