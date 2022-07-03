import styles from './HotelsContainer.module.css';
import HotelCard from './HotelCard';

const HotelsContainer = (props) => {
  return (
    <div className={styles.container}>
        {!props.properties && null}
        {props.properties && props.properties.filter((property)=>property.type===props.type).map((property) => {
          return (
            <HotelCard
              key={property.id}
              id={property.id}
              imgSrc={`http://localhost:8080/${property.picture}`}
              name={property.name}
              city={property.city}
            />
          );
        })}
    </div>
  );
}

export default HotelsContainer;