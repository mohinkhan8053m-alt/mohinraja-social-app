import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './UserContext.jsx'; 
import { AdProvider } from './AdProvider.jsx'; 
import { ApiProvider } from './ApiContext.jsx'; 
import Layout from './Layout.jsx'; 

// मुख्य पेज (कोई भी फाइल कम नहीं की है)
const LoginPage = lazy(() => import('./LoginPage.jsx'));
const HomePage = lazy(() => import('./HomePage.jsx'));
const MessengerPage = lazy(() => import('./MessengerPage.jsx'));
const VideoCallHub = lazy(() => import('./VideoCallHub.jsx'));
const ExplorePage = lazy(() => import('./ExplorePage.jsx'));
const ProfilePage = lazy(() => import('./MasterProfilePage.jsx')); // आपका मास्टर प्रोफाइल पेज
const SettingsPage = lazy(() => import('./SettingsPage.jsx'));
const PremiumAdminPage = lazy(() => import('./PremiumAdminPage.jsx'));
const PromotionForm = lazy(() => import('./PromotionForm.jsx'));
const PartnershipForm = lazy(() => import('./PartnershipForm.jsx')); 
const WalletPage = lazy(() => import('./WalletPage.jsx'));

// अन्य फीचर्स के लिए Placeholder/Lazy loads (ताकि कोई एरर न आए)
const BankPage = lazy(() => import('./BankPage.jsx'));
const StatsPage = lazy(() => import('./StatsPage.jsx'));
const PrivacyPage = lazy(() => import('./PrivacyPage.jsx'));

function App() {
  return (
    <ApiProvider> 
      <UserProvider>
        <AdProvider>
          <Router>
            <Suspense fallback={<div style={{textAlign:'center', marginTop:'20%'}}>RangManch Loading...</div>}>
              <Routes>
                {/* Auth Routes */}
                <Route path="/" element={<LoginPage />} />
                
                {/* Main App Routes */}
                <Route path="/home" element={<Layout><HomePage /></Layout>} />
                <Route path="/messenger" element={<Layout><MessengerPage /></Layout>} />
                <Route path="/video-call" element={<Layout><VideoCallHub /></Layout>} />
                <Route path="/explore" element={<Layout><ExplorePage /></Layout>} />
                
                {/* Profile & Hub Routes */}
                <Route path="/profile" element={<Layout><ProfilePage /></Layout>} />
                <Route path="/settings" element={<Layout><SettingsPage /></Layout>} />
                <Route path="/admin" element={<Layout><PremiumAdminPage /></Layout>} />
                <Route path="/wallet" element={<Layout><WalletPage /></Layout>} />
                <Route path="/bank" element={<Layout><BankPage /></Layout>} />
                <Route path="/stats" element={<Layout><StatsPage /></Layout>} />
                <Route path="/privacy" element={<Layout><PrivacyPage /></Layout>} />
                
                {/* Action Routes */}
                <Route path="/promote" element={<Layout><PromotionForm /></Layout>} />
                <Route path="/partnerships" element={<Layout><PartnershipForm /></Layout>} />
                
                {/* Redirect */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Suspense>
          </Router>
        </AdProvider>
      </UserProvider>
    </ApiProvider>
  );
}

export default App;
