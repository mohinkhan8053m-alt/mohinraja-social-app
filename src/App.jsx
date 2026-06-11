import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './UserContext.jsx'; 

// तुम्हारी सारी की सारी फाइलें यहाँ एक साथ जुड़ी हैं:
const LoginPage = lazy(() => import('./LoginPage.jsx'));
const HomePage = lazy(() => import('./HomePage.jsx'));
const MessengerPage = lazy(() => import('./MessengerPage.jsx'));
const VideoCallHub = lazy(() => import('./VideoCallHub.jsx'));
const ExplorePage = lazy(() => import('./ExplorePage.jsx'));
const ProfilePage = lazy(() => import('./ProfilePage.jsx'));
const SettingsPage = lazy(() => import('./SettingsPage.jsx'));
const PremiumAdminPage = lazy(() => import('./PremiumAdminPage.jsx'));
const Main = lazy(() => import('./Main.jsx')); // यह रही तुम्हारी Main.jsx फाइल

function App() {
  return (
    <UserProvider>
      <Router>
        <Suspense fallback={<div style={{textAlign:'center', marginTop:'20%'}}>Loading Moin Raja Premium...</div>}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/main" element={<Main />} /> {/* तुम्हारी Main फाइल का लिंक */}
            <Route path="/messenger" element={<MessengerPage />} />
            <Route path="/video-call" element={<VideoCallHub />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/admin" element={<PremiumAdminPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Router>
    </UserProvider>
  );
}

export default App;
