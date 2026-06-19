import { calculateCommission } from './PriceHelper.js';

// 20 गिफ्ट्स और उनकी 4 कैटेगरी का मास्टर डेटा
const GIFT_CATALOG = {
  'Common': { 'hi': 10, 'heart': 50, 'rose': 100, 'hug': 250, 'choco': 500 },
  'Premium': { 'kiss': 800, 'bike': 1500, 'car': 3000, 'teddy': 4000, 'cake': 5000 },
  'Luxury': { 'ring': 6000, 'castle': 12000, 'watch': 15000, 'diamond': 20000, 'yacht': 25000 },
  'Elite': { 'jet': 50000, 'mansion': 75000, 'island': 100000, 'galaxy': 150000, 'universe': 250000 }
};

export const sendGift = async (senderId, receiverId, giftKey, countryTier, AdServer) => {
  // 1. गिफ्ट की बेस कीमत ढूँढें (कैटेगरी से)
  let basePrice = 0;
  Object.values(GIFT_CATALOG).forEach(cat => { if (cat[giftKey]) basePrice = cat[giftKey]; });

  // 2. कंट्री टियर मल्टीप्लायर
  const multipliers = { 'Tier4': 1, 'Tier3': 4, 'Tier2': 8, 'Tier1': 15 };
  const finalCost = basePrice * (multipliers[countryTier] || 1);

  // 3. AdServer के साथ सिंक: प्रमोशन बोनस चेक करें
  const bonus = await AdServer.getGiftBonusMultiplier(); 
  const totalCost = finalCost * bonus;

  // 4. कमीशन कैलकुलेशन (PriceHelper)
  const { platformShare, userShare } = calculateCommission(totalCost);

  try {
    // 📡 एड सर्वर और पेमेंट सर्वर को डेटा भेजें
    const response = await fetch(`/api/process-gift`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        senderId, receiverId, giftKey, 
        totalCost, moinRajaProfit: platformShare, recipientCredit: userShare 
      })
    });
    
    return await response.json();
  } catch (error) {
    return { success: false, message: "गिफ्टिंग सर्वर डाउन है!" };
  }
};

// UI में दिखाने के लिए गिफ्ट्स की लिस्ट
export const getAllGifts = () => GIFT_CATALOG;
