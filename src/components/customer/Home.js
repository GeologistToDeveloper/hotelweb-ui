import { Fragment } from "react";
import styles from './Home.module.css';

const Home = (props) => {
  
  return (
    <Fragment>
      <input className={styles.searchBar} placeholder="Search for a Property by Name or City" type='text'></input>
    </Fragment>
  );
}

export default Home;