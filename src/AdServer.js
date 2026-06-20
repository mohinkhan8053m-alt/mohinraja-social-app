// AdServer.js - मास्टर कंट्रोल हब

// 1. सारी जरूरी फाइलें यहाँ इंपोर्ट कर रहे हैं
import * as AdProvider from './AdProvider.jsx';
import * as BoostDashboard from './BoostDashboard.jsx';
import * as BoostConfig from './BoostConfig.js';
import * as PromotionForm from './PromotionForm.jsx';
// 'GiftServer' का इम्पोर्ट यहाँ से हटा दिया गया है ताकि लूप न बने

export const AdServer = {
  // ---------------------------------------------------------
  // अपना सर्वर लिंक यहाँ डालें, पूरी ऐप कनेक्ट हो जाएगी
  adServerUrl: "YOUR_ADS_SERVER_URL_HERE", 
  // ---------------------------------------------------------

  // 2. मास्टर डेटा गेटवे
  getAdData: async (type, data) => {
    switch (type) {
      case 'provider': return AdProvider.getAdDetails(data);
      case 'boost-dashboard': return BoostDashboard.getStats(data.user);
      case 'boost-config': return BoostConfig.getRates(data.tier);
      case 'promotion': return PromotionForm.submitPromo(data);
      case 'gift': 
        // यहाँ हमने डायनामिक इम्पोर्ट का उपयोग किया है ताकि एरर न आए
        const GiftServer = await import('./GiftServer.js');
        return GiftServer.processGift(data.senderId, data.receiverId, data.giftKey, data.countryTier, AdServer);
      default: return null;
    }
  },

  // 3. मास्टर सर्वर सिंक
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
  },

  // 4. नया हेल्पर जो गिफ्ट सर्वर को बोनस चेक करने में मदद करेगा
  getGiftBonusMultiplier: async () => {
    // यहाँ आप अपना बोनस लॉजिक लिख सकते हैं
    return 1.0; 
  }
};
