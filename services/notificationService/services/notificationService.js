// const { getUserInformation } = require('../../userManagementService');
// const { checkWalletBalance } = require('../../userWalletService');
const { processPayment } = require('../../paymentGatewayService');
const { sendMobileNotification, sendEmailNotification } = require('../utils/notificationHelpers');

const axios = require('axios');
// const { handleServiceError } = require('../utils/errorHandlers');
const { USER_MANAGEMENT_SERVICE_URL, USER_WALLET_SERVICE_URL, PAYMENT_GATEWAY_SERVICE_URL } = require('../../../config/constants');

async function sendDepositNotification(userId, amount, notificationType) {
  try {
    //Fetch the user information from the User Management Service
    const response = await axios.get(`${USER_MANAGEMENT_SERVICE_URL}/users/${userId}`);
    const user = response.data;

    //Fetch the user wallet balance information from the User Wallet Service
    const response2 = await axios.get(`${USER_WALLET_SERVICE_URL}/wallets/${userId}/balance`);
    const walletBalance = response2.data.balance;

    //Send notification notifying user about incomplete transaction as a result of INSUFFICIENT FUNDS
    if (walletBalance < amount) {
      if (notificationType === 'mobile') {
        sendMobileNotification(user, amount, walletBalance);
      } 
      else if (notificationType === 'email') {
        sendEmailNotification(user, amount, walletBalance);
      } 
      else {
        throw new Error('Invalid notification type');
      }
    }

    //Successful transaction through Payment Gateway Microservice
    else{

        let payload = {
            userId,
            amount
        }

        try {
            const pay = await axios.post(`${PAYMENT_GATEWAY_SERVICE_URL}/payments`, payload);
            const response = pay.data;

            console.log(response);
            return response;

        } catch (error) {
            console.error('Failed to pay:', error.message);
        }
    }

  } catch (error) {
    console.error('Failed to send deposit notification:', error.message);
  }
}

module.exports = {
  sendDepositNotification,
};
