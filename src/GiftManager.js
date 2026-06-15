import { calculateCommission } from './PriceHelper'; // आपके पहले वाले कोड से कमीशन लेगा

export const handleGiftSend = (sender, receiver, giftKey) => {
  const giftPrices = {
    'hi': 10, 'heart': 50, 'rose': 100, 'hug': 250, 
    'choco': 500, 'kiss': 800, 'bike': 1500, 'car': 3000, 
    'ring': 6000, 'castle': 12000
  };

  const cost = giftPrices[giftKey];
  
  // 1. प्राइस हेल्पर से कमीशन कैलकुलेशन उठाओ
  const { platformShare, userShare } = calculateCommission(cost);

  // 2. यहाँ अपना डेटाबेस अपडेट फंक्शन चलाएं (जो आपने बनाया है)
  // deductBalance(sender, cost);
  // addEarnings(receiver, userShare);
  // addPlatformCommission(platformShare);

  return { success: true, platformShare };
};
