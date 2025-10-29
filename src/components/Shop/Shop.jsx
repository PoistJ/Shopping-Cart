import { Card } from "./Card";
import styles from './Shop.module.css';

export default function Shop() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div className={styles.cardContainer}>
      {items.map((item) => {
        return <Card key={item} cardID={item} />;
      })}
    </div>
  );
}
