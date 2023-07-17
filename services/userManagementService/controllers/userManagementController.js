const userService = require('../services/userService');

function getUserInformationController(req, res) {
  const userId = req.params.id;

  userService.getUserInformation(userId)
    .then(user => {
      res.json(user);
    })
    .catch(error => {
        console.log(error);
      res.status(500).json({ error: 'Failed to fetch user information' });
    });
}

function getUserInformationByEmailController(req, res) {
  const email = req.params.email;

  userService.getUserInformationByEmail(email)
    .then(user => {
      res.json(user);
    })
    .catch(error => {
        console.log(error);
      res.status(500).json({ error: 'Failed to fetch user information' });
    });
}

module.exports = {
  getUserInformationController,
  getUserInformationByEmailController
};
