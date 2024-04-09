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
  const date = new Date(data.event_date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formatedDate = `${day}/${month}/${year}`;
  return (
    <div className={styles.eventInfoMainContainer}>
      <Navbar />
      <div className={styles.eventInnerMainContainer}>
        <div className={styles.upperWrapper}>
        <div className={styles.imageContainer} >
          <img className={styles.eventInfoInnerContainerImage} src={image} />

        </div>

          <div className={styles.eventInfoInnerContainer}>
            <div className={styles.eventNameText}>{data.event_name}</div>
            <div className={styles.locationText}>
              <div style={{ display:"flex",alignContent: 'center' }}>
                <LocationOnIcon />
                <div>{data.address}</div>
              </div>
              <div>{formatedDate}</div>
            </div>
            <div className={styles.eventHostText} >Host: {data.host_name}</div>
            <div className={styles.eventOrganizerText}>Organizer: {data.name}</div>
            <div>Address: {data.address}</div>
            <div className={styles.tagsContainer}>
              <div className={styles.tag}>{data.category}</div>
            </div>
            <button className={styles.bookButtonContainer}>Book Tickets</button>
          </div>
        </div>
        <div className={styles.eventDescriptionContainer}>
          <div style={{fontSize:"1.5rem"}} >Event description</div>
          <div className={styles.eventDescription}>
            {data.event_description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventInfo;
