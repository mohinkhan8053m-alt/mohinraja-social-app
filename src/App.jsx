import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './UserContext.jsx'; 
import { AdProvider } from './AdProvider.jsx'; 
import Layout from './Layout.jsx'; 

// सभी पेज (Lazy Loading)
const LoginPage = lazy(() => import('./LoginPage.jsx'));
const HomePage = lazy(() => import('./HomePage.jsx'));
const MessengerPage = lazy(() => import('./MessengerPage.jsx'));
const VideoCallHub = lazy(() => import('./VideoCallHub.jsx'));
const ExplorePage = lazy(() => import('./ExplorePage.jsx'));
const ProfilePage = lazy(() => import('./ProfilePage.jsx')); // यह तुम्हारी Instagram जैसी प्रोफाइल वाली फाइल है
const SettingsPage = lazy(() => import('./SettingsPage.jsx'));
const PremiumAdminPage = lazy(() => import('./PremiumAdminPage.jsx'));
const PromotionForm = lazy(() => import('./PromotionForm.jsx'));
const PartnershipForm = lazy(() => import('./PartnershipForm.jsx')); 

function App() {
  return (
    <UserProvider>
      <AdProvider>
        <Router>
          <Suspense fallback={<div style={{textAlign:'center', marginTop:'20%', fontSize:'20px'}}>RangManch Loading...</div>}>
            <Routes>
              {/* लॉगिन पेज बिना लेआउट के */}
              <Route path="/" element={<LoginPage />} />
              
              {/* Layout के साथ सभी पेजेस */}
              <Route path="/home" element={<Layout><HomePage /></Layout>} />
              <Route path="/messenger" element={<Layout><MessengerPage /></Layout>} />
              <Route path="/video-call" element={<Layout><VideoCallHub /></Layout>} />
              <Route path="/explore" element={<Layout><ExplorePage /></Layout>} />
              
              {/* यहाँ प्रोफाइल पेज Layout के अंदर है */}
              {/* याद रहे: ProfilePage.jsx के अंदर हमने hideHeader={true} सेट कर दिया है */}
              <Route path="/profile" element={<Layout><ProfilePage /></Layout>} />
              
              <Route path="/settings" element={<Layout><SettingsPage /></Layout>} />
              <Route path="/admin" element={<Layout><PremiumAdminPage /></Layout>} />
              
              <Route path="/promote" element={<Layout><PromotionForm /></Layout>} />
              <Route path="/partnerships" element={<Layout><PartnershipForm /></Layout>} />
              
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </Router>
      </AdProvider>
    </UserProvider>
  );
}

export default App;
