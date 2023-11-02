import { firebaseSignOut, useProfile } from "../../utilities/firebaseUtils";
import PurpleBookButtomNav from "../PurpleBookButtomNav/PurpleBookButtomNav";
import data from "../../utilities/temp.json";
import "./PurpleBookMainPage.less";

const PurpleBookMainPage = ({ setIsUserLoggedIn }) => {
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
