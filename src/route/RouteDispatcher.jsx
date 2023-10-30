import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SplashScreen from "../components/SplashScreen/SplashScreen";
import PurpleBookMainPage from "../components/PurpleBookMainPage/PurpleBookMainPage";
import CourtPage from "../components/CourtPage/CourtPage";
import ProtectedRoute from "./ProtectedRoute";

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
        <Route path="/login" element={<PurpleBookMainPage />} />
        <Route
          path="/home"
          element={<ProtectedRoute element={<PurpleBookMainPage />} />}
        />
        <Route path="/place/:courtId" element={<CourtPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteDispatcher;
