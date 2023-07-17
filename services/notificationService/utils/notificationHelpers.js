const twilio = require('twilio');
const nodemailer = require('nodemailer');
const {TWILIO, EMAIL} = require('../config/config')

// Twilio configuration
const twilioAccountSid = TWILIO.ID;
const twilioAuthToken = TWILIO.AUTH_TOKEN;
const twilioPhoneNumber = TWILIO.PHONE_NUMBER;

// Nodemailer configuration
const smtpHost = EMAIL.HOST;
const smtpPort = EMAIL.PORT;
const smtpUser = EMAIL.USERNAME;
const smtpPass = EMAIL.PASSWORD;
const from = EMAIL.FROM;

// Create a Twilio client
const twilioClient = twilio(twilioAccountSid, twilioAuthToken);

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});



//Function to send Mobile Message Notification via Twilio
function sendMobileNotification(user, amount, balance) {
    
  twilioClient.messages
    .create({
      body: `Dear ${user.name}, your automated deposit of $${amount} failed due to insufficient funds. Your current balance is $${balance}`,
      from: twilioPhoneNumber,
      to: user.mobileNumber,
    })
    .then(message => console.log(`Sent SMS to ${message.to}: ${message.body}`))
    .catch(error => console.error('Failed to send SMS:', error));
}



//Function to send Email Notification via Nodemailer
function sendEmailNotification(user, amount, balance) {
  const mailOptions = {
    from: from,
    to: user.email,
    subject: 'Deposit Failed',
    text: `Dear ${user.name}, your automated deposit of $${amount} failed due to insufficient funds. Your current balance is $${balance}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Failed to send email:', error);
    } else {
      console.log('Sent email:', info.response);
    }
  });
}



module.exports = {
  sendMobileNotification,
  sendEmailNotification,
};
