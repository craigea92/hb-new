import Image from "next/image";
import styles from "./Header.module.css";
import { SearchBar } from "../SearchBar/SearchBar";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.logoContainer}>
          {/* Desktop Logo (hidden on mobile) */}
          <div className={styles.desktopLogo}>
            <Image
              src="/images/HBLogoDesktop.png"
              alt="Holland & Barrett"
              width={320}
              height={35}
              priority
            />
          </div>

          {/* Mobile Logo (hidden on desktop) */}
          <div className={styles.mobileLogo}>
            <Image
              src="/images/HBLogoMobile.png"
              alt="Holland & Barrett"
              width={68} // adjust as needed
              height={28}
              priority
            />
          </div>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.searchContainer}>
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
