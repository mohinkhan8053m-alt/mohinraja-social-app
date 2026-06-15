// गिफ्टिंग का मास्टर फंक्शन (अप्डेटेड)
import { calculateCommission } from './PriceHelper.js'; // मास्टर इंजन से कमीशन फंक्शन लिया

export const sendGift = async (senderId, receiverId, giftKey, countryTier) => {
  const basePrices = {
    'hi': 10, 'heart': 50, 'rose': 100, 'hug': 250, 
    'choco': 500, 'kiss': 800, 'bike': 1500, 'car': 3000, 
    'ring': 6000, 'castle': 12000
  };

  const multipliers = { 'Tier4': 1, 'Tier3': 4, 'Tier2': 8, 'Tier1': 15 };
  const cost = basePrices[giftKey] * (multipliers[countryTier] || 1);

  // --- यहाँ हुआ मास्टर अपडेट ---
  // गिफ्ट भेजने से पहले ही 30% कमीशन अलग कर लिया
  const { platformShare, userShare } = calculateCommission(cost);

  // अब सर्वर को पूरी जानकारी भेजें
  const response = await fetch('/api/process-gift', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      senderId, 
      receiverId, 
      giftKey, 
      totalCost: cost,
      moinRajaProfit: platformShare, // आपका फिक्स 30% हिस्सा
      recipientCredit: userShare     // जिसे गिफ्ट मिला उसका 70%
    })
  });
  
  return await response.json();
};
