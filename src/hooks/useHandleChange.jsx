import { useEvent } from '../context/CreateEventContext';

const useHandleChange = () => {
  const { setEventData } = useEvent();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({ ...prev, [name]: value }));
  };
  return handleChange
};

export default useHandleChange;
