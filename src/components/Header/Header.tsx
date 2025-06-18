import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>H&B Clone</h1>
      <Image src="" alt="Holland and Barrett" />
    </header>
  );
}
