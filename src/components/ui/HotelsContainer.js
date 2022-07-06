import styles from './HotelsContainer.module.css';
import HotelCard from './HotelCard';
import { Fragment } from 'react';

const HotelsContainer = (props) => {


  const citySortData = props.properties.map(property => {
    return (
      <HotelCard
        key={property.id}
        id={property.id}
        imgSrc={`http://localhost:8080/${property.picture}`}
        name={property.name}
        city={property.city}
      />
    );
  });

  const typeSortData = props.properties.filter((property)=>property.type===props.type).map((property) => {
    return (
      <HotelCard
        key={property.id}
        id={property.id}
        imgSrc={`http://localhost:8080/${property.picture}`}
        name={property.name}
        city={property.city}
      />
    );
  })

  return (
    <div className={styles.container}>
        {!props.properties && null}
        {props.properties && <Fragment>{props.sort ? citySortData : typeSortData}</Fragment> }
        
    </div>
  );
}

export default HotelsContainer;