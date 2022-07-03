import { Fragment, useEffect, useState } from "react";
// import HotelCard from "../ui/HotelCard";
import HotelsContainer from "../ui/HotelsContainer";
import styles from "./Properties.module.css";

const Properties = () => {
  // const [properties, setProperties] = useState(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [properties, setProperties] = useState(null);

  //   let properties;
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    
    fetch(
      `http://localhost:8080/admin/properties/?userId=${localStorage.getItem(
        "userId"
      )}`,
      {
        method: "get",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setProperties(resData);
        setIsLoaded(true);
      })
      .catch((err) => {
        setIsLoaded(false);
        console.log(err);
      });
      return (
        () => {document.body.style.overflowX = "visible"}
      );
  }, []);
  return (
    // <Suspense fallback={<p>Loading......</p>}>
    <Fragment>
      {!isLoaded && <p>Loading......</p>}
      {isLoaded && (
        <div className={styles.properties}>
          <h2>Your Hotels</h2>
          <HotelsContainer properties={properties} type="hotel" />
          <h2>Your Resorts</h2>
          <HotelsContainer properties={properties} type="resort" />
          <h2>Your Homestays</h2>
          <HotelsContainer properties={properties} type="homestay" />
        </div>
      )}
    </Fragment>
    // </Suspense>
  );
};

export default Properties;
