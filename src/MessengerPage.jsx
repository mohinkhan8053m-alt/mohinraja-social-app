// प्रोफेशनल मैसेंजर पेज लेआउट
<div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#f4f4f4' }}>
  
  {/* 1. प्रोफेशनल हेडर - यहाँ थ्री-डॉट और वीडियो कॉल बटन हैं */}
  <header style={{ padding: '15px', background: '#fff', display: 'flex', alignItems: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
    <button onClick={goBack}>←</button>
    <h3 style={{ margin: '0 15px', flex: 1 }}>{activeChat.name}</h3>
    <button onClick={toggleMenu}>⋮</button>
    <button onClick={startVideoCall}>🎥</button>
  </header>

  {/* 2. विज्ञापन डैशबोर्ड (Ad-Dashboard) - यहीं पॉप-अप्स आएंगे */}
  <div style={{ background: '#fff9c4', padding: '10px', textAlign: 'center', fontSize: '13px', borderBottom: '1px solid #ffe082' }}>
    📢 [GLOBAL] Ad: Professional Business Promotion
  </div>

  {/* 3. मुख्य चैट एरिया (यहाँ मैसेज आएंगे) */}
  <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
    {/* यहाँ मैसेज चैट्स रेंडर होंगे */}
  </div>

  {/* 4. टूलबार (AI, Gift, Location आदि) - ये बटन्स अब यहीं नीचे दिखेंगे */}
  <div style={{ background: '#fff', padding: '10px', display: 'flex', gap: '10px', borderTop: '1px solid #ddd' }}>
    <button>🤖 AI</button>
    <button>🎁 Gift</button>
    <button>📍 Loc</button>
    <input type="text" placeholder="Type a message..." style={{ flex: 1, padding: '8px', borderRadius: '20px', border: '1px solid #ccc' }} />
    <button style={{ background: '#007bff', color: '#fff', borderRadius: '50%', width: '40px' }}>➤</button>
  </div>
</div>
