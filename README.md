Webdriver IO Sauce Labs Ecommerce


Features
WDIO 6
Sauce Labs
Mocha
ESLint
Prettier
Page Object Model


Requirements
Node version 16 or higher


Quick Start
Clone the git repo: git clone https://github.com/Isaguiar/WebDriver-IO-Sauce-Ecommerce.git
Install the dependencies: npm install
It is not necessary to set environment variables with sauce labs credentials. Since they are not critical information, they have already been set in wdio.con.js.

SAUCE_USERNAME
SAUCE_ACCESS_KEY


Run the Tests
You can either run the tests with the following terminal command:

npx wdio run wdio.conf.js


Technical Details
This project works with WDIO async mode. The sync mode is deprecated. No support is expected to be given from Node16 on due to changes in Chromium.

