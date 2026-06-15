// TransactionLogger.js
export const logTransaction = async (data) => {
  // यह फाइल डेटाबेस में एक 'Logs' नाम का कलेक्शन बनाएगी
  await db.logs.insertOne({
    ...data,
    timestamp: new Date(),
    status: 'COMPLETED'
  });
};
