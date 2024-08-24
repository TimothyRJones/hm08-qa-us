Project Name: Project 8
Project Description: Writing tests for the Urban Routes website in the createAnOrder.e2e.js file and running them to make sure they all function properly. 
Technologies and Techniques used: macOS Monterey Version 12.7.6 (21H1320), Google Chrome Version 127.0.3, Visual Studio Code - for IDE, and javascript, npm and Node.js 
Instructions: Go to github and open HM08-QA-US, clone the repository to your computer, use Visual Studio Code and open a new terminal, run npm install, the tests are in createAnOrder.e2e.js, before running the tests make sure to change the baseURL in wdio.conf.js with a newly generated Urban Routes URL, type npm run wdio in terminal to run the test automations. 

Test Instruction:

Test 1: should set the address

Description: This test verifies that the 'From' and 'To' address fields are correctly filled.

Steps:

Open browserURL.
Fill in the 'From' and 'To' address fields.
Check that the 'From' and 'To' address are correct and located on Urban Routes.

Test 2: should select supportive plan

Description: This test verifies that the supportive plan can be selected.

Steps:

Open browserURL.
Fill in the address fields.
Select the supportive plan.
Check that the supportive plan is displayed.

Test 3: should open phone number modal

Description: This test ensures that clicking the phone number button opens the phone number modal.

Steps:

Open browserURL.
Fill in the address fields.
Click the phone number button.
Check that the phone number modal is displayed.

Test 4: should save the phone

Description: This test verifies that a phone number can be saved.

Steps:

Open browserURL.
Fill in the address fields.
Submit a phone number.
Check that the phone number is displayed and saved.

Test 5: should add a credit card

Description: This test checks that a credit card can be added to the order.

Steps:

Open browserURL.
Fill in the address fields.
Select the supportive plan.
Fill in the credit card information.
Check that the credit card is added.

Test 6: should write message to driver

Description: This test ensures that a message can be written to the driver.

Steps:

Open browserURL.
Fill in the address fields.
Select the supportive plan.
Write a message to the driver.
Check that the message is correctly filled in.

Test 7: should order a blanket and handkerchiefs

Description: This test verifies that the user can order a blanket and handkerchiefs.

Steps:

Open the browserURL.
Fill in the address fields.
Select the supportive plan.
Order a blanket and handkerchiefs.
Check that the items are added to the order.

Test 8: should order icecream

Description: This test ensures that two ice creams can be ordered.

Steps:

Open the browserURL.
Fill in the address fields.
Select the supportive plan.
Order two ice creams.
Check that two ice creams are added to the order.

Test 9: should appear with car search modal

Description: This test checks that the car search modal appears.

Steps:

Open the browserURL.
Fill in the address fields.
Select the business car in the car search modal.
Click the number and order button
Check that the car search modal is displayed.

