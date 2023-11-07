import { useState, useEffect, useRef } from "react";
import PurpleBookButtomNav from "../PurpleBookButtomNav/PurpleBookButtomNav";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import mapData from "../../utilities/mapData.json";
import "./PurpleBookMap.less";

const basketballIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgbasketball.svg",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [35, 35],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const tennisIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgtennis.svg",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [35, 35],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const nuIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgicon.svg",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [35, 35],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const userIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img13123.svg",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [35, 35],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const LocationMarker = ({ setPosition }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const onLocationFound = (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    };

    const onLocationError = (e) => {
      console.error(e);
      alert("Location access denied or could not be found.");
    };

    map.on("locationfound", onLocationFound);
    map.on("locationerror", onLocationError);

    map.locate({ setView: true, maxZoom: 16, enableHighAccuracy: true });

    return () => {
      map.off("locationfound", onLocationFound);
    };
  }, [map, setPosition]);

  return null;
};

const RoutingMachine = ({ startLocation, destination, setRouteInfo }) => {
  const map = useMap();

  useEffect(() => {
    if (!startLocation || !destination) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(startLocation), L.latLng(destination)],
      lineOptions: {
        styles: [{ color: "#00b0ff", weight: 8, dashArray: "15, 15" }],
      },
      createMarker: function () {
        return null;
      },
      show: false,
      addWaypoints: false,
      routeWhileDragging: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: false,
    }).addTo(map);

    routingControl.on("routesfound", (e) => {
      const routes = e.routes;
      setRouteInfo(routes);
      if (routingControl._container) {
        routingControl._container.style.display = "none";
      }
    });

    return () => {
      map.removeControl(routingControl);
    };
  }, [map, startLocation, destination]);

  return null;
};

