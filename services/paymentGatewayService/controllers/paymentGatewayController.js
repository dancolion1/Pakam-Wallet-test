function processPaymentController(req, res) {
  const { userId, amount } = req.body;

  // Simulate processing the payment
  const paymentId = 'PAYMENT_ID_' + Math.random().toString(36).substr(2, 9);
  const status = 'success';

  res.json({ paymentId, status });
}

module.exports = {
  processPaymentController,
};
