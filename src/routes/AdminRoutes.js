
import { Route, Routes } from "react-router-dom";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/*">
        <Route path="home" >
          Admin Home
        </Route>
        <Route path="properties/:propertyId" >
          Properties
        </Route>
        <Route path="edit-properties/:propertyId" >
          Edit Properties
        </Route>
        <Route path="profile" >
          Admin Profile
        </Route>
      </Route>
      </Routes>
  );
};

export default AdminRoutes;
