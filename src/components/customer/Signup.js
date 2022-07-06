
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import { centralActions } from "../../store/centralSlice";

import Forms from "../ui/Forms";
import ShowPassword from "../ui/ShowPassword";



const Signup = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const customerSignupHandler = (evt) => {
    evt.preventDefault();
    const name = evt.target.name.value;
    const dob = evt.target.dob.value;
    const mail = evt.target.mail.value;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    const confirmPassword = evt.target.confirmPassword.value;
    fetch("http://localhost:8080/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        mail: mail,
        dob: dob,
        username: username,
        password: password,
        confirmPassword: confirmPassword,
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
        
      })
      .then(resData => {
        localStorage.setItem('userId',resData.userId);
        localStorage.setItem('tokenC',resData.token);
        navigate("/", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const ownerSignupHandler = (evt) => {
    evt.preventDefault();
    const name = evt.target.name.value;
    const mail = evt.target.mail.value;
    const dob = evt.target.dob.value;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    const confirmPassword = evt.target.confirmPassword.value;
    fetch("http://localhost:8080/admin/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        mail: mail,
        dob: dob,
        username: username,
        password: password,
        confirmPassword: confirmPassword,
      }),
    })
    .then(res => {
      return res.json();
    })
      .then((resData) => {
        console.log("owner");
        // evt.target.reset();
        localStorage.setItem('userId',resData.userId);
        localStorage.setItem('token',resData.token);
        dispatch(centralActions.flipCentralStateLogin());
        navigate("/admin/home", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    // <div className={styles.backdrop}>
    //   <div className={styles.signupForm}>
    <Forms>
        <form
          onSubmit={props.owner ? ownerSignupHandler : customerSignupHandler}
        >
          <h1>
            {props.owner ? "Registration (Owner)" : "Registration (Customer)"}
          </h1>
          <hr></hr>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name"></input>
          <label htmlFor="mail">E-mail</label>
          <input type="text" id="mail" name="mail"></input>
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob"></input>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username"></input>
          <label htmlFor="password">Password</label>
          <div>
          <input type="password" id="password"></input>
            <ShowPassword/>
          </div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div>
          <input type="password" id="confirmPassword"></input>
            <ShowPassword/>
          </div>
          <button
            className={props.owner ? styles.ownBtn : styles.btn}
            type="submit"
          >
            Signup
          </button>
        </form>
        </Forms>
    //   </div>
    // </div>
  );
};

export default Signup;
