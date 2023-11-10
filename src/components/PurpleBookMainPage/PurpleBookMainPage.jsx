import { firebaseSignOut } from "../../utilities/firebaseUtils";
import PurpleBookHeader from "../PurpleBookHeader/PurpleBookHeader";
import PurpleBookButtomNav from "../PurpleBookButtomNav/PurpleBookButtomNav";
import SelectBar from "../SelectBar/SelectBar";
import { useDbData } from "../../utilities/firebaseUtils";
import { useEffect } from "react";
import "./PurpleBookMainPage.less";

const PurpleBookMainPage = ({ setIsUserLoggedIn }) => {
  const [data, error] = useDbData("/");
  useEffect(() => {
    if (data) {
     console.log(data)
    }
    if (error) {
      console.error(error);
    }
  }, [data, error]);
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
