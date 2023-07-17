// Helper function to send a mobile notification
function sendMobileNotification(mobileNumber, amount) {
    // Hypothetical SMS service API endpoint
    const smsServiceEndpoint = 'https://api.smsprovider.com/send';
  
    // Construct the message
    const message = `Automated deposit of ${amount} failed due to insufficient funds. Please resolve the issue.`;
  
    // Prepare the payload
    const payload = {
      mobileNumber,
      message
    };
  
    // Make a POST request to the SMS service API
    axios.post(smsServiceEndpoint, payload)
      .then(response => {
        console.log(`Mobile notification sent to ${mobileNumber} successfully`);
      })
      .catch(error => {
        console.error('Failed to send mobile notification:', error.message);
      });
  }
  

// Helper function to send an email notification
function sendEmailNotification(email, amount) {
    // Create a nodemailer transporter with SMTP configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false,
      auth: {
        user: 'your_email@example.com',
        pass: 'your_password'
      }
    });
  
    // Construct the email message
    const message = {
      from: 'your_email@example.com',
      to: email,
      subject: 'Failed Automated Deposit',
      text: `Automated deposit of ${amount} failed due to insufficient funds. Please resolve the issue.`
    };
  
    // Send the email
    transporter.sendMail(message, (error, info) => {
      if (error) {
        console.error('Failed to send email notification:', error.message);
      } else {
        console.log('Email notification sent:', info.response);
      }
    });
  }
  