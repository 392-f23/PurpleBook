import { firebaseSignOut, useProfile } from "../../utilities/firebaseUtils";

const PurpleBookMainPage = ({ setIsUserLoggedIn }) => {
  const handleFirebaseLogout = () => {
    setIsUserLoggedIn(false);
    firebaseSignOut();
  };
  
  const [user, isAdmin] = useProfile();
  console.log(user)
  console.log(isAdmin)

  return (
    <div className="main">
      <button onClick={handleFirebaseLogout}>CLick Me</button>
    </div>
  );
};

export default PurpleBookMainPage;
