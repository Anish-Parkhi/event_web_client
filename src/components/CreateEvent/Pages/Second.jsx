import TextField from '@mui/material/TextField';
import { useEvent } from '../../../context/CreateEventContext';
import useHandleChange from '../../../hooks/useHandleChange';
import styles from './FormStyles.module.css';
function Second() {
  const { eventData } = useEvent();
  const handleChange = useHandleChange();
  return (
    <div>
      <div className={styles.eventBannerText}>Host Details</div>
      <div className={styles.eventInfoWrapper}>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}
        >
          <TextField
            id="outlined-basic"
            name="host_name"
            label="Host name"
            variant="outlined"
            onChange={handleChange}
            value={eventData.host_name}
            required
          />
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}
        >
          <TextField
            id="outlined-basic"
            name="email"
            label="Host contact email"
            variant="outlined"
            onChange={handleChange}
            value={eventData.email}
            required
          />
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}
        >
          <TextField
            id="outlined-basic"
            name="contact_number"
            label="Host contact number"
            variant="outlined"
            type="number"
            onChange={handleChange}
            value={eventData.contact_number}
            required
          />
        </div>
      </div>
    </div>
  );
}

export default Second;
