import { useState, useEffect } from "react";
import styles from "./Card.module.css";

function Card({ cardID }) {
  const initialValue = JSON.parse(localStorage.getItem(cardID));
  const [value, setValue] = useState(initialValue == null ? 0 : initialValue);
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
    setValue(inputValue);
    localStorage.setItem(data.id, JSON.stringify(inputValue));
  };

  const addOne = () => {
    setValue(value + 1);
    localStorage.setItem(data.id, JSON.stringify(value + 1));
  };

  const minusOne = () => {
    setValue(value - 1);
    localStorage.setItem(data.id, JSON.stringify(value - 1));
  };

  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={data.image}></img>
      <p>{data.title}</p>
      <p>${data.price}</p>
      <div>
        <button onClick={minusOne}>-</button>
        <input
          className={styles.input}
          value={value}
          onChange={handleChange}
        ></input>
        <button onClick={addOne}>+</button>
      </div>
    </div>
  );
}

export { Card };
