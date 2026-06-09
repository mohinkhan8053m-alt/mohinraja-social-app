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

function App() {
  return (
    <UserProvider>
      <Router>
        <Suspense fallback={
          <div style={{
            height: '100vh', background: '#000', display: 'flex', 
            flexDirection: 'column', alignItems: 'center', justifyContent: 'center', 
            color: '#fbbf24', fontSize: '24px', fontWeight: 'bold'
          }}>
            <div style={{border: '3px solid #fbbf24', padding: '20px', borderRadius: '50%'}}>Loading...</div>
            <p style={{marginTop: '20px'}}>Moin Raja Premium</p>
          </div>
        }>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
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
