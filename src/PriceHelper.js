// --- 1. ग्लोबल करेंसी और स्मार्ट डायनामिक प्राइसिंग ---
export const getCountryPricing = (countryCode) => {
  // भारत का बेस प्राइस
  const basePriceIndia = 999; 
  
  // कैटेगरीज के हिसाब से फिक्स मल्टीप्लायर
  // Tier 1 (अमीर देश - 3 से 4 गुना), Tier 2 (सामान्य), Tier 3 (इंडिया के आसपास)
  const currencyData = {
    'IN': { curr: 'INR', symbol: '₹', multiplier: 1 },    // भारत (Base)
    'US': { curr: 'USD', symbol: '$', multiplier: 0.04 }, // 1000 INR = 40 USD
    'UK': { curr: 'GBP', symbol: '£', multiplier: 0.035 },
    'AE': { curr: 'AED', symbol: 'DH', multiplier: 0.14 }, // दुबई
    'KW': { curr: 'KWD', symbol: 'KD', multiplier: 0.012 }, // कुवैत (महंगी करेंसी)
    'PK': { curr: 'PKR', symbol: '₨', multiplier: 3.2 },    // कम करेंसी वाली कंट्री
    'BD': { curr: 'BDT', symbol: '৳', multiplier: 1.4 }     // बांग्लादेश
  };

  const data = currencyData[countryCode] || currencyData['IN'];
  
  // यहाँ लॉजिक है: अगर अमीर देश है तो multiplier से गुना करें, 
  // अगर छोटी करेंसी है तो उसी हिसाब से एडजस्ट करें।
  const calculatedPrice = Math.round(basePriceIndia * data.multiplier);

  return {
    ...data,
    vipPrice: calculatedPrice,
    displayPrice: `${data.symbol}${calculatedPrice}` 
  };
};
