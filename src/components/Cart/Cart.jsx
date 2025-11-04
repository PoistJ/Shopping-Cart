import styles from "./Cart.module.css";
import { CartItem } from "./CartItem";

export default function Cart() {
  const cartData = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    if (value !== 0) {
      cartData.push({ key: key, value: value });
    }
  }

  return (
    <div className={styles.cartWrapper}>
      <div className={styles.cartItems}>
        <p>CART</p>
        {cartData.map((item) => {
          return (
            <CartItem
              key={item.key}
              item={item.key}
              quantity={item.value}
            />
          );
        })}
      </div>

      <div className={styles.totalWrapper}>
        <div className={styles.subtotalWrapper}>
          <p>SUBTOTAL</p>
        </div>
      </div>
    </div>
  );
}
