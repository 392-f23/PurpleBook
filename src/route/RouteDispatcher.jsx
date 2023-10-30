import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuthState } from "../utilities/firebaseUtils";
import SplashScreen from "../components/SplashScreen/SplashScreen";
import PurpleBookMainPage from "../components/PurpleBookMainPage/PurpleBookMainPage";
import CourtPage from "../components/CourtPage/CourtPage";
import ProtectedRoute from "./ProtectedRoute";

import UserProfile from "../components/PurpleBookUserProfile/UserProfile";
import sampleData from '../components/PurpleBookUserProfile/UserProfileTest.json';

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
              setIsUserLoggedIn={setIsUserLoggedIn}
              component={PurpleBookMainPage}
            />
          }
        />
        <Route path="/place/:courtId" element={<CourtPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteDispatcher;
