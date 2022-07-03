import { Route, Routes } from "react-router-dom";
import Home from "../components/customer/Home";

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<div> Login</div>}></Route>
      <Route path="/profile" element={<div> Profile</div>}>Profile</Route>
      <Route path="/orders">Orders</Route>
      <Route path="/booking">Booking</Route>
      <Route path="/property/:propertyId">Properties</Route>
    </Routes>
  );
};

export default CustomerRoutes;
