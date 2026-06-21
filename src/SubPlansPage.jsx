// PremiumPurchase.js - 3-टियर मास्टर इंजन (प्रीमियम + रीजनल + इंटरनेट)

export const getCountryPricing = (countryCode) => {
  // 1. प्रीमियम देश
  const premiumData = {
    'IN': { mult: 1, name: 'इंडिया' },
    'SA': { mult: 2, name: 'सऊदी अरब' },
    'AE': { mult: 2, name: 'यूएई (दुबई)' },
    'SG': { mult: 3, name: 'सिंगापुर' },
    'CA': { mult: 4, name: 'कनाडा' },
    'US': { mult: 5, name: 'अमेरिका' },
    'EU': { mult: 6, name: 'यूरोपीय संघ' },
    'GB': { mult: 7, name: 'यूके' },
    'JO': { mult: 7, name: 'जॉर्डन' },
    'BH': { mult: 8, name: 'बहरीन' },
    'OM': { mult: 8, name: 'ओमान' },
    'KW': { mult: 9, name: 'कुवैत' }
  };

  // 2. रीजनल देश
  const regionalData = {
    'NP': { mult: 1.1, name: 'नेपाल' },
    'LK': { mult: 1.1, name: 'श्रीलंका' },
    'BD': { mult: 1.1, name: 'बांग्लादेश' },
    'PH': { mult: 1.2, name: 'फिलीपींस' },
    'ID': { mult: 1.2, name: 'इंडोनेशिया' },
    'VN': { mult: 1.3, name: 'वियतनाम' },
    'TH': { mult: 1.3, name: 'थाईलैंड' },
    'BR': { mult: 1.4, name: 'ब्राजील' },
    'ZA': { mult: 1.4, name: 'साउथ अफ्रीका' },
    'MY': { mult: 1.5, name: 'मलेशिया' },
    'EG': { mult: 1.5, name: 'मिस्र' },
    'KE': { mult: 1.5, name: 'केन्या' }
  };

  // डेटा चुनना
  const info = premiumData[countryCode] || regionalData[countryCode] || { mult: 1.0, name: 'Global User' };

  // 30/70 कमीशन लॉजिक
  const calculateSplit = (coins) => ({
    platformShare: Math.round(coins * 0.30),
    hostShare: Math.round(coins * 0.70)
  });

  return {
    countryName: info.name,
    multiplier: info.mult,
    coinsPerMinute: Math.round(20 * info.mult),
    
    // पैकेजेस
    packages: {
      small: { coins: 2000, price: Math.round(299 * info.mult), split: calculateSplit(2000) },
      medium: { coins: 7000, price: Math.round(799 * info.mult), split: calculateSplit(7000) },
      large: { coins: 15000, price: Math.round(1499 * info.mult), split: calculateSplit(15000) }
    },

    // स्ट्राइप पेमेंट गेटवे के लिए जगह
    stripePayment: {
      enabled: true,
      provider: 'Stripe',
      currency: countryCode === 'IN' ? 'INR' : 'USD'
    }
  };
};
