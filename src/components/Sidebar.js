import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "../styles/sidebar.module.css";

function Sidebar({ sidebarToggle, toggleSidebar }) {
  return (
    <div
      className={`${styles.sidebar} ${
        sidebarToggle && styles["sidebar-responsive"]
      }`}
    >
      <div className={styles["sidebar-title"]}>
        <div className={styles["sidebar-brand"]}>
          <Link to="/">
            <BsCart3 className={`${styles.icon} ${styles["header-icon"]}`} />
            STORE
          </Link>
        </div>
        <span
          className={`${styles.icon} ${styles["close-icon"]}`}
          onClick={toggleSidebar}
        >
          X
        </span>
      </div>
      <ul className={styles["sidebar-list"]}>
        <Link to="/">
          <li className={styles["sidebar-list-item"]}>
            <BsGrid1X2Fill className={styles.icon} />
            Dashboard
          </li>
        </Link>
        <Link to="products">
          <li className={styles["sidebar-list-item"]}>
            <BsFillArchiveFill className={styles.icon} />
            Products
          </li>
        </Link>
        <Link to="categories">
          <li className={styles["sidebar-list-item"]}>
            <BsFillGrid3X3GapFill className={styles.icon} />
            Categories
          </li>
        </Link>
        <Link to="customers">
          <li className={styles["sidebar-list-item"]}>
            <BsPeopleFill className={styles.icon} />
            Customers
          </li>
        </Link>
        <Link to="inventory">
          <li className={styles["sidebar-list-item"]}>
            <BsListCheck className={styles.icon} />
            Inventory
          </li>
        </Link>
        <Link to="reports">
          <li className={styles["sidebar-list-item"]}>
            <BsMenuButtonWideFill className={styles.icon} />
            Reports
          </li>
        </Link>
        <Link to="settings">
          <li className={styles["sidebar-list-item"]}>
            <BsFillGearFill className={styles.icon} />
            Settings
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
