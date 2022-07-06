import { Fragment, useEffect, useState } from "react";
import styles from "./Home.module.css";
import HotelsContainer from "../ui/HotelsContainer";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [properties, setProperties] = useState([]);
  const [sortFilter, setSortFilter] = useState("city");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/is-logged-in", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("tokenC"),
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

    fetch("http://localhost:8080/properties")
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setProperties(resData);
        console.log(resData);
        setIsLoaded(true);
      })
      .catch((err) => {
        setIsLoaded(false);
        console.log(err);
      });
  }, []);

  const sortFilterHandler = (evt) => {
    if (evt.target.value === "city") {
      setSortFilter("city");
    } else {
      setSortFilter("type");
    }
  };

  

  const cities = properties.map((property)=>{return property.city});
  let citiesSet = new Set();
  cities.forEach((city) => {
    const lowercaseCity = city.toLowerCase();
    citiesSet.add(lowercaseCity);
  }); 
  let citiesSetArray = Array.from(citiesSet);
  const cityWiseData = citiesSetArray.map((city)=>{
    const cityWiseProperties = properties.filter((property)=>property.city.toLowerCase()===city);
    return (
      <Fragment>
      <h2>Properties in {city}</h2>
      <HotelsContainer properties={cityWiseProperties} sort />
      </Fragment>
    );
  })

  return (
    <div className={styles.main}>
      <div className={styles.search}>
        <input
          className={styles.searchBar}
          placeholder="Search for a Property by Name or City"
          type="text"
        ></input>
        <div className={styles.searchFilter}>
          <span>Show Properties By:</span>
          <label htmlFor="city">City</label>
          <input
            onClick={sortFilterHandler}
            name="filter"
            type="radio"
            id="city"
            value="city"
            defaultChecked
          ></input>
          <label htmlFor="type">Property Type</label>
          <input
            onClick={sortFilterHandler}
            name="filter"
            type="radio"
            id="type"
            value="type"
          ></input>
        </div>
      </div>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : (
        <div>
          {sortFilter === 'city' ? (
            cityWiseData
          ) : (
            <div className={styles.properties}>
              <h2>Your Hotels</h2>
              <HotelsContainer properties={properties} type="hotel" />
              <h2>Your Resorts</h2>
              <HotelsContainer properties={properties} type="resort" />
              <h2>Your Homestays</h2>
              <HotelsContainer properties={properties} type="homestay" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
