import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import PurpleBookMainPage from "./components/PurpleBookMainPage/PurpleBookMainPage";

const RouteDispatcher = () => {
  const isUserLoggedIn = () => false;
  
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
        <Route path="/home" element={<PurpleBookMainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteDispatcher;
