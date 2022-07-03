import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProperty from "../components/admin/AddProperty";
import Dashboard from "../components/admin/Dashboard";
import EditProperty from "../components/admin/EditProperty";
// import AdminHome from "../components/admin/Dashboard";
import Properties from "../components/admin/Properties";
import PropertyInfo from "../components/admin/PropertyInfo";
import Home from "../components/customer/Home";
import Signup from "../components/customer/Signup";
import Login from "../components/Login";

// const Properties = React.lazy(()=>import('../components/admin/Properties'));

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/profile" element={<div> Profile</div>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/bookings">Orders</Route>
      <Route path="/booking">Booking</Route>
      <Route path="/property/:propertyId">Properties</Route>
      <Route path="/admin/*">
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="add-property" element={<AddProperty />}></Route>
        <Route path="signup" element={<Signup owner />}></Route>
        <Route path="properties" element={<Properties/>}></Route>
        <Route path="properties/:propertyId" element={<PropertyInfo/>}></Route>
        <Route path="edit-properties/:propertyId"  element={<EditProperty/>}></Route>
        <Route path="profile">Admin Profile</Route>
      </Route>
    </Routes>
  );
};

export default AllRoutes;
