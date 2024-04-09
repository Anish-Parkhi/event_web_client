import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useEffect, useState } from 'react';
import apiLink from '../../constant/api';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import styles from './Home.module.css';
import { useAuth } from '../../context/AuthProvider';

function Home() {
  const [apidata, setApiData] = useState(null);
  const [mostPoularSelected, setmostPoularSelected] = useState(false);
  const [originalData, setOriginalData] = useState(null);

  useEffect(() => {
    axios
      .get(`${apiLink}/event`)
      .then((res) => {
        setApiData(res.data);
        setOriginalData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchPopularEvents = () => {
    axios
      .get(`${apiLink}/event/mostpopular`)
      .then((res) => setApiData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (mostPoularSelected) {
      fetchPopularEvents();
    } else {
      setApiData(originalData);
    }
  }, [mostPoularSelected, originalData]);

  const auth = useAuth();
  console.log(auth.token)
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
            <li
              style={{ color: mostPoularSelected ? '#F67171' : 'black' }}
              onClick={() => setmostPoularSelected((prev) => !prev)}
            >
              Most popular
            </li>
            <li>This Week</li>
            <li>Latest</li>
          </div>
        </div>
      </div>
      <div className={styles.cardWrapperContainer}>
        {apidata?.map((item) => {
          return (
            <Card
              eventInfo={item}
              event_id={item.event_id}
              venue_name={item.venue_name}
              event_date={item.event_date}
              event_name={item.event_name}
              key={item.event_id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