const PurpleBookMap = () => {
  const defaultLocation = [42.056602684890095, -87.6752777471743];
  const nuLocation = [42.05663455962621, -87.67518118493001];
  const mapRef = useRef(null);
  const [routeInfo, setRouteInfo] = useState(null);
  const [filter, setFilter] = useState("All");
  const [courts, setCourts] = useState([]);
  const [startLocation, setStartLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [myLocation, setMyLocation] = useState(null);
  const [useMyLocation, setUseMyLocation] = useState(false);
  const [triggerLocate, setTriggerLocate] = useState(false);
  const [useNULocation, setUseNULocation] = useState(false);

  console.log(routeInfo);

  const handleUseMyLocationChange = (e) => {
    setUseMyLocation(e.target.checked);
    if (e.target.checked) {
      setTriggerLocate(true);
    } else {
      setMyLocation(null);
      setTriggerLocate(false);
    }
  };

  const handleUseNULocationChange = (e) => {
    setUseNULocation(e.target.checked);
  };

  const handleRoute = (useLocation, start, end) => {
    if (!start || !end) return;
    if (!useLocation) {
      alert('You need to have "Use My Location" or "Use NU Location" enable.');
      return;
    }
    setStartLocation(start);
    setDestination(end);
  };

  useEffect(() => {
    const allCourts = [];
    if (filter === "All" || filter === "Basketball") {
      Object.values(mapData.Basketball).forEach((court) => {
        allCourts.push({
          ...court,
          type: "Basketball",
        });
      });
    }
    if (filter === "All" || filter === "Tennis") {
      Object.values(mapData.Tennis).forEach((court) => {
        allCourts.push({
          ...court,
          type: "Tennis",
        });
      });
    }
    setCourts(allCourts);
  }, [filter]);

  const renderRouteInfoTooltip = () => {
    if (!routeInfo) return null;
    const instructions = routeInfo[0]["instructions"];
    const totalDistance = routeInfo[0]["summary"]["totalDistance"];
    const totalTime = routeInfo[0]["summary"]["totalTime"];

    return (
      <div className="route-info-tooltip">
        <div className="route-info-tooltip-title">Route Information</div>
        <div className="route-info-tooltip-total-distance">
          Total Distance: {totalDistance} meters
        </div>
        <div className="route-info-tooltip-estimated-time">
          Driving Time: {totalTime} seconds
        </div>
        <div className="route-info-tooltip-instructions">
          Route Instructions
        </div>
        {instructions.map((instruction, index) => (
          <div key={index} className="route-info-tooltip-instruction">
            Step {index + 1}: {instruction.text}.
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="map-page">
      {renderRouteInfoTooltip()}
      <section className="map-container">
        {/* display sidebar */}
        <section className="map-container-sidebar">
          <div className="sidebar-title-container">
            <p className="sidebar-title">Find My Court</p>
          </div>
          <div className="sidebar-filter-container">
            <Accordion
              disableGutters
              defaultExpanded
              className="sidebar-accrodin"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Sport Type</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="sidebar-accrodin-checkbox-container">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filter === "All"}
                        onChange={() => setFilter("All")}
                      />
                    }
                    label="All"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filter === "Basketball"}
                        onChange={() => setFilter("Basketball")}
                      />
                    }
                    label="Basketball"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filter === "Tennis"}
                        onChange={() => setFilter("Tennis")}
                      />
                    }
                    label="Tennis"
                  />
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="sidebar-interaction-container">
            <FormControlLabel
              className="sidebar-interaction-my-location"
              value="start"
              control={
                <Switch
                  color="primary"
                  checked={useMyLocation}
                  onChange={handleUseMyLocationChange}
                />
              }
              label="Use My Location (Beta)"
              labelPlacement="start"
            />
            <FormControlLabel
              className="sidebar-interaction-my-location"
              value="start"
              control={
                <Switch
                  color="primary"
                  checked={useNULocation}
                  onChange={handleUseNULocationChange}
                />
              }
              label="Use NU Location"
              labelPlacement="start"
            />
          </div>
        </section>
        {/* display map */}
        <section className="map">
          <MapContainer
            center={myLocation || defaultLocation}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
            whenCreated={(map) => {
              mapRef.current = map;
            }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {courts.map((court, index) => (
              <Marker
                key={index}
                position={court.location}
                icon={court.type === "Basketball" ? basketballIcon : tennisIcon}
              >
                <Popup className="popup">
                  <section className="map-popup">
                    <img src={court.image} className="map-popup-image" />
                    <div className="map-popup-container">
                      <section className="map-popup-left-container">
                        <div className="map-popup-name">{court.name}</div>
                        <div className="map-popup-address">{court.address}</div>
                      </section>
                      <section className="map-popup-right-container">
                        <div
                          className="map-popup-navigation-user-container"
                          onClick={() =>
                            handleRoute(
                              useMyLocation,
                              myLocation,
                              court.location
                            )
                          }
                        >
                          <img
                            src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/imgdownload%20(4).svg"
                            className="map-popup-navigation-user"
                          />
                          <div className="map-popup-navigation-user-text">
                            USER
                          </div>
                        </div>
                        <div
                          className="map-popup-navigation-nu-container"
                          onClick={() =>
                            handleRoute(
                              useNULocation,
                              nuLocation,
                              court.location
                            )
                          }
                        >
                          <img
                            src="https://raw.githubusercontent.com/Hongda-OSU/PicGo-2.3.1/master/img1232.svg"
                            className="map-popup-navigation-nu"
                          />
                          <div className="map-popup-navigation-nu-text">NU</div>
                        </div>
                      </section>
                    </div>
                  </section>
                </Popup>
              </Marker>
            ))}
            {useMyLocation && triggerLocate && (
              <LocationMarker setPosition={setMyLocation} />
            )}
            {myLocation && (
              <Marker position={myLocation} icon={userIcon}>
                <Popup>You are here!</Popup>
              </Marker>
            )}
            {useNULocation && (
              <Marker position={nuLocation} icon={nuIcon}>
                <Popup>NU is here!</Popup>
              </Marker>
            )}
            {destination && (
              <RoutingMachine
                startLocation={startLocation}
                destination={destination}
                setRouteInfo={setRouteInfo}
              />
            )}
          </MapContainer>
        </section>
      </section>
      <PurpleBookButtomNav />
    </div>
  );
};

export default PurpleBookMap;
