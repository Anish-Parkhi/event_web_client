import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import axios from 'axios';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import image from '../../assets/concert.jpg';
import apiLink from '../../constant/api';
import { useAuth } from '../../context/AuthProvider';
import Navbar from '../Navbar/Navbar';
import styles from './BookTicket.module.css';

function BookTicket() {
  const location = useLocation();
  const eventData = location.state.data;
  const [ticketCount, setTicketCount] = useState(1);
  const [ticketType, setTicketType] = useState('Regular');
  const { token } = useAuth();
  const navigate = useNavigate();
  //   const day = eventData.event_date.getDate();
  //   const month = eventData.event_date.getMonth() + 1;
  //   const year = eventData.event_date.getFullYear();
  //   const formattedDate = `${day}/${month}/${year}`;
  console.log(eventData);
  const addTicket = () => {
    setTicketCount((prev) => prev + 1);
  };
  const removeTicket = () => {
    if (ticketCount > 1) {
      setTicketCount((prev) => prev - 1);
    }
  };
  const handleTicketTypeChange = (e) => {
    setTicketType(e.target.value);
  };

  const handleClick = () => {
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const eventId = eventData.event_id;
    const data = { eventId, ticketType };
    axios
      .post(`${apiLink}/ticket/bookticket`, data, config)
      .then((res) => {
        console.log(res.data);
        if (res.data.msg === 'Ticket booked successfully') {
          navigate('/bookingConfirmation');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <div className={styles.bookTicketWrapper}>
        <div className={styles.bookTicketHeaderText}>Ticket Booking</div>
        <div className={styles.eventInfoContainer}>
          <img className={styles.concertImage} alt="event_banner" src={image} />
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}
          >
            <div style={{ fontSize: '1.6rem' }}>{eventData.event_name}</div>
            <div style={{ display: 'flex' }}>
              <LocationOnIcon sx={{ color: 'black', marginRight: '0.4rem' }} />
              <div style={{ fontSize: '1.2rem' }}>{eventData.venue_name}</div>
            </div>
            <div style={{ display: 'flex' }}>
              <EventIcon sx={{ color: 'black', marginRight: '0.4rem' }} />
              <div style={{ fontSize: '1.2rem' }}>{eventData.event_date}</div>
            </div>
            <div style={{ display: 'flex' }}>
              <PermIdentityIcon
                sx={{ color: 'black', marginRight: '0.4rem' }}
              />
              <div style={{ fontSize: '1.2rem' }}>{eventData.host_name}</div>
            </div>
          </div>
        </div>
        <div className={styles.addTicketsContainer}>
          <div style={{ fontSize: '1.2rem' }}>Add number of tickets</div>
          <div className={styles.ticketsCounterContainer}>
            <div
              onClick={removeTicket}
              style={{ cursor: 'pointer', marginLeft: '0.5rem' }}
            >
              -
            </div>
            <div>{ticketCount}</div>
            <div
              onClick={addTicket}
              style={{ cursor: 'pointer', marginRight: '0.5rem' }}
            >
              +
            </div>
          </div>
        </div>
        <div className={styles.ticketTypeSelectionContainer}>
          <div style={{ fontSize: '1.2rem' }}>Select ticket type</div>
          <select
            onChange={handleTicketTypeChange}
            value={ticketType}
            name="ticketType"
            id="ticket"
            className={styles.selectBoxContainer}
          >
            <option value="regular">Regular</option>
            <option value="VIP">VIP</option>
          </select>
        </div>
        <button
          onClick={handleClick}
          className={styles.bookTicketButtonContainer}
        >
          Book Ticket
        </button>
      </div>
    </div>
  );
}

export default BookTicket;
