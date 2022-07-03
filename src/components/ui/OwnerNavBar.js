import styles from './OwnerNavBar.module.css';
import { NavLink } from 'react-router-dom';
import LoginButton from './LoginButton';

const OwnerNavBar = () => {
  return (
    <ul className={styles.navbar}>
      <NavLink
        to="/admin/dashboard"
        replace
        className={(navData) =>
          navData.isActive ? `${styles.active} ${styles.link}` : styles.link
        }
      >
        <li>Dashboard</li>
      </NavLink>
      <NavLink
        to="/admin/properties"
        replace
        className={(navData) =>
          navData.isActive ? `${styles.active} ${styles.link}` : styles.link
        }
      >
        <li>Properties</li>
      </NavLink>
      <NavLink
        to="/admin/profile"
        replace
        className={(navData) =>
          navData.isActive ? `${styles.active} ${styles.link}` : styles.link
        }
      >
        <li>Profile</li>
      </NavLink>
      <LoginButton owner></LoginButton>
    </ul>
  );
}

export default OwnerNavBar;