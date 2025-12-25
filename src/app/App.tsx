import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PersonalDetails from './pages/PersonalDetails';
import LocationDetails from './pages/LocationDetails';
import Awareness from './pages/Awareness';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Complaint from './pages/Complaint';
import Feedback from './pages/Feedback';
import Contact from './pages/Contact';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/location-details" element={<LocationDetails />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
