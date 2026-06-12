import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './UserContext.jsx'; 

// सभी पेजों को यहाँ सही से इम्पोर्ट करें
const LoginPage = lazy(() => import('./LoginPage.jsx'));
const HomePage = lazy(() => import('./HomePage.jsx'));
const MessengerPage = lazy(() => import('./MessengerPage.jsx'));
const VideoCallHub = lazy(() => import('./VideoCallHub.jsx'));
const ExplorePage = lazy(() => import('./ExplorePage.jsx'));
const ProfilePage = lazy(() => import('./ProfilePage.jsx'));
const SettingsPage = lazy(() => import('./SettingsPage.jsx'));
const PremiumAdminPage = lazy(() => import('./PremiumAdminPage.jsx'));

function App() {
  return (
    <UserProvider>
      <Router>
        {/* Suspense का इस्तेमाल पेजों को लोड करते समय खाली स्क्रीन आने से रोकता है */}
        <Suspense fallback={<div style={{textAlign:'center', marginTop:'20%', fontSize:'20px'}}>Moin Raja App Loading...</div>}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/messenger" element={<MessengerPage />} />
            <Route path="/video-call" element={<VideoCallHub />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/admin" element={<PremiumAdminPage />} />
            {/* अगर कोई गलत लिंक डाले, तो सीधा होम पर भेज देगा */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Router>
    </UserProvider>
  );
}

export default App;
