import { calculateCommission } from './PriceHelper.js';
// Context से सर्वर का लिंक पाने के लिए हमें यहाँ थोड़ी मदद चाहिए
// हम इसे एक 'API Helper' फाइल से कॉल करेंगे, लेकिन यहाँ मैं आपको सीधा फिक्स दे रहा हूँ:

export const sendGift = async (senderId, receiverId, giftKey, countryTier, proServer) => {
  const basePrices = {
    'hi': 10, 'heart': 50, 'rose': 100, 'hug': 250, 
    'choco': 500, 'kiss': 800, 'bike': 1500, 'car': 3000, 
    'ring': 6000, 'castle': 12000
  };

  const multipliers = { 'Tier4': 1, 'Tier3': 4, 'Tier2': 8, 'Tier1': 15 };
  const cost = basePrices[giftKey] * (multipliers[countryTier] || 1);

  // मास्टर कमीशन कैलकुलेशन (30% आपका, 70% रिसीवर का)
  const { platformShare, userShare } = calculateCommission(cost);

  try {
    const response = await fetch(`${proServer}/api/process-gift`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        senderId, 
        receiverId, 
        giftKey, 
        totalCost: cost,
        moinRajaProfit: platformShare, 
        recipientCredit: userShare
      })
    });
    
    if (!response.ok) throw new Error("गिफ्ट नहीं जा पाया!");
    
    return await response.json();
  } catch (error) {
    console.error("Gift Error:", error);
    return { success: false, message: "सर्वर डाउन है, बाद में ट्राई करें।" };
  }
};
