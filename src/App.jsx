import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import EventInfo from './components/Event/EventInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path='/eventInfo/:eventId' element={<EventInfo />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
