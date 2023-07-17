  const wallets = require('../data/wallets')
  
  async function getWalletBalance(userId) {
    const wallet = wallets.find(wallet => wallet.userId === userId);
  
    if (!wallet) {
      return error = 'Wallet not found';
    }
  
    return wallet.balance;
  }
  
  module.exports = {
    getWalletBalance,
  };
  