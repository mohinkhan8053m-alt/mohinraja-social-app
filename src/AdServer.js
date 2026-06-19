// AdServer.js - एड्स और प्रमोशन का मास्टर कंट्रोल हब

// 1. सारी जरूरी फाइलें यहाँ इंपोर्ट कर रहे हैं
import * as AdProvider from './AdProvider.jsx';
import * as BoostDashboard from './BoostDashboard.jsx';
import * as BoostConfig from './BoostConfig.js';
import * as PromotionForm from './PromotionForm.jsx';
import * as GiftManager from './GiftManager.js';

export const AdServer = {
  // ---------------------------------------------------------
  // यहाँ अपना एड्स और प्रमोशन सर्वर लिंक डालो
  adServerUrl: "YOUR_ADS_SERVER_URL_HERE", 
  // ---------------------------------------------------------

  // 2. मास्टर डेटा गेटवे (पूरी ऐप के लिए)
  getAdData: (type, data) => {
    switch (type) {
      case 'provider': return AdProvider.getAdDetails(data);
      case 'boost-dashboard': return BoostDashboard.getStats(data.user);
      case 'boost-config': return BoostConfig.getRates(data.tier);
      case 'promotion': return PromotionForm.submitPromo(data);
      case 'gift': return GiftManager.processGift(data);
      default: return null;
    }
  },

  // 3. सर्वर से डेटा सिंक करना
  syncWithServer: async (type, payload) => {
    const response = await fetch(`${AdServer.adServerUrl}/api/ads/${type}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return await response.json();
  }
};
