import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import styles from './Navbar.module.css';

function Navbar() {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  const handleLogout = () => {
    logOut();
  };
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
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div>Account</div>
          <div style={{ cursor: 'pointer' }} onClick={handleLogout}>
            Logout
          </div>
        </div>
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
