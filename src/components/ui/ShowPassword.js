import styles from "./ShowPassword.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showPasswordActions } from "../../store/showPasswordSlice";
import { AiOutlineEye, AiFillEye } from "react-icons/ai";

const showPasswordStyles = { height: "1.5rem", width: "1.5rem" };

const ShowPassword = () => {
  const dispatch = useDispatch();
  const passwordState = useSelector(state => state.showPassword);

  const showPasswordHandler = (evt) => {
    evt.preventDefault();
    dispatch(showPasswordActions.flipPasswordState());
    if (passwordState) {
        document.getElementById("password").type = "text";
        document.getElementById('confirmPassword').type = 'text';
      } else {
        document.getElementById("password").type = "password";
        document.getElementById('confirmPassword').type = 'password';
      }
  };

  return (
    <button onClick={showPasswordHandler} className={styles.showPassword}>
      {passwordState ? (
        <AiOutlineEye style={showPasswordStyles} />
      ) : (
        <AiFillEye style={showPasswordStyles} />
      )}
    </button>
  );
};

export default ShowPassword;
