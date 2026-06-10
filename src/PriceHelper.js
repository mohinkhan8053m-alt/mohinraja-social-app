// --- 1. कंट्री और करेंसी डेटा ---
export const getCountryList = () => ['India', 'USA', 'UK'];

export const getPricing = (country) => {
  const data = {
    'India': { curr: 'INR', symbol: '₹', vip: 999, localAd: 499, adFree: 299 },
    'USA': { curr: 'USD', symbol: '$', vip: 15, localAd: 8, adFree: 5 },
    'UK': { curr: 'GBP', symbol: '£', vip: 12, localAd: 6, adFree: 4 }
  };
  // अगर देश नहीं मिला तो डिफ़ॉल्ट इंडिया का डेटा मिलेगा
  return data[country] || data['India'];
};

// --- 2. 8 फीचर्स का लॉजिक ---
export const handleFeature = (featureName) => {
  const features = {
    'VIP': "/* VIP_PAYMENT_URL_HERE */",
    'LocalAd': "/* LOCAL_AD_URL_HERE */",
    'AdFree': "/* AD_FREE_URL_HERE */",
    'Upgrade': "/* UPGRADE_URL_HERE */"
  };

  if (features[featureName]) {
    window.location.href = features[featureName];
  } else {
    switch (featureName) {
      case 'SubmitPromotion':
        alert("प्रमोशन सबमिशन फॉर्म खुल रहा है...");
        break;
      case 'Home':
        window.location.href = "/home"; // सीधा नेविगेशन
        break;
      case 'Explore':
        window.location.href = "/explore";
        break;
      case 'Create':
        alert("क्रिएट पोस्ट सेक्शन खुल रहा है...");
        break;
      default:
        console.warn(`Feature ${featureName} अभी उपलब्ध नहीं है!`);
    }
  }
};

// --- 3. व्हाट्सएप सपोर्ट ---
export const getWhatsAppLink = () => "https://wa.me/8053756591?text=Hi Moin Raja, I need help.";

// --- 4. सोशल लिंक ---
export const getInstagramLink = () => "https://www.instagram.com/moin_raja_10";
