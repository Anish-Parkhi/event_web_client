import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.upperNavbarContainer}>
        <div
          className={styles.upperDivHeadingContainer}
          onClick={() => {
            navigate('/');
          }}
        >
          Book My Event
        </div>
        <div>Account</div>
      </div>
      <nav className={styles.navbarMainContainer}>
        <ul className={styles.navbarInnerListContainer}>
          <li>Music Show</li>
          <li>Stand up</li>
          <li>Social gatherings</li>
          <li>Magic shows</li>
        </ul>
        <ul className={styles.navbarInnerListContainer}>
          <li className={styles.bookEventContiner}>Host events</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
