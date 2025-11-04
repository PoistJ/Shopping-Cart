import { useState, useEffect } from "react";
import styles from "./Card.module.css";

function Card({ cardID, handleTotal }) {
  const initialValue = JSON.parse(localStorage.getItem(cardID));
  const [quantity, setQuantity] = useState(
    initialValue == null ? 0 : initialValue
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

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
    localStorage.setItem(data.id, JSON.stringify(quantity));
    setQtyChange(0);
  };

  const price = (Math.round(data.price * 100) / 100).toFixed(2);

  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={data.image}></img>
      <p>{data.title}</p>
      <p>${price}</p>
      <div>
        <button onClick={minusOne}>-</button>
        <input
          className={styles.input}
          value={quantity}
          onChange={handleChange}
        ></input>
        <button onClick={addOne}>+</button>
        <button onClick={addToCart}>Add To Cart</button>
      </div>
    </div>
  );
}

export { Card };
