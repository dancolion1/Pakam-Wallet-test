Automated Deposit Notification System
This repository contains the implementation of an Automated Deposit Notification System, which consists of four microservices: User Management, User Wallet, Payment Gateway, and Notifications.

Prerequisites
Before running the application, ensure that you have the following prerequisites installed:

Node.js (version 12 or higher)
npm (Node Package Manager)
Installation

1. Clone this repository: git clone https://github.com/destinez/automated-deposit-notification-system.git

2. Change into the project directory: cd automated-deposit-notification-system

3. Install the dependencies for each microservice. Change into each microservice directory and run:

cd ../user-management-service
npm install

cd ../user-wallet-service
npm install

cd ../payment-gateway-service
npm install

cd ../notifications-service
npm install

Configuration
The application requires some configuration settings for the microservices to communicate with each other and external services. Follow the steps below to configure the necessary settings:

Open the .env file in each microservice directory.
Set the appropriate values for the configuration variables, such as database connection strings, API keys, etc.
Save the changes and close the file.
Running the Microservices
To run the microservices, open a terminal and follow the steps below for each microservice:

Change into each of the four microservices directories and run: 
node index.js

Change back to the root directory and run: 
npm install
and
npm start

Open a web browser and visit http://localhost:8000 to access the application.

Additional Information and Assumptions

1. The microservices communicate with each other using HTTP requests. The endpoints and routes for communication are defined in the respective microservice controllers.

2. The microservices utilize the axios library for making HTTP requests to other microservices. 

3. The application includes basic error handling.

4. Each microservice has its own dummy JSON data for testing purpose.


