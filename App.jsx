import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext.jsx'; 

// सभी फाइलों का इम्पोर्ट
import LoginPage from './LoginPage.jsx';
import HomePage from './HomePage.jsx';
import MessengerPage from './MessengerPage.jsx';
import VideoCallHub from './VideoCallHub.jsx';
import ExplorePage from './ExplorePage.jsx';
import ProfilePage from './ProfilePage.jsx';
import SettingsPage from './SettingsPage.jsx'; // सेटिंग पेज यहाँ आ गया
import PremiumAdminPage from './PremiumAdminPage.jsx';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/messenger" element={<MessengerPage />} />
          <Route path="/video-call" element={<VideoCallHub />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} /> {/* यह लाइन जोड़ दी है */}
          <Route path="/admin" element={<PremiumAdminPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
