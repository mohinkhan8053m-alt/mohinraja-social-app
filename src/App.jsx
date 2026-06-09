import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './UserContext.jsx'; 

// सभी पेजों को यहाँ 'lazy' इम्पोर्ट किया है ताकि वेबसाइट जल्दी लोड हो
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
        {/* यह 'Suspense' वाला हिस्सा आपके पेजों के बीच एक स्मूथ अनुभव देगा */}
        <Suspense fallback={
          <div style={{
            height: '100vh', 
            background: '#000', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: '#fbbf24', 
            fontSize: '20px'
          }}>
            Loading Moin Raja Premium App...
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
            
            {/* यह लाइन सुनिश्चित करती है कि अगर कोई गलत लिंक डाले तो वो सीधे लॉगिन पर जाए */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Router>
    </UserProvider>
  );
}

export default App;
            
