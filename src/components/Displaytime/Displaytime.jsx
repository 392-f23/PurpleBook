import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


const Displaytime = (props) => {
    const {selectedDay, dayInfo} = props;

    const handleClick = (time) => {
        alert(`You have selected: ${time}`);
    };



    return (
      <div>
        <ListGroup>
            {dayInfo.length === 0 ? (
                <p>This court is not available on {selectedDay}. </p>
            ) : (
                <>
                  <p>Here are the available times on {selectedDay}:</p>
                  {dayInfo.filter(item => !item.booked).map((item, index) => (
                      <ListGroup.Item key={index} action onClick={() => handleClick(item.time)}>
                        {item.time}
                      </ListGroup.Item>
                    ))
                  }
                </>
              )}
        </ListGroup>
        
      </div>
    );

}

export default Displaytime;