import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useEffect, useState } from 'react';
import apiLink from '../../constant/api';
import NotAuthorized from '../../utils/NotAuthorized';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import styles from './Home.module.css';

function Home() {
  const [apidata, setApiData] = useState(null);
  const [mostPoularSelected, setmostPoularSelected] = useState(false);
  const [originalData, setOriginalData] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const fetchEventData = () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `${token}`,
        },
      };
      try {
        axios
          .get(`${apiLink}/event`, config)
          .then((res) => {
            if (res.data.msg === 'Token not found') {
              setIsAuthorized(false);
            } else {
              setIsAuthorized(true);
            }
            setApiData(res.data);
            setOriginalData(res.data);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };

    fetchEventData();
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
  return (
    <div className={styles.homeMainContainer}>
      {isAuthorized ? (
        <div>
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
      ) : (
        <NotAuthorized />
      )}
    </div>
  );
}

export default Home;
