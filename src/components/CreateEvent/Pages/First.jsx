import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEvent } from '../../../context/CreateEventContext';
import useHandleChange from '../../../hooks/useHandleChange';
import styles from './FormStyles.module.css';

function First() {
  const { eventData } = useEvent();
  const handleChange = useHandleChange();
  const [startDate, setStartDate] = useState(new Date());
  const formattedDate = startDate.toLocaleDateString('en-GB');
  useEffect(() => {
    eventData.event_date = formattedDate;
  }, [formattedDate, eventData]);
  return (
    <div>
      <div className={styles.eventBannerText}>Event Details</div>
      <div className={styles.eventInfoWrapper}>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}
        >
          <TextField
            id="outlined-basic"
            name="event_name"
            label="Event name"
            variant="outlined"
            onChange={handleChange}
            value={eventData.event_name}
            required
          />
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}
        >
          <TextareaAutosize
            minRows={4}
            maxRows={10}
            aria-label="Enter event description"
            placeholder="Event description"
            name="event_description"
            onChange={handleChange}
            value={eventData.event_description}
            required
          />
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}
        >
          <TextField
            id="outlined-basic"
            name="category"
            label="Category"
            variant="outlined"
            onChange={handleChange}
            value={eventData.category}
            required
          />
        </div>
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            value={eventData.event_date}
            name="event_date"
            className={styles.datepickerContainer}
          />
        </div>
      </div>
    </div>
  );
}

export default First;
