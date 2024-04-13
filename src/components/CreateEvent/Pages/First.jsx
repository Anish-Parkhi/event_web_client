import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { useState } from 'react';
import { useEvent } from '../../../context/CreateEventContext';
import useHandleChange from '../../../hooks/useHandleChange';
import styles from './FormStyles.module.css';

function First() {
  const { eventData } = useEvent();
  console.log(eventData);
  const handleChange = useHandleChange();
  const [dateValue, setDateValue] = useState();
  console.log(dateValue);
  return (
    <div>
      <div className={styles.eventBannerText}>Event Details</div>
      <div className={styles.eventInfoWrapper}>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}
        >
          <label>Event name</label>
          <TextField
            id="outlined-basic"
            name="event_name"
            label="Event name"
            variant="outlined"
            onChange={handleChange}
            required
          />
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}
        >
          <label>Event description</label>
          <TextareaAutosize
            minRows={4}
            maxRows={10}
            aria-label="Enter event description"
            placeholder="Enter event description"
            defaultValue="Enter event description"
            name="event_description"
            onChange={handleChange}
            required
          />
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}
        >
          <label>Event Category</label>
          <TextField
            id="outlined-basic"
            name="category"
            label="Event name"
            variant="outlined"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']}>
              <DatePicker
                label="Controlled picker"
                value={dateValue}
                onChange={(newValue) => setDateValue(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
}

export default First;
