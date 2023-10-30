import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuthState } from "../utilities/firebaseUtils";
import SplashScreen from "../components/SplashScreen/SplashScreen";
import PurpleBookMainPage from "../components/PurpleBookMainPage/PurpleBookMainPage";
import ProtectedRoute from "./ProtectedRoute";

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
      </Routes>
    </BrowserRouter>
  );
};

export default RouteDispatcher;
