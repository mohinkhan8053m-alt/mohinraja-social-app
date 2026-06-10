// --- 1. कंट्री और करेंसी डेटा ---
export const getCountryList = () => ['India', 'USA', 'UK'];

export const getPricing = (country) => {
  const data = {
    'India': { curr: 'INR', symbol: '₹', vip: 999, localAd: 499, adFree: 299 },
    'USA': { curr: 'USD', symbol: '$', vip: 15, localAd: 8, adFree: 5 },
    'UK': { curr: 'GBP', symbol: '£', vip: 12, localAd: 6, adFree: 4 }
  };
  return data[country] || data['India'];
};

// --- 2. 8 फीचर्स का लॉजिक (सर्वर लिंक यहाँ खाली छोड़ दिए हैं) ---
export const handleFeature = (featureName) => {
  switch (featureName) {
    case 'VIP':
      window.location.href = "/* VIP_PAYMENT_URL_HERE */";
      break;
    case 'LocalAd':
      window.location.href = "/* LOCAL_AD_URL_HERE */";
      break;
    case 'AdFree':
      window.location.href = "/* AD_FREE_URL_HERE */";
      break;
    case 'SubmitPromotion':
      alert("प्रमोशन सबमिशन फॉर्म खुल रहा है...");
      break;
    case 'Upgrade':
      window.location.href = "/* UPGRADE_URL_HERE */";
      break;
    case 'Home':
      console.log("Home पर जा रहे हैं");
      break;
    case 'Explore':
      console.log("Explore सेक्शन खुल रहा है");
      break;
    case 'Create':
      console.log("Create बटन दबाया गया");
      break;
    default:
      console.log("Feature not found");
  }
};

// --- 3. व्हाट्सएप सपोर्ट ---
export const getWhatsAppLink = () => {
  return "https://wa.me/8053756591?text=Hi Moin Raja, I need help.";
};

// --- 4. सोशल लिंक ---
export const getInstagramLink = () => {
  return "https://www.instagram.com/moin_raja_10";
};
