import backgroundImg from "./pexels-bohlemedia-1884584.jpg";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <p className={styles.storeName}>CTRL+FIT</p>
        <img className={styles.img} src={backgroundImg} />
        <p className={styles.subtext}>Your style. Your command. CTRL+FIT.</p>
      </div>
    </>
  );
}
