import { firebaseSignOut, useProfile } from "../../utilities/firebaseUtils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../utilities/temp.json";
import PurpleBookButtomNav from "../PurpleBookButtomNav/PurpleBookButtomNav";
import "./PurpleBookMainPage.less";

const PurpleBookMainPage = ({ setIsUserLoggedIn }) => {
  const navigate = useNavigate();

  const [user, isAdmin] = useProfile();
  console.log(user);
  console.log(isAdmin);

  const handleFirebaseLogout = () => {
    setIsUserLoggedIn(false);
    firebaseSignOut();
  };

  return (
    <div className="main-page">
      <div className="main-page-header">
        <p className="main-page-title"> <span className="purple">Purple</span>Book</p>
        <p className="main-page-slogan">
          Book Your Next Court With PurpleBook !
        </p>
      </div>
      <div className="main-page-content">

        
      </div>
      <button onClick={handleFirebaseLogout}>Sign Out</button>
      <PurpleBookButtomNav />
    </div>
  );
};

export default PurpleBookMainPage;
