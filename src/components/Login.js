import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { centralActions } from "../store/centralSlice";
import ShowPassword from "./ui/ShowPassword";
import Forms from "./ui/Forms";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState(true);

  const customerLoginHandler = () => {};

  const ownerLoginHandler = (evt) => {
    evt.preventDefault();
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    fetch("http://localhost:8080/admin/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (res.status === 401) {
          return alert("Invalid Credentials!");
        }
        return res.json().then((resData) => {
          localStorage.setItem("token", resData.token);
          localStorage.setItem("userId", resData.userId);
          dispatch(centralActions.flipCentralStateLogin());
          navigate("/admin/dashboard", { replace: true });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Forms>
      <form onSubmit={loginState ? customerLoginHandler : ownerLoginHandler}>
        <h1>
          {loginState ? "Login as a Customer" : "Login as a Property Owner"}
        </h1>
        <hr></hr>
        <label htmlFor="username">Username</label>
        <input type="text" id="username"></input>
        <label htmlFor="password">Password</label>
        <div>
          <input type="password" id="password"></input>
          <ShowPassword />
        </div>

        <button className={loginState ? styles.loginBtn : styles.ownBtn}>
          Login
        </button>
        
          {loginState ? (
            <h2>
              Don't have an account yet?{" "}
              <Link replace to="/signup">
                Signup
              </Link>
              , and explore tons of affordable properties!
            </h2>
          ) : (
            <h2>
              Don't have an account yet?{" "}
              <Link to="/admin/signup" replace>
                Signup
              </Link>
              , to list your properties on our platform!
            </h2>
          )}
        

        {loginState ? (
          <h2>
            Have some properties to list?
            
            <span onClick={() => setLoginState((prevState) => false)}>
              {" "}
              Login
            </span>{" "}
           
            as a Property Owner to start earning in less than a week.{" "}
          </h2>
        ) : (
          <h2>
            <span onClick={() => setLoginState((prevState) => true)}>
              Login{" "}
            </span>
            as a Customer.
          </h2>
        )}
      </form>
    </Forms>
  );
};

export default Login;
