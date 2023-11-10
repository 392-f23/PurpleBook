import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuthState } from "../utilities/firebaseUtils";
import SplashScreen from "../components/SplashScreen/SplashScreen";
import PurpleBookMainPage from "../components/PurpleBookMainPage/PurpleBookMainPage";
import PurpleBookMap from "../components/PurpleBookMap/PurpleBookMap";
import UserProfile from "../components/PurpleBookUserProfile/UserProfile";
import ProtectedRoute from "./ProtectedRoute";
import BasicDateCalendar from "../components/Calendar/Calendar";

const RouteDispatcher = () => {
  const [user] = useAuthState();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(user != null);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isUserLoggedIn ? (
              <Navigate replace to="/home" />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={<SplashScreen setIsUserLoggedIn={setIsUserLoggedIn} />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute
              isUserLoggedIn={isUserLoggedIn}
              component={PurpleBookMainPage}
            />
          }
        />
        <Route
          path="/map"
          element={
            <ProtectedRoute
              isUserLoggedIn={isUserLoggedIn}
              component={PurpleBookMap}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              isUserLoggedIn={isUserLoggedIn}
              setIsUserLoggedIn={setIsUserLoggedIn}
              user = {user}
              component={UserProfile}
            />
          }
        />
        <Route path="/place/:courtId" element={<BasicDateCalendar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteDispatcher;
