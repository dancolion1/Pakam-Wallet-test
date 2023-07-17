// import environment variables
require("dotenv").config();



module.exports = {
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  EMAIL: {
    HOST: process.env.EMAIL_HOST,
    PORT: process.env.EMAIL_PORT,
    USERNAME: process.env.EMAIL_ID,
    PASSWORD: process.env.EMAIL_PASSWORD,
    FROM: process.env.EMAIL_FROM,
  },
  TWILIO: {
    ID: process.env.TWILIO_ID,
    AUTH_TOKEN: process.env.TWILIO_TOKEN,
    PHONE_NUMBER: process.env.TWILIO_PHONE
  }
};