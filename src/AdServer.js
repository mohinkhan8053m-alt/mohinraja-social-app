import { getAdDetails } from './AdProvider.jsx'; 
import { getStats } from './BoostDashboard.jsx';
import { getRates } from './BoostConfig.js';
import { submitPromo } from './PromotionForm.jsx';
import { sendGift } from './GiftService.js';

export const AdServer = {
  adServerUrl: "YOUR_ADS_SERVER_URL_HERE", 

  getAdData: async (type, data) => {
    switch (type) {
      case 'provider': return getAdDetails(data);
      case 'boost-dashboard': return getStats(data.user);
      case 'boost-config': return getRates(data.tier);
      case 'promotion': return submitPromo(data);
      case 'gift': 
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
