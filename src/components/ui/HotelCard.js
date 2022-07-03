import styles from "./HotelCard.module.css";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import {MdDeleteOutline} from 'react-icons/md';


const HotelCard = (props) => {
    

    const deletePropertyHandler = (evt) => {
        evt.preventDefault();
        fetch(`http://localhost:8080/admin/delete-property/${props.id}`, {
            method: 'delete',
            headers: {
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => {
            window.location.reload(false);
        })
        .catch(err => {
            console.log(err);
        });
    }

  return (
    <div className={styles.card}>
        <Link to={`/admin/edit-properties/${props.id}`}>
      <button title="Edit" className={styles.editBtn} id={props.id}>
        <BiEditAlt style={{ width: "2rem", height: "2.2rem" }} />
      </button>
      </Link>
      <Link to={`/admin/properties/${props.id}`}>
        <button title="Info"  className={styles.infoBtn}  id={props.id}>
          <AiOutlineInfoCircle style={{ width: "3rem", height: "3.2rem" }} />
        </button>
      </Link>
      
        <button title="Delete" onClick={deletePropertyHandler} className={styles.deleteBtn}  id={props.id}>
          <MdDeleteOutline style={{ width: "3rem", height: "3.2rem" }} />
        </button>
     
      <img  src={props.imgSrc} alt={`hotel`}></img>
      <h2>{props.name}</h2>
      <h3>{props.city}</h3>
    </div>
  );
};

export default HotelCard;
