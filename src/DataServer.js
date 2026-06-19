// DataServer.js - 6 फाइलों का मास्टर हब
export const DataServer = {

  // 1. HomePage के लिए डेटा
  getCreators: async () => {
    return [
      { id: 1, name: 'Sara', country: 'India', gender: 'female', coins: 100, isVerified: true, img: 'https://via.placeholder.com/150' },
      { id: 2, name: 'John', country: 'USA', gender: 'male', coins: 250, isVerified: false, img: 'https://via.placeholder.com/150' }
    ];
  },

  // 2. ExplorePage के लिए फीचर चेक
  checkFeature: async (path) => {
    return true; // फीचर एक्सेस लॉजिक
  },

  // 3. FeaturePage के लिए डायनामिक डेटा
  getFeatureDetails: async (featureName) => {
    return { name: featureName, status: 'Active', version: '2.0' };
  },

  // 4. RankPage के लिए लीडरबोर्ड
  getTopRankings: async () => {
    return [
      { id: 1, name: 'Sara', totalEarnings: 5000, img: 'https://via.placeholder.com/150' },
      { id: 2, name: 'John', totalEarnings: 3000, img: 'https://via.placeholder.com/150' }
    ];
  },

  // 5. SettingsPage के लिए सर्वर स्टेटस
  checkStatus: async () => {
    return "Connected (Online)";
  },

  // 6. PrivacyPage के लिए सेटिंग्स हैंडलर
  getPrivacySettings: async () => {
    return { private: false, blockComments: true, hideStatus: false, globalSearch: true };
  },
  updatePrivacy: async (id, status) => {
    console.log(`🔒 Updating ${id} to ${status}`);
    return true;
  }
};
