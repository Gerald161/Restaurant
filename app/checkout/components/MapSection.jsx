import styles from "./styles/discount_and_total.module.css";
import Places from './Places';

export default function MapSection() {
  return (
    <div className={styles.discount_and_total}>
      <div className={styles.discounts}>
          <p>Delivery Address</p>
      </div>
      <Places/>
    </div>
  )
}
