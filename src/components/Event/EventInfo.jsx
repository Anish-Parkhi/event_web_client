import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useLocation, useParams } from 'react-router-dom';
import image from '../../assets/concert.jpg';
import Navbar from '../Navbar/Navbar';
import styles from './EventInfo.module.css';

function EventInfo() {
  const { eventId } = useParams();
  const location = useLocation();
  const data = location.state;
  console.log(data);
  console.log(eventId);
  return (
    <div className={styles.eventInfoMainContainer}>
      <Navbar />
      <div className={styles.eventInnerMainContainer}>
        <div className={styles.upperWrapper}>
        <div className={styles.imageContainer} >
          <img className={styles.eventInfoInnerContainerImage} src={image} />

        </div>

          <div className={styles.eventInfoInnerContainer}>
            <div className={styles.eventNameText}>Stand up comedy show</div>
            <div className={styles.locationText}>
              <div style={{ display:"flex",alignContent: 'center' }}>
                <LocationOnIcon />
                <div>Oberoi, Mumbai</div>
              </div>
              <div>25/05/24</div>
            </div>
            <div className={styles.eventHostText} >Host: Anish Parkhi</div>
            <div className={styles.eventOrganizerText}>Organizer: Batliwala & sons</div>
            <div>Address: Oberoi, Nariman Point, Mumbai-30</div>
            <div className={styles.tagsContainer}>
              <div className={styles.tag}>Comedy</div>
            </div>
            <button className={styles.bookButtonContainer}>Book Tickets</button>
          </div>
        </div>
        <div className={styles.eventDescriptionContainer}>
          <div style={{fontSize:"1.5rem"}} >Event description</div>
          <div className={styles.eventDescription}>
            Comedy Galore is an electrifying stand-up comedy show packed with
            non-stop laughter, featuring a lineup of hilarious comedians
            delivering gut-busting jokes, outrageous anecdotes, and unexpected
            twists. With spontaneous improvisation, surprise guests, and
            interactive segments, this show guarantees an unforgettable evening
            of side-splitting fun that leaves you craving more!
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventInfo;
