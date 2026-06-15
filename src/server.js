app.post('/api/process-gift', async (req, res) => {
    const { senderId, receiverId, giftKey, cost } = req.body;

    // 1. कमीशन कैलकुलेशन (आपका 30% हिस्सा)
    const platformCommission = Math.floor(cost * 0.30);
    const receiverAmount = cost - platformCommission;

    // 2. डेटाबेस अपडेट (Sender से कॉइन कटें)
    await db.users.updateOne({ _id: senderId }, { $inc: { coins: -cost } });

    // 3. Receiver (लड़का या लड़की) के वॉलेट में 70% जोड़ें
    await db.users.updateOne({ _id: receiverId }, { $inc: { earnings: receiverAmount } });

    // 4. आपके एडमिन अकाउंट में 30% जोड़ें
    await db.admin.updateOne({ name: 'MoIn_Raja' }, { $inc: { revenue: platformCommission } });

    res.json({ success: true, commission: platformCommission });
});
