const { handleServiceError } = require('../utils/errorHandlers');
const { USER_MANAGEMENT_SERVICE_URL } = require('../../../config/constants');
const users = require('../data/users')


async function getUserInformation(userId) {

  console.log(users)

    const user = users.find(user => {
        return user.id == userId
    });

    
  
    if (!user) {
      throw new Error('User not found');
    }
  
    return user;
  }

async function getUserInformationByEmail(email) {

    const user = users.find(user => {
        return user.email == email
    });

    
  
    if (!user) {
      throw new Error('User not found');
    }
  
    return user;
  }

module.exports = {
  getUserInformation,
  getUserInformationByEmail
};
