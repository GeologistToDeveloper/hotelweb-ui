import { Fragment } from "react";
import { useSelector } from "react-redux";
import CustomerNavBar from "./CustomerNavBar";
import OwnerNavBar from "./OwnerNavBar";

const NavBar = () => {
  const centralState = useSelector((state) => state.central.ownerNav);


  return (
    <Fragment> 
      {centralState ? <OwnerNavBar /> : <CustomerNavBar />}
      </Fragment>
  );
};

export default NavBar;
