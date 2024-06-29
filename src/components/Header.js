import {
  BsJustify,
  BsSearch,
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
} from "react-icons/bs";
import styles from "../styles/header.module.css";

function Header({ toggleSidebar }) {
  return (
    <div className={styles.header}>
      <div className={styles["menu-icon"]}>
        <BsJustify className={styles.icon} onClick={toggleSidebar} />
      </div>
      <div className={styles.left}>
        <BsSearch className={styles.icon} />
      </div>
      <div className={styles.right}>
        <BsFillBellFill className={styles.icon} />
        <BsFillEnvelopeFill className={styles.icon} />
        <BsPersonCircle className={styles.icon} />
      </div>
    </div>
  );
}

export default Header;
