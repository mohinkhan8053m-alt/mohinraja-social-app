import React, { useState } from 'react';
import { getPricing, getCountryList, getWhatsAppLink } from './PriceHelper';

export default function App() {
  const [country, setCountry] = useState('India');
  // यहाँ से करेंसी और रेट्स अपने आप अपडेट होंगे
  const pricing = getPricing(country);
  
  const theme = { bg: '#000', gold: '#fbbf24', cardBg: '#111', border: '1px solid #fbbf24' };

  // पेमेंट का असली लॉजिक (URL जनरेशन)
  const handlePayment = (planName) => {
    const paymentBaseUrl = "https://your-payment-gateway-link.com/checkout"; // अपना पेमेंट लिंक यहाँ डालें
    window.location.href = `${paymentBaseUrl}?plan=${planName}&currency=${pricing.curr}&country=${country}`;
  };

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: '#fff', padding: '20px', fontFamily: 'serif' }}>
      <h1 style={{ textAlign: 'center', color: theme.gold }}>Moin Raja Dashboard</h1>

      {/* कंट्री और करेंसी सिलेक्शन (मल्टी-करेंसी फीचर) */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <p>Current Currency: <strong>{pricing.curr} ({pricing.symbol})</strong></p>
        <select onChange={(e) => setCountry(e.target.value)} style={{ padding: '10px', borderRadius: '5px', background: '#333', color: '#fff' }}>
          {getCountryList().map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      
      {/* प्लान्स का ग्रिड */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '600px', margin: '0 auto' }}>
        
        {/* VIP प्लान */}
        <div style={{ background: theme.cardBg, border: theme.border, padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
          <h3 style={{ color: theme.gold }}>VIP Plan</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{pricing.symbol}{pricing.vip}</p>
          <button onClick={() => handlePayment('VIP')} style={{ width: '100%', background: theme.gold, color: '#000', padding: '10px', borderRadius: '15px', border: 'none', cursor: 'pointer' }}>Buy Now</button>
        </div>

        {/* Local Ad */}
        <div style={{ background: theme.cardBg, border: theme.border, padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
          <h3 style={{ color: theme.gold }}>Local Ad</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{pricing.symbol}{pricing.localAd}</p>
          <button onClick={() => handlePayment('LocalAd')} style={{ width: '100%', background: '#166534', color: '#fff', padding: '10px', borderRadius: '15px', border: 'none', cursor: 'pointer' }}>Promote</button>
        </div>

        {/* Ad Free */}
        <div style={{ background: theme.cardBg, border: theme.border, padding: '20px', borderRadius: '20px', textAlign: 'center' }}>
          <h3 style={{ color: theme.gold }}>Ad Free</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{pricing.symbol}{pricing.adFree}</p>
          <button onClick={() => handlePayment('AdFree')} style={{ width: '100%', background: '#1e40af', color: '#fff', padding: '10px', borderRadius: '15px', border: 'none', cursor: 'pointer' }}>Upgrade</button>
        </div>

        {/* सपोर्ट कार्ड */}
        <div style={{ background: theme.cardBg, border: theme.border, padding: '20px', borderRadius: '20px', textAlign: 'center', gridColumn: 'span 2' }}>
          <h3 style={{ color: theme.gold }}>Need Help?</h3>
          <a href={getWhatsAppLink()} style={{ background: '#25D366', color: '#fff', padding: '12px 30px', borderRadius: '20px', textDecoration: 'none', display: 'inline-block' }}>Chat on WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
