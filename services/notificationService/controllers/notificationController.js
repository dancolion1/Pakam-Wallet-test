const notificationService = require('../services/notificationService');

function sendDepositNotificationController(req, res) {
  const { userId, amount, notificationType } = req.body;


  notificationService.sendDepositNotification(userId, amount, notificationType)
    .then(() => {
      res.status(200).json({ message: 'Deposit notification sent successfully' });
    })
    .catch(error => {
        console.log(error);
      res.status(500).json({ error: 'Failed to send deposit notification' });
    });
}

module.exports = {
  sendDepositNotificationController,
};
