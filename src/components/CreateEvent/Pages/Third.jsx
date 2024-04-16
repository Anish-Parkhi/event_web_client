import TextField from '@mui/material/TextField';
import { useEvent } from '../../../context/CreateEventContext';
import useHandleChange from '../../../hooks/useHandleChange';
import styles from './FormStyles.module.css';

function Third() {
  const { eventData } = useEvent();
  const handleChange = useHandleChange();
  return (
    <div>
      <div className={styles.eventBannerText}>Venue Details</div>
      <div className={styles.eventInfoWrapper}>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}
        >
          <TextField
            id="outlined-basic"
            name="venue_name"
            label="Venue name"
            variant="outlined"
            onChange={handleChange}
            value={eventData.venue_name}
            required
          />
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}
        >
          <TextField
            id="outlined-basic"
            name="address"
            label="Venue address<"
            variant="outlined"
            onChange={handleChange}
            value={eventData.address}
            required
          />
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}
        >
          <TextField
            id="outlined-basic"
            name="capacity"
            label="Event capacity"
            type="number"
            variant="outlined"
            onChange={handleChange}
            value={eventData.capacity}
            required
          />
        </div>
      </div>
    </div>
  );
}

export default Third;
