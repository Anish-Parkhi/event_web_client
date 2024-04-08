import TextField from '@mui/material/TextField';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import styles from './Home.module.css';

const data = [1, 2, 3, 4];

function Home() {
  return (
    <div className={styles.homeMainContainer}>
      <Navbar />
      <div className={styles.searchBarMainContiner}>
        <TextField
          className={styles.searchBarContiner}
          id="outlined-basic"
          label="Search"
          variant="outlined"
        />
        <div>
          <div>Filter by </div>
          <div className={styles.filterMainContiner}>
            <li>Most popular</li>
            <li>This Week</li>
            <li>Latest</li>
          </div>
        </div>
      </div>
      <div className={styles.cardWrapperContainer}>
        {data.map((item) => {
          return <Card key={item} />;
        })}
      </div>
    </div>
  );
}

export default Home;
