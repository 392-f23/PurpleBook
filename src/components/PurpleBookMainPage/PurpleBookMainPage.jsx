import { firebaseSignOut } from "../../utilities/firebaseUtils";
import PurpleBookHeader from "../PurpleBookHeader/PurpleBookHeader";
import PurpleBookButtomNav from "../PurpleBookButtomNav/PurpleBookButtomNav";
import data from "../../utilities/temp.json";
import "./PurpleBookMainPage.less";
import CourtPage from "../CourtPage/CourtPage";
import SelectBar from "../SelectBar/SelectBar"

const PurpleBookMainPage = ({ setIsUserLoggedIn }) => {
  const handleFirebaseLogout = () => {
    setIsUserLoggedIn(false);
    firebaseSignOut();
  };
  

  return (
    <div className="main-page">
     <PurpleBookHeader />
      <div className="main-page-content">
        <SelectBar />
      </div>
      <button onClick={handleFirebaseLogout}>Sign Out</button>
      <PurpleBookButtomNav />
    </div>
  );
};

export default PurpleBookMainPage;
