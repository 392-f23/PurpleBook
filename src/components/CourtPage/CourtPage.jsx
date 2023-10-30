import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Displaytime from '../Displaytime/Displaytime';

const CourtPage = () => {
    const location = useLocation();
    const receivedData = location.state;
    const [selectedDay, setSelectedDay] = useState();
    const handleSelectDay = (eventKey, event) => {
        setSelectedDay(eventKey);  
    };
    return (
        <div>
            <Dropdown onSelect={handleSelectDay}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Choose a day
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropbar-menu">
                    <Dropdown.Item eventKey="Monday">Monday</Dropdown.Item>
                    <Dropdown.Item eventKey="Tuesday">Tuesday</Dropdown.Item>
                    <Dropdown.Item eventKey="Wednesday">Wednesday</Dropdown.Item>
                    <Dropdown.Item eventKey="Thursday">Thursday</Dropdown.Item>
                    <Dropdown.Item eventKey="Friday">Friday</Dropdown.Item>
                    <Dropdown.Item eventKey="Saturday">Satruday</Dropdown.Item>
                    <Dropdown.Item eventKey="Sunday">Sunday</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {selectedDay === undefined ? <p>No data</p> : <Displaytime selectedDay={selectedDay} dayInfo={receivedData[selectedDay]} />}
        </div>
    )
}

export default CourtPage;