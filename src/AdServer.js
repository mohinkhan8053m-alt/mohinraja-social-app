// AdServer.js - फिक्स्ड मास्टर कंट्रोल हब

// अगर ये फाइलें (AdProvider, etc.) एक्सपोर्ट्स के साथ सही से बनी हैं, तो ठीक है।
// वरना इन्हें सही तरीके से इम्पोर्ट करना होगा।
import * as AdProviderModule from './AdProvider.jsx'; 
import { getStats } from './BoostDashboard.jsx';
import { getRates } from './BoostConfig.js';
import { submitPromo } from './PromotionForm.jsx';
import { sendGift } from './GiftService.js'; // सही नाम (sendGift)

// यहाँ हम चेक कर रहे हैं कि getAdDetails सीधा मिल रहा है या डिफ़ॉल्ट रूप से
const getAdDetails = AdProviderModule.getAdDetails || AdProviderModule.default || ((data) => null);

export const AdServer = {
  adServerUrl: "YOUR_ADS_SERVER_URL_HERE", 

  getAdData: async (type, data) => {
    switch (type) {
      case 'provider': return getAdDetails(data);
      case 'boost-dashboard': return getStats(data.user);
      case 'boost-config': return getRates(data.tier);
      case 'promotion': return submitPromo(data);
      case 'gift': 
        // अब हमने सही नाम (sendGift) यूज़ किया है
        return await sendGift(data.senderId, data.receiverId, data.giftKey, data.countryTier);
      default: return null;
    }
  },

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

  getGiftBonusMultiplier: async () => {
    return 1.0; 
  }
};
