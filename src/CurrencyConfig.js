// CurrencyConfig.js - मास्टर कोड (30 देश + 100% Profit + Stripe Ready)

export const getAdFreePricing = (countryCode) => {
  const masterData = {
    // प्रीमियम देश (11)
    'SA': { small: 499, med: 1299, large: 2499, currency: 'SAR', name: 'सऊदी अरब' },
    'AE': { small: 499, med: 1299, large: 2499, currency: 'AED', name: 'यूएई' },
    'SG': { small: 699, med: 1899, large: 3499, currency: 'SGD', name: 'सिंगापुर' },
    'CA': { small: 799, med: 2199, large: 3999, currency: 'CAD', name: 'कनाडा' },
    'US': { small: 1299, med: 3499, large: 6499, currency: 'USD', name: 'अमेरिका' },
    'EU': { small: 1299, med: 3499, large: 6499, currency: 'EUR', name: 'यूरोपीय संघ' },
    'GB': { small: 1399, med: 3799, large: 6999, currency: 'GBP', name: 'यूके' },
    'JO': { small: 1399, med: 3799, large: 6999, currency: 'JOD', name: 'जॉर्डन' },
    'BH': { small: 1599, med: 4299, large: 7999, currency: 'BHD', name: 'बहरीन' },
    'OM': { small: 1599, med: 4299, large: 7999, currency: 'OMR', name: 'ओमान' },
    'KW': { small: 2499, med: 6999, large: 12999, currency: 'KWD', name: 'कुवैत' },

    // रीजनल (12)
    'NP': { small: 199, med: 499, large: 899, currency: 'NPR', name: 'नेपाल' },
    'LK': { small: 199, med: 499, large: 899, currency: 'LKR', name: 'श्रीलंका' },
    'BD': { small: 199, med: 499, large: 899, currency: 'BDT', name: 'बांग्लादेश' },
    'PH': { small: 249, med: 599, large: 1099, currency: 'PHP', name: 'फिलीपींस' },
    'ID': { small: 249, med: 599, large: 1099, currency: 'IDR', name: 'इंडोनेशिया' },
    'VN': { small: 249, med: 599, large: 1099, currency: 'VND', name: 'वियतनाम' },
    'TH': { small: 249, med: 599, large: 1099, currency: 'THB', name: 'थाईलैंड' },
    'BR': { small: 299, med: 799, large: 1499, currency: 'BRL', name: 'ब्राजील' },
    'ZA': { small: 299, med: 799, large: 1499, currency: 'ZAR', name: 'साउथ अफ्रीका' },
    'MY': { small: 299, med: 799, large: 1499, currency: 'MYR', name: 'मलेशिया' },
    'EG': { small: 299, med: 799, large: 1499, currency: 'EGP', name: 'मिस्र' },
    'KE': { small: 299, med: 799, large: 1499, currency: 'KES', name: 'केन्या' },

    // इंडिया और अन्य (7)
    'IN': { small: 199, med: 499, large: 899, currency: 'INR', name: 'इंडिया' },
    'PK': { small: 199, med: 499, large: 899, currency: 'PKR', name: 'पाकिस्तान' },
    'NG': { small: 199, med: 499, large: 899, currency: 'NGN', name: 'नाइजीरिया' },
    'AR': { small: 199, med: 499, large: 899, currency: 'ARS', name: 'अर्जेंटीना' },
    'IR': { small: 199, med: 499, large: 899, currency: 'IRR', name: 'ईरान' },
    'AF': { small: 199, med: 499, large: 899, currency: 'AFN', name: 'अफगानिस्तान' },
    'MM': { small: 199, med: 499, large: 899, currency: 'MMK', name: 'म्यांमार' },

    'GLOBAL': { small: 599, med: 1599, large: 2999, currency: 'USD', name: 'Global' }
  };

  const info = masterData[countryCode] || masterData['GLOBAL'];

  return {
    ...info,
    plans: {
      monthly: { price: info.small, months: 1, bonus: '0%' },
      quarterly: { price: info.med, months: 3, bonus: '10% Bonus' },
      yearly: { price: info.large, months: 6, bonus: '25% Bonus' }
    },
    stripeConfig: { enabled: true, fallback: true } // पेमेंट गेटवे और फॉलबैक सिस्टम ऑन
  };
};
