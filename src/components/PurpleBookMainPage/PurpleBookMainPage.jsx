import { firebaseSignOut, useProfile } from "../../utilities/firebaseUtils";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import data from "../../utilities/temp.json";
import UserProfile from "../PurpleBookUserProfile/UserProfile";
import "./PurpleBookMainPage.less";
import { Button } from "react-bootstrap";

const PurpleBookMainPage = ({ setIsUserLoggedIn }) => {
  const handleFirebaseLogout = () => {
    setIsUserLoggedIn(false);
    firebaseSignOut();
  };

  const [user, isAdmin] = useProfile();
  console.log(user);
  console.log(isAdmin);

  const [selectedSport, setSelectedSport] = useState("basketball");
  const [selectedCourt, setSelectedCourt] = useState();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/place/${selectedCourt}`, {
      state: data.sport[selectedSport][selectedCourt],
    });
  };

  const handleSelectSport = (eventKey, event) => {
    setSelectedSport(eventKey);
  };

  const handleSelectCourt = (eventKey, event) => {
    setSelectedCourt(eventKey);
  };
  return (
    <div>
      <div className="topBanner"><Link to="../profile"><button>Profile</button></Link></div>
      <h1>You have selected: {selectedSport}</h1>
      <Dropdown onSelect={handleSelectSport}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Choose a sport
        </Dropdown.Toggle>

        <Dropdown.Menu className="my-dropdown-menu">
          <Dropdown.Item eventKey="basketball">basketball</Dropdown.Item>
          <Dropdown.Item eventKey="tennis">tennis</Dropdown.Item>
          <Dropdown.Item eventKey="badminton">badminton</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown onSelect={handleSelectCourt}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Choose a {selectedSport} court
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropbar-menu">
          {Object.entries(data.sport[selectedSport]).map(([key, sportInfo]) => (
            <Dropdown.Item eventKey={key} key={key}>
              {key}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {selectedCourt === undefined ? (
        <p>please select a court</p>
      ) : (
        <button onClick={handleButtonClick}>Go to selected court</button>
      )}

      <button onClick={handleFirebaseLogout}>Sign Out</button>
    </div>
  );
};

export default PurpleBookMainPage;
