import LocationOnIcon from '@mui/icons-material/LocationOn';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import poster from '../../assets/concert.jpg';
import styles from './Card.module.css';

function Card(props) {
  const { venue_name, event_date, event_name, event_id, eventInfo } = props;
  const date = new Date(event_date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formatedDate = `${day}/${month}/${year}`;
  const navigate = useNavigate();
  return (
    <div className={styles.cardMainContainer}>
      <img alt="poster" className={styles.imageMainContainer} src={poster} />
      <div className={styles.infoMainContainer}>
        <div>{event_name}</div>
        <div>{formatedDate}</div>
      </div>
      <div className={styles.locationMainContainer}>
        {' '}
        <LocationOnIcon /> <div>{venue_name}</div>{' '}
      </div>
      <button
        onClick={() => {
          navigate(`/eventInfo/${event_id}`, { state: eventInfo });
        }}
        className={styles.viewMoreContainer}
      >
        View more
      </button>
    </div>
  );
}

Card.propTypes = {
  venue_name: PropTypes.string,
  event_name: PropTypes.string,
  event_date: PropTypes.string,
  event_id: PropTypes.number,
  eventInfo: PropTypes.object,
};

export default Card;
