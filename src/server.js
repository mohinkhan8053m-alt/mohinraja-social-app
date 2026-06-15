app.post('/api/process-gift', async (req, res) => {
    const { senderId, receiverId, giftKey, cost } = req.body;

    const platformCommission = Math.floor(cost * 0.30);
    const receiverAmount = cost - platformCommission;

    // डेटाबेस अपडेट्स
    await db.users.updateOne({ _id: senderId }, { $inc: { coins: -cost } });
    await db.users.updateOne({ _id: receiverId }, { $inc: { earnings: receiverAmount } });
    await db.admin.updateOne({ name: 'MoIn_Raja' }, { $inc: { revenue: platformCommission } });

    // --- यहाँ नया अपडेट ---
    // हर ट्रांजेक्शन का हिसाब रखें (History/Log)
    await db.transactions.insertOne({
        sender: senderId,
        receiver: receiverId,
        amount: cost,
        commission: platformCommission,
        timestamp: new Date()
    });

    res.json({ success: true, commission: platformCommission });
});
