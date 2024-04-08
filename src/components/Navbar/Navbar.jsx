import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div>
      <div className={styles.upperNavbarContainer}>
        <div className={styles.upperDivHeadingContainer} >Book My Event</div>
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
