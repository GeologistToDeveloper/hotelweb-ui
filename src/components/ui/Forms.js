import styles from './Forms.module.css';

const Forms = (props) => {
  return (
    <div className={styles.backdrop}>
        <div className={styles.forms}>
            {props.children}
        </div>
    </div>
  );
}

export default Forms;