import { useState, useEffect } from "react";
import styles from "./Cart.module.css";

function CartItem({ item, quantity, handleTotal }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${item}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [item]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  const price = (Math.round(data.price * 100) / 100).toFixed(2);

  const addOne = () => {
    quantity += 1;
    localStorage.setItem(data.id, JSON.stringify({ quantity, price }));
    handleTotal(1);
  };

  const minusOne = () => {
    quantity -= 1;
    localStorage.setItem(data.id, JSON.stringify({ quantity, price }));
    handleTotal(-1);
  };

  return (
    <div className={styles.itemWrapper}>
      <img className={styles.productImage} src={data.image}></img>
      <div className={styles.infoWrapper}>
        <p className={styles.itemName}>{data.title}</p>
        <div className={styles.overallQtyWrapper}>
          <div className={styles.quantityWrapper}>
            <button className={styles.qtyBtn} onClick={minusOne}>
              -
            </button>
            <p>{quantity}</p>
            <button className={styles.qtyBtn} onClick={addOne}>
              +
            </button>
          </div>
        </div>
        <p>${price}</p>
      </div>
    </div>
  );
}

export { CartItem };
