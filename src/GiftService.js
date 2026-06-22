// GiftService.js - मास्टर फाइल (सब कुछ एक्सपोर्टेड, बिल्ड एरर-फ्री)

const GIFT_CATALOG = {
  'Common': { 
    'hi': { price: 10, anim: 'wave' }, 'heart': { price: 50, anim: 'heart-rain' }, 
    'rose': { price: 100, anim: 'rose-shower' }, 'hug': { price: 250, anim: 'hug-anim' }, 'choco': { price: 500, anim: 'choco-fall' } 
  },
  'Premium': { 
    'kiss': { price: 800, anim: 'kiss-fly' }, 'bike': { price: 1500, anim: 'bike-drive' }, 
    'car': { price: 3000, anim: 'luxury-car' }, 'teddy': { price: 4000, anim: 'teddy-hug' }, 'cake': { price: 5000, anim: 'cake-celebrate' } 
  },
  'Luxury': { 
    'ring': { price: 6000, anim: 'ring-shine' }, 'castle': { price: 12000, anim: 'castle-glow' }, 
    'watch': { price: 15000, anim: 'watch-time' }, 'diamond': { price: 20000, anim: 'diamond-spark' }, 'yacht': { price: 25000, anim: 'yacht-sea' } 
  },
  'Elite': { 
    'jet': { price: 50000, anim: 'jet-fly' }, 'mansion': { price: 75000, anim: 'mansion-grand' }, 
    'island': { price: 100000, anim: 'island-wave' }, 'galaxy': { price: 150000, anim: 'galaxy-spin' }, 'universe': { price: 250000, anim: 'universe-boom' } 
  }
};

const getMultiplier = (countryCode) => {
  const m = {
    'KW': 20, 'SA': 15, 'AE': 15, 'US': 15, 'EU': 15, 'GB': 15, 'JO': 15, 'BH': 15, 'OM': 15, 'SG': 12, 'CA': 10,
    'MY': 6, 'EG': 6, 'KE': 6, 'BR': 5, 'ZA': 5, 'VN': 4, 'TH': 4, 'PH': 3, 'ID': 3, 'NP': 2, 'LK': 2, 'BD': 2,
    'IN': 1, 'PK': 1, 'NG': 1, 'AR': 1, 'IR': 1, 'AF': 1, 'MM': 1
  };
  return m[countryCode] || 1;
};

// 1. यह फंक्शन PaymentServer को चाहिए (बिल्ड एरर का समाधान)
export const getGiftData = () => {
  let list = [];
  Object.keys(GIFT_CATALOG).forEach(cat => {
    Object.keys(GIFT_CATALOG[cat]).forEach(key => {
      list.push({ name: key, price: GIFT_CATALOG[cat][key].price });
    });
  });
  return list;
};

// 2. सब गिफ्ट्स एक्सपोर्ट करने के लिए
export const getAllGifts = () => GIFT_CATALOG;

// 3. गिफ्ट वैल्यू कैलकुलेशन
export const processGiftPayment = (giftKey, countryCode) => {
  let baseData = { price: 0, anim: '' };
  Object.keys(GIFT_CATALOG).forEach(cat => { 
    if (GIFT_CATALOG[cat][giftKey]) baseData = GIFT_CATALOG[cat][giftKey]; 
  });
  
  const totalCost = baseData.price * getMultiplier(countryCode);
  return {
    totalCost,
    platformShare: Math.round(totalCost * 0.30),
    userShare: Math.round(totalCost * 0.70),
    anim: baseData.anim,
    stripeReady: true
  };
};

// 4. मास्टर सेंड फंक्शन (सब कुछ इसी से होगा)
export const sendGift = async (senderId, receiverId, giftKey, countryCode) => {
  const calc = processGiftPayment(giftKey, countryCode);

  try {
    const response = await fetch(`/api/wallet/update-earnings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        senderId, receiverId, giftKey, 
        totalCost: calc.totalCost,
        moinRajaProfit: calc.platformShare, 
        recipientCredit: calc.userShare,
        animationTrigger: calc.anim,
        status: 'SUCCESS'
      })
    });
    return await response.json();
  } catch (error) {
    return { success: false, message: "Gift Server Error" };
  }
};
