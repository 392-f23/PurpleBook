import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isUserLoggedIn, component: Component, ...rest }) => {
  // console.log("Is user logged in: " + isUserLoggedIn);
  return isUserLoggedIn ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
