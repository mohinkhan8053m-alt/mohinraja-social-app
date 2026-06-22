// PricingLogic.js - मास्टर प्राइसिंग डेटाबेस
const PRICING_MAP = {
  // प्रीमियम
  'SA': { small: 598, med: 1598, large: 2998, coins: 40, name: 'सऊदी अरब' },
  'AE': { small: 598, med: 1598, large: 2998, coins: 40, name: 'यूएई (दुबई)' },
  'SG': { small: 897, med: 2397, large: 4497, coins: 60, name: 'सिंगापुर' },
  'CA': { small: 1196, med: 3196, large: 5996, coins: 80, name: 'कनाडा' },
  'US': { small: 1495, med: 3995, large: 7495, coins: 100, name: 'अमेरिका' },
  'EU': { small: 1794, med: 4794, large: 8994, coins: 120, name: 'यूरोपीय संघ' },
  'GB': { small: 2093, med: 5593, large: 10493, coins: 140, name: 'यूके' },
  'JO': { small: 2093, med: 5593, large: 10493, coins: 140, name: 'जॉर्डन' },
  'BH': { small: 2392, med: 6392, large: 11992, coins: 160, name: 'बहरीन' },
  'OM': { small: 2392, med: 6392, large: 11992, coins: 160, name: 'ओमान' },
  'KW': { small: 2691, med: 7191, large: 13491, coins: 180, name: 'कुवैत' },
  // रीजनल
  'NP': { small: 329, med: 879, large: 1649, coins: 22, name: 'नेपाल' },
  'LK': { small: 329, med: 879, large: 1649, coins: 22, name: 'श्रीलंका' },
  'BD': { small: 329, med: 879, large: 1649, coins: 22, name: 'बांग्लादेश' },
  'PH': { small: 359, med: 959, large: 1799, coins: 24, name: 'फिलीपींस' },
  'ID': { small: 359, med: 959, large: 1799, coins: 24, name: 'इंडोनेशिया' },
  'VN': { small: 389, med: 1039, large: 1949, coins: 26, name: 'वियतनाम' },
  'TH': { small: 389, med: 1039, large: 1949, coins: 26, name: 'थाईलैंड' },
  'BR': { small: 419, med: 1119, large: 2099, coins: 28, name: 'ब्राजील' },
  'ZA': { small: 419, med: 1119, large: 2099, coins: 28, name: 'साउथ अफ्रीका' },
  'MY': { small: 449, med: 1199, large: 2249, coins: 30, name: 'मलेशिया' },
  'EG': { small: 449, med: 1199, large: 2249, coins: 30, name: 'मिस्र' },
  'KE': { small: 449, med: 1199, large: 2249, coins: 30, name: 'केन्या' },
  // इंडिया और अन्य
  'IN': { small: 299, med: 799, large: 1499, coins: 20, name: 'इंडिया' },
  'PK': { small: 299, med: 799, large: 1499, coins: 20, name: 'पाकिस्तान' },
  'NG': { small: 299, med: 799, large: 1499, coins: 20, name: 'नाइजीरिया' },
  'AR': { small: 299, med: 799, large: 1499, coins: 20, name: 'अर्जेंटीना' },
  'IR': { small: 299, med: 799, large: 1499, coins: 20, name: 'ईरान' },
  'AF': { small: 299, med: 799, large: 1499, coins: 20, name: 'अफगानिस्तान' },
  'MM': { small: 299, med: 799, large: 1499, coins: 20, name: 'म्यांमार' }
};

export const getCountryPricing = (countryCode) => {
    // अगर कोड मौजूद है तो वो रिटर्न करो, वरना 'IN' (इंडिया) का डेटा दे दो
    return PRICING_MAP[countryCode] || PRICING_MAP['IN'];
};
