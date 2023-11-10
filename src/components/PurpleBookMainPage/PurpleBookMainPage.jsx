import PurpleBookHeader from "../PurpleBookHeader/PurpleBookHeader";
import PurpleBookButtomNav from "../PurpleBookButtomNav/PurpleBookButtomNav";
import SelectBar from "../SelectBar/SelectBar";
import { useDbData } from "../../utilities/firebaseUtils";
import { useEffect } from "react";
import "./PurpleBookMainPage.less";

const PurpleBookMainPage = () => {
  const [data, error] = useDbData("/");
  useEffect(() => {
    if (data) {
     console.log(data)
    }
    if (error) {
      console.error(error);
    }
  }, [data, error]);

  return (
    <div className="main-page">
      <PurpleBookHeader />
      <div className="main-page-content">
        <SelectBar />
      </div>
      <PurpleBookButtomNav />
    </div>
  );
};

export default PurpleBookMainPage;
