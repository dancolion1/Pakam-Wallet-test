const walletService = require('../services/userWalletService');

function getWalletBalanceController(req, res) {
  const userId = req.params.userId;

  walletService.getWalletBalance(userId)
    .then(balance => {
      res.json({ balance });
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch wallet balance' });
    });
}

module.exports = {
  getWalletBalanceController,
};
