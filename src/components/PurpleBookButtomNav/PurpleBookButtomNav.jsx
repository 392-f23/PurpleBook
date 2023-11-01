import { useNavigate, useLocation } from "react-router-dom";
import "./PurpleBookButtomNav.less";

const PurpleBookButtomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/home";

  const handleHomeClick = () => {
    if (!isHome) {
      navigate("/home");
    }
  };

  const handleMapClick = () => {};

  const handleUserProfileClick = () => {};

  return (
    <div className="bottom-nav">
      <div className="bottom-nav-home">
        <img
          className="bottom-nav-home-icon"
          src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imghome-1-svgrepo-com%20(1).svg"
          onClick={handleHomeClick}
        />
        <span className="bottom-nav-home-text" onClick={handleHomeClick}>
          Home
        </span>
      </div>
      <div className="bottom-nav-map">
        <img
          className="bottom-nav-map-icon"
          src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgmap-location-pin-svgrepo-com%20(1).svg"
          onClick={handleMapClick}
        />
        <span className="bottom-nav-map-text" onClick={handleMapClick}>
          Map
        </span>
      </div>
      <div className="bottom-nav-user">
        <img
          className="bottom-nav-user-icon"
          src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imguser-alt-1-svgrepo-com.svg"
          onClick={handleUserProfileClick}
        />
        <span className="bottom-nav-user-text" onClick={handleUserProfileClick}>
          User
        </span>
      </div>
    </div>
  );
};

export default PurpleBookButtomNav;
