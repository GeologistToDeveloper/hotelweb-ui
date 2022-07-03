import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./LoginButton.module.css";
import { centralActions } from "../../store/centralSlice";

const LoginButton = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:8080/admin/is-logged-in", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setIsLoggedIn(resData.isLoggedIn);
      })
      .catch((err) => {
        setIsLoggedIn(false);
        console.log(err);
      });
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    dispatch(centralActions.flipCentralStateLogout());
  }

  return (
    <Fragment>
      <button className={props.owner ? styles.ownBtn : styles.btn}>
        Login
      </button>
      {isLoggedIn ? (
        <NavLink to="/login" replace>
          <button onClick={logoutHandler} className={props.owner ? styles.ownBtn : styles.btn}>
            Logout
          </button>
        </NavLink>
      ) : (
        <NavLink to='/login' replace>
          <button className={props.owner ? styles.ownBtn : styles.btn}>
            Login
          </button>
        </NavLink>
      )}
    </Fragment>
  );
};

export default LoginButton;
