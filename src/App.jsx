import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './UserContext.jsx'; 
import { AdProvider } from './AdProvider.jsx'; 
import { ApiProvider } from './ApiContext.jsx'; 
import Layout from './Layout.jsx'; 
// गिफ्टिंग सर्विस इम्पोर्ट कर ली है
import { sendGift } from './GiftService.js'; 

// --- मुख्य पेजों की लोडिंग (सारी फाइलें जस की तस हैं) ---
const LoginPage = lazy(() => import('./LoginPage.jsx'));
const HomePage = lazy(() => import('./HomePage.jsx'));
const MessengerPage = lazy(() => import('./MessengerPage.jsx'));
const VideoCallHub = lazy(() => import('./VideoCallHub.jsx'));
const ExplorePage = lazy(() => import('./ExplorePage.jsx'));
const ProfilePage = lazy(() => import('./ProfilePage.jsx')); 
const EditProfilePage = lazy(() => import('./EditProfilePage.jsx'));
const SettingsPage = lazy(() => import('./SettingsPage.jsx'));
const PremiumAdminPage = lazy(() => import('./PremiumAdminPage.jsx'));
const PromotionForm = lazy(() => import('./PromotionForm.jsx'));
const PartnershipForm = lazy(() => import('./PartnershipForm.jsx')); 
const WalletPage = lazy(() => import('./WalletPage.jsx'));
const BankPage = lazy(() => import('./BankPage.jsx'));
const StatsPage = lazy(() => import('./StatsPage.jsx'));
const PrivacyPage = lazy(() => import('./PrivacyPage.jsx'));
const BoostDashboard = lazy(() => import('./BoostDashboard.jsx'));
const FeaturePage = lazy(() => import('./FeaturePage.jsx'));
const ProVideoCall = lazy(() => import('./ProVideoCall.jsx'));
const ProMessenger = lazy(() => import('./ProMessenger.jsx'));
const JoinAsCreator = lazy(() => import('./JoinAsCreator.jsx'));
const SubPlansPage = lazy(() => import('./SubPlansPage.jsx'));
const SubTiersPage = lazy(() => import('./SubTiersPage.jsx'));
const RankPage = lazy(() => import('./RankPage.jsx'));

function App() {

  // --- ग्लोबल मास्टर लिसनर: एड-फ्री और गिफ्टिंग ---
  useEffect(() => {
    const handleGlobalClick = async (e) => {
      // 1. एड-फ्री बटन हैंडलर
      if (e.target.classList.contains('ad-free-btn')) {
        e.preventDefault();
        window.location.href = '/plans'; // आपके पुराने रूट के हिसाब से
      }

      // 2. गिफ्ट बटन हैंडलर (एनीमेशन + विड्रॉल सिंक)
      if (e.target.classList.contains('gift-btn')) {
        const giftKey = e.target.getAttribute('data-gift');
        const receiverId = e.target.getAttribute('data-receiver');
        const country = 'IN'; // यहाँ डायनामिक कंट्री कोड आ जाएगा
        
        // गिफ्ट सर्विस को कॉल करें
        const result = await sendGift('senderId', receiverId, giftKey, country);
        if (result && result.animationTrigger) {
          console.log("एनीमेशन मूवमेंट सक्रिय:", result.animationTrigger);
          // एनीमेशन लॉजिक यहाँ ट्रिगर करें
        }
      }
    };
    
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <ApiProvider> 
      <UserProvider>
        <AdProvider>
          <Router>
            <Suspense fallback={<div style={{textAlign:'center', marginTop:'20%', color:'#555'}}>Loading...</div>}>
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<Layout><HomePage /></Layout>} />
                <Route path="/messenger" element={<Layout><MessengerPage /></Layout>} />
                <Route path="/video-call" element={<Layout><VideoCallHub /></Layout>} />
                
                {/* --- प्रो रूट्स --- */}
                <Route path="/pro-video-call/:id" element={<ProVideoCall />} />
                <Route path="/pro-messenger" element={<ProMessenger />} />
                <Route path="/join-creator" element={<Layout><JoinAsCreator /></Layout>} />
                
                {/* --- मास्टर फाइलें --- */}
                <Route path="/plans" element={<Layout><SubPlansPage /></Layout>} />
                <Route path="/tiers" element={<Layout><SubTiersPage /></Layout>} />
                <Route path="/rank" element={<Layout><RankPage /></Layout>} />
                
                {/* --- अन्य सभी रूट्स --- */}
                <Route path="/explore" element={<Layout><ExplorePage /></Layout>} />
                <Route path="/profile" element={<Layout><ProfilePage /></Layout>} />
                <Route path="/profile-edit" element={<Layout><EditProfilePage /></Layout>} />
                <Route path="/boost-dashboard" element={<Layout><BoostDashboard /></Layout>} />
                <Route path="/settings" element={<Layout><SettingsPage /></Layout>} />
                <Route path="/admin" element={<Layout><PremiumAdminPage /></Layout>} />
                <Route path="/wallet" element={<Layout><WalletPage /></Layout>} />
                <Route path="/bank" element={<Layout><BankPage /></Layout>} />
                <Route path="/stats" element={<Layout><StatsPage /></Layout>} />
                <Route path="/privacy" element={<Layout><PrivacyPage /></Layout>} />
                <Route path="/promote" element={<Layout><PromotionForm /></Layout>} />
                <Route path="/partnerships" element={<Layout><PartnershipForm /></Layout>} />
                
                <Route path="/:featureName" element={<Layout><FeaturePage /></Layout>} />
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
