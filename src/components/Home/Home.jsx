import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useEffect, useState } from 'react';
import apiLink from '../../constant/api';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import styles from './Home.module.css';


function Home() {
  const [apidata, setApiData] = useState(null);


  useEffect(() => {
    axios
      .get(`${apiLink}/event`)
      .then((res) => setApiData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(apidata)
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
        {apidata?.map((item) => {
          return <Card eventInfo={item} event_id={item.event_id} venue_name={item.venue_name} event_date={item.event_date} event_name={item.event_name} key={item.event_id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
