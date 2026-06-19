// AdServer.js - मास्टर कंट्रोल हब

// 1. सारी जरूरी फाइलें यहाँ इंपोर्ट कर रहे हैं
import * as AdProvider from './AdProvider.jsx';
import * as BoostDashboard from './BoostDashboard.jsx';
import * as BoostConfig from './BoostConfig.js';
import * as PromotionForm from './PromotionForm.jsx';
import * as GiftServer from './GiftServer.js'; // यहाँ नाम सही कर दिया है

export const AdServer = {
  // ---------------------------------------------------------
  // अपना सर्वर लिंक यहाँ डालें, पूरी ऐप कनेक्ट हो जाएगी
  adServerUrl: "YOUR_ADS_SERVER_URL_HERE", 
  // ---------------------------------------------------------

  // 2. मास्टर डेटा गेटवे
  getAdData: (type, data) => {
    switch (type) {
      case 'provider': return AdProvider.getAdDetails(data);
      case 'boost-dashboard': return BoostDashboard.getStats(data.user);
      case 'boost-config': return BoostConfig.getRates(data.tier);
      case 'promotion': return PromotionForm.submitPromo(data);
      case 'gift': return GiftServer.processGift(data); // यहाँ GiftServer का उपयोग
      default: return null;
    }
  },

  // 3. मास्टर सर्वर सिंक (जो आपकी फाइलों का डेटा सर्वर को भेजेगा)
  syncWithServer: async (type, payload) => {
    try {
      const response = await fetch(`${AdServer.adServerUrl}/api/ads/${type}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      return await response.json();
    } catch (error) {
      console.error("Server sync error:", error);
      return { success: false, error: error.message };
    }
  }
};
