import {Link } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { centralActions } from '../../store/centralSlice';

import styles from './Dashboard.module.css';
import { Fragment } from "react";


const Dashboard = () => {
  // const dispatch = useDispatch();
//  dispatch(centralActions.flipCentralState());
  return (
    <Fragment>
      <h1 className={styles.heading}>Performance at a Glance</h1>
      <div className={styles.dashboard}>
      <div className={styles.dashboardItems}>Total Revenue
        <h1>Revenue from Hotels</h1>
        <h1>Revenue from Resorts</h1>
        <h1>Revenue from Homestays</h1>
      </div>
      <div  className={styles.dashboardItems}>Total Bookings
      <h1>Bookings in Hotels</h1>
        <h1>Bookings in Resorts</h1>
        <h1>Bookings in Homestays</h1>
      </div>
      <div className={styles.dashboardItems}>Total No. of Listed Properties
      <h1>No. of listed Hotels</h1>
        <h1>No. of listed Resorts</h1>
        <h1>No. of listed Homestays</h1>
      </div>
      <div  className={`${styles.dashboardItems} ${styles.dashboardButton}`}>
    <Link to='/admin/add-property' replace ><button className={styles.addPropertyBtn}>+ Add Properties</button></Link>
    </div>
    </div>
    </Fragment>
    
  );
}

export default Dashboard;