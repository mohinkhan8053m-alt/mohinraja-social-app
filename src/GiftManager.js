// गिफ्टिंग का मास्टर फंक्शन
export const sendGift = async (senderId, receiverId, giftKey, countryTier) => {
  const basePrices = {
    'hi': 10, 'heart': 50, 'rose': 100, 'hug': 250, 
    'choco': 500, 'kiss': 800, 'bike': 1500, 'car': 3000, 
    'ring': 6000, 'castle': 12000
  };

  // कंट्री टियर के हिसाब से रेट बढ़ाना (4 गुना तक)
  const multipliers = { 'Tier4': 1, 'Tier3': 4, 'Tier2': 8, 'Tier1': 15 };
  
  const cost = basePrices[giftKey] * (multipliers[countryTier] || 1);

  // सर्वर को रिक्वेस्ट भेजें (पेमेंट और डेटाबेस अपडेट के लिए)
  const response = await fetch('/api/process-gift', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ senderId, receiverId, giftKey, cost })
  });
  
  return await response.json();
};
