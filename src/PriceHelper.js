// --- 1. ग्लोबल करेंसी और प्रीमियम प्राइसिंग इंजन ---
export const getGlobalPricing = (originCountry, targetReach) => {
  // आपका फिक्स प्रीमियम टारगेट
  const PRICE_INDIA_GLOBAL = 1000000; // ₹10 Lakh
  const PRICE_FOREIGN_GLOBAL = 2000000; // ₹20 Lakh

  // बेस करेंसी डेटा
  const currencyData = {
    'IN': { curr: 'INR', symbol: '₹', rate: 1 },
    'US': { curr: 'USD', symbol: '$', rate: 0.012 }, // 1 INR = 0.012 USD approx
    'UK': { curr: 'GBP', symbol: '£', rate: 0.009 },
    'AE': { curr: 'AED', symbol: 'DH', rate: 0.044 },
    'KW': { curr: 'KWD', symbol: 'KD', rate: 0.0036 }
  };

  // लॉजिक: अगर इंडिया का क्लाइंट है तो 10 लाख, फॉरेन है तो 20 लाख
  const basePrice = (originCountry === 'IN') ? PRICE_INDIA_GLOBAL : PRICE_FOREIGN_GLOBAL;
  
  const data = currencyData[originCountry] || currencyData['IN'];
  
  // कन्वर्टेड प्राइस
  const finalPrice = Math.round(basePrice * data.rate);

  return {
    curr: data.curr,
    symbol: data.symbol,
    displayPrice: `${data.symbol}${finalPrice.toLocaleString()}`,
    basePrice: basePrice
  };
};

// इस्तेमाल कैसे करें (उदाहरण):
// const price = getGlobalPricing('US', 'Global'); 
// यह आपको US के क्लाइंट के लिए $24,000 (लगभग) का प्रीमियम प्राइस देगा।
