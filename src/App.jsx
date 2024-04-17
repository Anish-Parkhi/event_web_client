import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateEvent from './components/CreateEvent/CreateEvent';
import NotFound from './components/Error/NotFound';
import EventInfo from './components/Event/EventInfo';
import HostEventProtectedRoute from './components/HOC/HostEventProtectedRoute';
import PrivateRoute from './components/HOC/PrivateRoute';
import Home from './components/Home/Home';
import SignIn from './components/Signin/Signin';
import SignUp from './components/Signup/SignUp';
import AuthProvider from './context/AuthProvider';
import EventProvider from './context/CreateEventContext';
import BookTicket from './components/Booking/BookTicket';
import ConfirmBooking from './components/Booking/ConfirmBooking';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EventProvider>
          <Routes>
            <Route path="/user/signup" element={<SignUp />} />
            <Route path="/user/signin" element={<SignIn />} />
            <Route element={<PrivateRoute />}>
              <Route index path="/" element={<Home />} />
              <Route path="/eventInfo/:eventId" element={<EventInfo />} />
            </Route>
            {/* <Route element={<HostEventProtectedRoute />}> */}
              <Route path="/createevent" element={<CreateEvent />} />
            {/* </Route> */}
            <Route path="*" element={<NotFound />} />
            <Route path='/bookticket' element={<BookTicket />} />
            <Route path='/bookingConfirmation' element={<ConfirmBooking />} />
          </Routes>
        </EventProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
