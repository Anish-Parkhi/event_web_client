import { useState } from 'react';
import calenderImage from '../../assets/calendar.png';
import Navbar from '../Navbar/Navbar';
import styles from './CreateEvent.module.css';
import First from './Pages/First';
import Second from './Pages/Second';
import Third from './Pages/Third';

function CreateEvent() {
  const [currentPage, setCurrentPage] = useState(1);
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
  return (
    <div>
      <Navbar />
      <div className={styles.createEventMainContiner}>Host Event</div>
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
      </div>
    </div>
  );
}

export default CreateEvent;
