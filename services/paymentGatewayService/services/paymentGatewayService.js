async function processPayment(userId, amount) {
  // Simulate processing the payment
  const paymentId = 'PAYMENT_ID_' + Math.random().toString(36).substr(2, 9);
  const status = 'success';

  return { paymentId, status };
}

module.exports = {
  processPayment,
};
