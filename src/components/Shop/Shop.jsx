import { useOutletContext } from "react-router";
import { Card } from "./Card";
import styles from "./Shop.module.css";

export default function Shop() {
  const items = [1, 2, 3, 4, 15, 16, 17, 18, 19, 20];

  const [total, setTotal] = useOutletContext();

  const handleTotal = (value) => {
    setTotal(total + value);
  };

  return (
    <div className={styles.cardContainer}>
      {items.map((item) => {
        return (
          <Card
            key={item}
            cardID={item}
            handleTotal={handleTotal}
            data-testid="cardElement"
          />
        );
      })}
    </div>
  );
}
