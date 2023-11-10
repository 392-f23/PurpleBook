import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../../utilities/temp.json";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import "./SelectBar.less";

const SelectBar = () => {
  const [checkedInfo, setCheckedInfo] = useState({
    basketball: false,
    tennis: false,
    badminton: false,
  });

  const [selectedData, setSelectedData] = useState({});
  const [selectedCourts, setSelectedCourts] = useState({});
  const [allCourts, setAllCourts] = useState([]);

  useEffect(() => {
    const newAllCourts = Object.values(selectedData).flatMap((sportData) =>
      Object.entries(sportData).flatMap(([courtName, courtDetails]) => {
        if (courtDetails.available) {
          return { name: courtName, ...courtDetails };
        }
        return [];
      })
    );
    setAllCourts(newAllCourts);
  }, [selectedData]);

  // const handleCheckboxChange = (sport) => (event) => {
  //     setCheckedInfo(prevState => {
  //         const newState = {
  //             ...prevState,
  //             [sport]: event.target.checked
  //         };
  //         setSelectedData(prevSelectedData => {
  //             const newSelectedData = { ...prevSelectedData };
  //             if (event.target.checked) {
  //                 newSelectedData[sport] = data.sport[sport];
  //             } else {
  //                 delete newSelectedData[sport];
  //             }
  //             return newSelectedData;
  //         });
  //         return newState;
  //     });
  // };
  // this is to choose multiple sports

  const handleCheckboxChange = (sport) => (event) => {
    if (event.target.checked) {
      setCheckedInfo({
        basketball: false,
        tennis: false,
        badminton: false,
        [sport]: true,
      });
    } else {
      setCheckedInfo({
        ...checkedInfo,
        [sport]: false,
      });
    }
    setSelectedData(event.target.checked ? { [sport]: data.sport[sport] } : {});
  };

  // const handleCourtCheckboxChange = (courtName) => (event) => {
  //     setSelectedCourts(prevSelectedCourts => ({
  //         ...prevSelectedCourts,
  //         [courtName]: event.target.checked,
  //     }));
  // };
  // this is to choose multiple courts

  const handleCourtCheckboxChange = (courtName) => (event) => {
    if (event.target.checked) {
      setSelectedCourts({ [courtName]: true });
    } else {
      setSelectedCourts({ [courtName]: false });
    }
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    const selectedCourtName = Object.keys(selectedCourts).find(
      (courtName) => selectedCourts[courtName]
    );
    const selectedSport = Object.keys(selectedData).find(
      (sport) => selectedData[sport]
    );

    if (selectedCourtName && selectedSport) {
      navigate(`/place/${selectedCourtName}`, {
        state: data.sport[selectedSport][selectedCourtName],
      });
    } else {
      alert("UNDEFINED OPERATION");
    }
  };

  // useEffect(() => {
  //     console.log(selectedData);
  // }, [selectedData]);

  // useEffect(() => {
  //     console.log(selectedCourts);
  // }, [selectedCourts]);

  // useEffect(() => {
  //     const newSelectedData = {};
  //     Object.keys(checkedInfo).forEach(sport => {
  //         if (checkedInfo[sport]) {
  //             newSelectedData[sport] = data.sport[sport];
  //         }
  //     });
  //     setSelectedData(newSelectedData);
  // }, [checkedInfo]);
  return (
    <div className="selectbar-selectbar">
      <div className="selectbar-selectbar-filter-container">
        <Typography >Filter</Typography>
      </div>

      <div className="selectbar-selectbar-accrodin-container">
        <Accordion disableGutters className="selectbar-selectbar-accrodin">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Sport Type</Typography>
          </AccordionSummary>
          <AccordionDetails className="selectbar-selectbar-accrodin-content">
            <div className="selectbar-selectbar-accrodin-checkbox-container">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedInfo["basketball"]}
                    onChange={handleCheckboxChange("basketball")}
                  />
                }
                label="Basketball"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedInfo["tennis"]}
                    onChange={handleCheckboxChange("tennis")}
                  />
                }
                label="Tennis"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedInfo["badminton"]}
                    onChange={handleCheckboxChange("badminton")}
                  />
                }
                label="Badminton"
              />
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters className="selectbar-selectbar-accrodin">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Courts</Typography>
          </AccordionSummary>
          <AccordionDetails className="selectbar-selectbar-accrodin-content">
            <div className="selectbar-selectbar-accrodin-checkbox-container">
              {allCourts.length === 0 ? (
                <Typography>Please choose a sport first.</Typography>
              ) : (
                allCourts.map((court) => (
                  <FormControlLabel
                    key={court.name}
                    control={
                      <Checkbox
                        checked={!!selectedCourts[court.name]}
                        onChange={handleCourtCheckboxChange(court.name)}
                      />
                    }
                    label={court.name}
                  />
                ))
              )}
            </div>
          </AccordionDetails>
        </Accordion>
        <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5px', marginLeft:'9px'}}>{Object.keys(selectedCourts).length === 0 ||
        Object.keys(selectedData).length === 0 ? (
          <p className="filter-text">Please select a sport and a court.</p>
        ) : (
          <Button className="MUI-button" onClick={handleButtonClick} variant="contained"  endIcon={<AddCircleOutlineIcon/>}>Go to selected court</Button>
        )}</div>
      </div>
    </div>
  );
};

export default SelectBar;