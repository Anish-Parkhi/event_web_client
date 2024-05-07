import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/concert.jpg';
import apiLink from '../../constant/api';
import { useAuth } from '../../context/AuthProvider';
import Navbar from '../Navbar/Navbar';
import styles from './MyBookings.module.css';

function MyBookings() {
  const [apiData, setApiData] = useState([]);
  const { token } = useAuth();
  const config = {
    headers: {
      Authorization: token,
    },
  };
  
  useEffect(() => {
    axios
      .get(`${apiLink}/event/myevents`, config)
      .then((res) => setApiData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  
  const handleCancelTicket = (ticketId) => {
    axios
      .delete(`${apiLink}/ticket/cancelticket`, {
        data: { ticketId },
        headers: config.headers,
      })
      .then((res) => {
        console.log(res.data);
        navigate('/cancelconfimation', { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <div className={styles.myBookingsWrapper}>
        <div className={styles.myRegistrationsText}>My Registrations</div>
        {apiData.length === 0 ? (
          <div>You are not registered for any event</div>
        ) : (
          apiData.map((item, index) => (
            <div key={index}>
              <div className={styles.myBookingsMainCotnainer}>
                <img
                  className={styles.imageContainer}
                  src={image}
                  alt="event_poster"
                />
                <div className={styles.eventInfoContainer}>
                  <div className={styles.eventNameText}>{item.event_name}</div>
                  <div className={styles.eventVenueContainer}>
                    <div className={styles.eventVenueText}>{item.venue}</div>
                    <div className={styles.eventDateText}>
                      {item.event_date}
                    </div>
                  </div>
                  <div className={styles.hostNameText}>
                    Host: {item.host_name}
                  </div>
                  <div className={styles.organizerText}>
                    Organizer: {item.organizer_name}
                  </div>
                  <div className={styles.addressContainer}>
                    Address: {item.venue_address}
                  </div>
                </div>
                <div className={styles.ticketClassContainer}>
                  <div>Class</div>
                  <div>{item.type}</div>
                </div>
                <button
                  onClick={() => handleCancelTicket(item.ticket_id)}
                  className={styles.cancelTicketButton}
                >
                  Cancel Ticket
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyBookings;
