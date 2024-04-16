import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ModalMui({ open, setOpen, modalContent }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalContent}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Link to="/user/signin">Continue to sign in</Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

ModalMui.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  modalContent: PropTypes.string,
};

export default ModalMui;
