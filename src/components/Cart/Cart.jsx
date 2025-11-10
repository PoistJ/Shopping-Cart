import { useOutletContext } from "react-router";
import styles from "./Cart.module.css";
import { CartItem } from "./CartItem";

export default function Cart() {
  const cartData = [];
  const [total, setTotal] = useOutletContext();
  const handleTotal = (value) => {
    setTotal(total + value);
  };
  let delivery = 0;
  let itemQuantity = 0;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    if (value.quantity !== 0) {
      cartData.push({ key: key, value: value });
      itemQuantity += value.quantity;
    }
  }

  const getSubtotal = () => {
    let sum = 0;

    for (let i = 0; i < cartData.length; i++) {
      sum =
        sum +
        Number(cartData[i].value.price) * Number(cartData[i].value.quantity);
    }

    return (Math.round(sum * 100) / 100).toFixed(2);
  };

  const subtotal = getSubtotal();

  if (subtotal < 75) {
    delivery = 5.75;
  }

  const grandTotal = Number(subtotal) + Number(delivery);

  return (
    <div data-testid="cartPage" className={styles.cartPage}>
      <p className={styles.cartHeader}>CART</p>
      <p className={styles.itemTotal}>{itemQuantity} Items</p>
      <div className={styles.cartWrapper}>
        <div className={styles.cartItems}>
          {cartData.map((item) => {
            return (
              <div key={item.key}>
                <hr className={styles.lineBreak}></hr>
                <CartItem
                  key={item.key}
                  item={item.key}
                  quantity={item.value.quantity}
                  handleTotal={handleTotal}
                />
              </div>
            );
          })}
        </div>

        <div className={styles.costWrapper}>
          <div className={styles.subtotalWrapper}>
            <p>SUBTOTAL</p>
            <p>${subtotal}</p>
          </div>
          <div className={styles.deliveryWrapper}>
            <p>EST. DELIVERY FEE</p>
            <p>${delivery}</p>
          </div>
          <hr className={styles.lineBreak}></hr>
          <div className={styles.totalWrapper}>
            <p>TOTAL</p>
            <p>${grandTotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
