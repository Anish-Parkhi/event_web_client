import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import calenderImage from '../../assets/calendar.png';
import apiLink from '../../constant/api';
import { useEvent } from '../../context/CreateEventContext';
import Navbar from '../Navbar/Navbar';
import styles from './CreateEvent.module.css';
import First from './Pages/First';
import Second from './Pages/Second';
import Third from './Pages/Third';

function CreateEvent() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const handleNextPage = () => {
    if (currentPage != 3) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage != 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const { eventData } = useEvent();

  const handleCreateEvent = () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9yZ2FuaXplcjFAZXhhbXBsZS5jb20iLCJyb2xlIjoib3JnYW5pemVyIiwiaWF0IjoxNzEzNDExMTkwfQ.BogeOJibPQ84hUpPoGJCpO2UtjtrxoNMrkzffZWIF4k';
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const apiCall = () => {
      axios
        .post(`${apiLink}/admin/createevent`, eventData, config)
        .then((res) => {
          console.log(res.data);
          navigate('/eventcreationconfirmation');
        })
        .catch((err) => console.log(err));
    };
    apiCall();
  };
  return (
    <div>
      <Navbar />
      <div className={styles.formWrapperContainer}>
        <div style={{ width: '100%', display: 'flex' }}>
          <img className={styles.eventsImageContainer} src={calenderImage} />
        </div>
        <div className={styles.upperPosterText}>
          Fill in the below details to host an event
        </div>
        <div className={styles.eventsInnerWrapper}>
          {currentPage === 1 ? (
            <First />
          ) : currentPage === 2 ? (
            <Second />
          ) : (
            <Third />
          )}
          <div className={styles.buttonMainContainer}>
            <button
              disabled={currentPage === 1 ? true : false}
              onClick={handlePrevPage}
              className={styles.buttonContainer}
            >
              Previous
            </button>
            <button
              disabled={currentPage === 3 ? true : false}
              onClick={handleNextPage}
              className={styles.buttonContainer}
            >
              Next
            </button>
          </div>
        </div>
        <div
          className={styles.bookButtonContainer}
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          <button
            style={{ cursor: 'pointer' }}
            onClick={handleCreateEvent}
            className={styles.createEventButtonContainer}
          >
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
