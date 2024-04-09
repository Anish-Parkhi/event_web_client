import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Signin from './components/Signin/SignIn';
import EventInfo from './components/Event/EventInfo';
import SignUp from './components/Signup/SignUp';
import SignIn from './components/Signin/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path='/eventInfo/:eventId' element={<EventInfo />}  />
        <Route path='/user/signup' element={<SignUp />} />
        <Route index path='/user/signin' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
