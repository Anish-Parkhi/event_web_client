import LocationOnIcon from '@mui/icons-material/LocationOn';
import poster from '../../assets/concert.jpg';
import styles from './Card.module.css';

function Card() {
  return (
    <div className={styles.cardMainContainer}>
      <img alt="poster" className={styles.imageMainContainer} src={poster} />
      <div className={styles.infoMainContainer}>
        <div>Rock Concert</div>
        <div>10/03/24</div>
      </div>
      <div className={styles.locationMainContainer}>
        {' '}
        <LocationOnIcon /> <div>Modi Stadium, NYC</div>{' '}
      </div>
      <button className={styles.viewMoreContainer}>View more</button>
    </div>
  );
}

export default Card;
