import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import animationData from '../../assets/done.json';

function ConfirmBooking() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Your booking is confirmed!</h2>
      <Lottie options={defaultOptions} height={200} width={200} />
      <Link to="/">Go to home</Link>
    </div>
  );
}

export default ConfirmBooking;
