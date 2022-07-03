// import { useDispatch } from "react-redux";
// import { centralActions } from "../../store/centralSlice";
import Forms from "../ui/Forms";
import styles from "./AddProperty.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AddProperty = (props) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // dispatch(centralActions.flipCentralState());

  const [property, setProperty] = useState({
    name:''
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if(props.edit) {
    fetch(
      `http://localhost:8080/admin/get-property?propertyId=${props.propertyId}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setProperty(resData);
        setIsLoaded(true);
      })
      .catch((err) => {
        setIsLoaded(false);
        console.log(err);
      });
    }
    else {
      setIsLoaded(true);
    }
  }, [props]);

  const sendPropertyHandler = (evt) => {
    evt.preventDefault();
    const name = evt.target.name.value;
    const city = evt.target.city.value;
    const address = evt.target.address.value;
    const rate = evt.target.rate.value;
    const picture = evt.target.picture.files[0];
    const contact = evt.target.contact.value;
    const type = evt.target.type.value;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("city", city);
    formData.append("address", address);
    formData.append("rate", rate);
    formData.append("picture", picture);
    formData.append("contact", contact);
    formData.append("type", type);
    fetch(
      `${
        props.edit
          ? "http://localhost:8080/admin/edit-properties/" + props.propertyId
          : "http://localhost:8080/admin/add-property"
      }`,
      {
        method: "post",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: formData,
      }
    )
      .then((res) => {
        return navigate("/admin/properties", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Forms>
      {!isLoaded && <p>Loading....</p>}
      {isLoaded && console.log(property,isLoaded)}
      { <form onSubmit={sendPropertyHandler} encType="multipart/form-data">
        <h1>{props.edit ? "Edit Property" : "Add Your Property"}</h1>
        <hr></hr>
        <label htmlFor="name">Property Name</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={property.name || ""}
        ></input>
        <label htmlFor="type">Property Type</label>
        <div className={styles.options}>
          <select id="type" name="type">
            <option
              value="hotel"
              selected={property.type === "hotel" ? true : false}
            >
              Hotel
            </option>
            <option
              value="resort"
              selected={property.type === "resort" ? true : false}
            >
              Resort
            </option>
            <option
              value="homestay"
              selected={property.type === "homestay" ? true : false}
            >
              HomeStay
            </option>
          </select>
        </div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          defaultValue={property.city || ""}
        ></input>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          defaultValue={property.address || ""}
        ></input>
        <label htmlFor="rate">Per Night Rate</label>
        <input
          type="number"
          id="rate"
          step={0.01}
          name="rate"
          defaultValue={property.rate || ""}
        ></input>
        <label htmlFor="picture">Picture</label>
        <input
          className={styles.picture}
          type="file"
          accept="image/*"
          id="picture"
          name="picture"
        ></input>
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          id="contact"
          name="contact"
          defaultValue={property.contact || ""}
        ></input>
        <button className={styles.addBtn}>{props.edit ? "Save" : "Add"}</button>
      </form>}
    </Forms>
  );
};

export default AddProperty;
