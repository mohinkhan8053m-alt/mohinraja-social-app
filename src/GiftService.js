// GiftService.js - फाइनल आत्मनिर्भर कोड (सब कुछ इसी फाइल के अंदर)

const GIFT_CATALOG = {
  'Common': { 'hi': 10, 'heart': 50, 'rose': 100, 'hug': 250, 'choco': 500 },
  'Premium': { 'kiss': 800, 'bike': 1500, 'car': 3000, 'teddy': 4000, 'cake': 5000 },
  'Luxury': { 'ring': 6000, 'castle': 12000, 'watch': 15000, 'diamond': 20000, 'yacht': 25000 },
  'Elite': { 'jet': 50000, 'mansion': 75000, 'island': 100000, 'galaxy': 150000, 'universe': 250000 }
};

// कमीशन कैलकुलेशन का अपना फंक्शन (30% कंपनी / 70% यूजर)
const calculateCommission = (total) => {
  return { 
    platformShare: Math.round(total * 0.30), 
    userShare: Math.round(total * 0.70) 
  };
};

// गिफ्ट डेटा एक्सपोर्ट (PaymentServer के लिए जरूरी)
export const getGiftData = () => {
  let list = [];
  Object.keys(GIFT_CATALOG).forEach(cat => {
    Object.keys(GIFT_CATALOG[cat]).forEach(key => {
      list.push({ name: key, price: GIFT_CATALOG[cat][key] });
    });
  });
  return list;
};

// गिफ्ट भेजने और सारा हिसाब करने का मास्टर फंक्शन
export const sendGift = async (senderId, receiverId, giftKey, countryTier, AdServer) => {
  // 1. गिफ्ट की बेस कीमत
  let basePrice = 0;
  Object.keys(GIFT_CATALOG).forEach(cat => { if (GIFT_CATALOG[cat][giftKey]) basePrice = GIFT_CATALOG[cat][giftKey]; });

  // 2. कंट्री टियर हिसाब
  const multipliers = { 'Tier4': 1, 'Tier3': 4, 'Tier2': 8, 'Tier1': 15 };
  const finalCost = basePrice * (multipliers[countryTier] || 1);

  // 3. बोनस कैलकुलेशन
  const bonus = await AdServer.getGiftBonusMultiplier(); 
  const totalCost = finalCost * bonus;

  // 4. कमीशन का हिसाब (अब इसी फाइल का फंक्शन यूज हो रहा है)
  const { platformShare, userShare } = calculateCommission(totalCost);

  try {
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

// बैकअप फंक्शन्स
export const getAllGifts = () => GIFT_CATALOG;
export const getGifts = () => getGiftData();
