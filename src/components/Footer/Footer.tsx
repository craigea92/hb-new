// src/components/Footer/Footer.tsx
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Your H&B Clone</p>
    </footer>
  );
}
