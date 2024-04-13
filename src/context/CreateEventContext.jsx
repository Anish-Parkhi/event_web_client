import { createContext, useContext, useState } from 'react';

const EventContext = createContext();

// eslint-disable-next-line react/prop-types
const EventProvider = ({ children }) => {
  const [eventData, setEventData] = useState({
    host_name: '',
    email: '',
    contact_number: '',
    capacity: '',
    venue_name: '',
    address: '',
    event_name: '',
    event_description: '',
    event_date: '',
    category: '',
  });

  return (
    <EventContext.Provider value={{ eventData, setEventData }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;

export const useEvent = () => {
  return useContext(EventContext);
};
