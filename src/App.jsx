import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './UserContext.jsx'; 

const LoginPage = lazy(() => import('./LoginPage.jsx'));
const HomePage = lazy(() => import('./HomePage.jsx'));
const MessengerPage = lazy(() => import('./MessengerPage.jsx'));
const VideoCallHub = lazy(() => import('./VideoCallHub.jsx'));
const ExplorePage = lazy(() => import('./ExplorePage.jsx'));
const ProfilePage = lazy(() => import('./ProfilePage.jsx'));
const SettingsPage = lazy(() => import('./SettingsPage.jsx'));
const PremiumAdminPage = lazy(() => import('./PremiumAdminPage.jsx'));
const Main = lazy(() => import('./main.jsx')); // यहाँ सही नाम 'main.jsx' रखें

function App() {
  return (
    <UserProvider>
      <Router>
        <Suspense fallback={<div style={{textAlign:'center', marginTop:'20%'}}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/main" element={<Main />} /> 
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
