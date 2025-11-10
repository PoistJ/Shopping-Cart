import { useState, useEffect } from "react";
import styles from "./Card.module.css";

function Card({ cardID, handleTotal }) {
  const initialValue = JSON.parse(localStorage.getItem(cardID));
  const [quantity, setQuantity] = useState(
    initialValue === null ? 0 : initialValue.quantity
  );
  const [qtyChange, setQtyChange] = useState(0);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${cardID}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [cardID]);

  if (loading) return <p aria-label="loading">Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  const price = (Math.round(data.price * 100) / 100).toFixed(2);

  const handleChange = (e) => {
    const inputValue = Number(e.target.value);
    setQuantity(inputValue);
    setQtyChange(inputValue - initialValue);
  };

  const addOne = () => {
    setQuantity(quantity + 1);
    setQtyChange(qtyChange + 1);
  };

  const minusOne = () => {
    setQuantity(quantity - 1);
    setQtyChange(qtyChange - 1);
  };

  const addToCart = () => {
    handleTotal(qtyChange);
    localStorage.setItem(data.id, JSON.stringify({ quantity, price }));
    setQtyChange(0);
  };

  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={data.image}></img>
      <div className={styles.infoWrapper}>
        <p className={styles.itemTitle}>{data.title}</p>
        <p>${price}</p>
        <div className={styles.quantityWrapper}>
          <button className={styles.qtyBtn} onClick={minusOne}>
            -
          </button>
          <input
            id={cardID}
            className={styles.input}
            value={quantity}
            onChange={handleChange}
          ></input>
          <button className={styles.qtyBtn} onClick={addOne}>
            +
          </button>
          <button className={styles.addToCart} onClick={addToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export { Card };
