import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './UserContext.jsx'; 
import { AdProvider } from './AdProvider.jsx'; 
import { ApiProvider } from './ApiContext.jsx'; 
import Layout from './Layout.jsx'; 

// मुख्य पेज (सभी फाइल्स बरकरार)
const LoginPage = lazy(() => import('./LoginPage.jsx'));
const HomePage = lazy(() => import('./HomePage.jsx'));
const MessengerPage = lazy(() => import('./MessengerPage.jsx'));
const VideoCallHub = lazy(() => import('./VideoCallHub.jsx'));
const ExplorePage = lazy(() => import('./ExplorePage.jsx'));
const MasterProfilePage = lazy(() => import('./MasterProfilePage.jsx')); 
const SettingsPage = lazy(() => import('./SettingsPage.jsx'));
const PremiumAdminPage = lazy(() => import('./PremiumAdminPage.jsx'));
const PromotionForm = lazy(() => import('./PromotionForm.jsx'));
const PartnershipForm = lazy(() => import('./PartnershipForm.jsx')); 
const WalletPage = lazy(() => import('./WalletPage.jsx'));
const BankPage = lazy(() => import('./BankPage.jsx'));
const StatsPage = lazy(() => import('./StatsPage.jsx'));
const PrivacyPage = lazy(() => import('./PrivacyPage.jsx'));
const EditProfilePage = lazy(() => import('./EditProfilePage.jsx')); // नया: एडिट पेज
const BoostDashboard = lazy(() => import('./BoostDashboard.jsx')); // नया: बूस्ट पेज

function App() {
  return (
    <ApiProvider> 
      <UserProvider>
        <AdProvider>
          <Router>
            <Suspense fallback={<div style={{textAlign:'center', marginTop:'20%', color:'#555'}}>RangManch Loading...</div>}>
              <Routes>
                {/* 1. ऑथेंटिकेशन */}
                <Route path="/" element={<LoginPage />} />
                
                {/* 2. मुख्य डैशबोर्ड */}
                <Route path="/home" element={<Layout><HomePage /></Layout>} />
                <Route path="/messenger" element={<Layout><MessengerPage /></Layout>} />
                <Route path="/video-call" element={<Layout><VideoCallHub /></Layout>} />
                <Route path="/explore" element={<Layout><ExplorePage /></Layout>} />
                
                {/* 3. प्रोफाइल और मास्टर्स फीचर्स */}
                <Route path="/profile" element={<Layout><MasterProfilePage /></Layout>} />
                <Route path="/profile-edit" element={<Layout><EditProfilePage /></Layout>} />
                <Route path="/boost-dashboard" element={<Layout><BoostDashboard /></Layout>} />
                
                {/* 4. सेटिंग्स और एडमिन */}
                <Route path="/settings" element={<Layout><SettingsPage /></Layout>} />
                <Route path="/admin" element={<Layout><PremiumAdminPage /></Layout>} />
                <Route path="/wallet" element={<Layout><WalletPage /></Layout>} />
                <Route path="/bank" element={<Layout><BankPage /></Layout>} />
                <Route path="/stats" element={<Layout><StatsPage /></Layout>} />
                <Route path="/privacy" element={<Layout><PrivacyPage /></Layout>} />
                
                {/* 5. प्रमोशन और पार्टनरशिप */}
                <Route path="/promote" element={<Layout><PromotionForm /></Layout>} />
                <Route path="/partnerships" element={<Layout><PartnershipForm /></Layout>} />
                
                {/* 6. गलत राउट पर होम पर भेजें */}
                <Route path="*" element={<Navigate to="/home" />} />
              </Routes>
            </Suspense>
          </Router>
        </AdProvider>
      </UserProvider>
    </ApiProvider>
  );
}

export default App;
