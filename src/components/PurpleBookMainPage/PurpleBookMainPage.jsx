import { firebaseSignOut } from "../../utilities/firebaseUtils";

const PurpleBookMainPage = ({ setIsUserLoggedIn }) => {
  const handleFirebaseLogout = () => {
    setIsUserLoggedIn(false);
    firebaseSignOut();
  };

  return (
    <div className="main">
      <button onClick={handleFirebaseLogout}>CLick Me</button>
    </div>
  );
};

export default PurpleBookMainPage;
