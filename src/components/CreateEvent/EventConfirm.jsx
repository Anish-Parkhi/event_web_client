import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import animationData from '../../assets/done.json';
function EventConfirm() {
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
      <h2>Event created successfully</h2>
      <Lottie options={defaultOptions} height={200} width={200} />
      <Link to="/">Go to home</Link>
    </div>
  );
}

export default EventConfirm;
