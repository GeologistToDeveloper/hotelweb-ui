import { NavLink } from "react-router-dom";
import styles from "./CustomerNavBar.module.css";
import LoginButton from "./LoginButton";

const CustomerNavBar = () => {
  return (
    <ul className={styles.navbar}>
      <NavLink
        to="/"
        className={(navData) =>
          navData.isActive ? `${styles.active} ${styles.link}` : styles.link
        }
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/bookings"
        className={(navData) =>
          navData.isActive ? `${styles.active} ${styles.link}` : styles.link
        }
      >
        <li>Bookings</li>
      </NavLink>
      <NavLink
        to="/profile"
        className={(navData) =>
          navData.isActive ? `${styles.active} ${styles.link}` : styles.link
        }
      >
        <li>Profile</li>
      </NavLink>
      <LoginButton/>
    </ul>
  );
};

export default CustomerNavBar;
