import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './PropertyInfo.module.css';

const PropertyInfo = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/admin/get-property?propertyId=${propertyId}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
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
  }, [propertyId]);
  return (
    <Fragment>
      {!isLoaded && <p>Loading......</p>}
      {isLoaded && (
        <Fragment>
          <h1 className={styles.title}>{property.name}</h1>
          <img
            className={styles.image}
            alt="hotel"
            src={`http://localhost:8080/${property.picture}`}
          ></img>
          <hr className={styles.line}></hr>
        </Fragment>
      )}
    </Fragment>
  );
};

export default PropertyInfo;
