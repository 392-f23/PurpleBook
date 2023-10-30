import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SplashScreen from "../components/SplashScreen/SplashScreen";
import PurpleBookMainPage from "../components/PurpleBookMainPage/PurpleBookMainPage";
import ProtectedRoute from "./ProtectedRoute";

import UserProfile from "../components/PurpleBookUserProfile/UserProfile";
import sampleData from '../components/PurpleBookUserProfile/UserProfileTest.json';

const RouteDispatcher = () => {
  const isUserLoggedIn = () => {
    return false;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isUserLoggedIn() ? (
              <Navigate replace to="/home" />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route path="/login" element={<SplashScreen />} />
        <Route
          path="/home"
          element={<ProtectedRoute component={PurpleBookMainPage} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteDispatcher;
