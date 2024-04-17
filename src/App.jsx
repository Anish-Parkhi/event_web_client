import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BookTicket from './components/Booking/BookTicket';
import ConfirmBooking from './components/Booking/ConfirmBooking';
import CreateEvent from './components/CreateEvent/CreateEvent';
import NotFound from './components/Error/NotFound';
import EventInfo from './components/Event/EventInfo';
import Home from './components/Home/Home';
import CancelConfirmation from './components/MyBookings/CancelConfirmation';
import MyBookings from './components/MyBookings/MyBookings';
import SignIn from './components/Signin/Signin';
import SignUp from './components/Signup/SignUp';
import AuthProvider from './context/AuthProvider';
import EventProvider from './context/CreateEventContext';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EventProvider>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/user/signup" element={<SignUp />} />
            <Route path="/user/signin" element={<SignIn />} />
            <Route path="/eventInfo/:eventId" element={<EventInfo />} />
            <Route path="/createevent" element={<CreateEvent />} />
            <Route path="/bookticket" element={<BookTicket />} />
            <Route path="/bookingConfirmation" element={<ConfirmBooking />} />
            <Route path="/mybookings" element={<MyBookings />} />
            <Route path="/cancelconfimation" element={<CancelConfirmation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </EventProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
