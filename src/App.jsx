import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/Error/NotFound';
import EventInfo from './components/Event/EventInfo';
import PrivateRoute from './components/HOC/PrivateRoute';
import Home from './components/Home/Home';
import { default as SignIn } from './components/Signin/SignIn';
import SignUp from './components/Signup/SignUp';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/user/signup" element={<SignUp />} />
          <Route path="/user/signin" element={<SignIn />} />
          <Route element={<PrivateRoute />}>
            <Route index path="/" element={<Home />} />
            <Route path="/eventInfo/:eventId" element={<EventInfo />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
