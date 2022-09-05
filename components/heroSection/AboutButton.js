import styles from "./styles/AboutButton.module.css";
import Link from "next/link";

function Button() {
  return (
    <div className={styles.buttonDIV}>
      <span className={styles.bn62}>
        <Link href="/about">Know More about Me!</Link>
      </span>
    </div>
  );
}

export default Button;
