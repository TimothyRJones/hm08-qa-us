module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    addingCard: '//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div[3]',
    messageField: '//*[@id="comment"]',
    messageDriver: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[3]/div',
    cardNumberField: '//*[@id="number"]',
    codeNumberField: '(//*[@id="code"])[2]',
    signature: '//*[@id="root"]/div/div[2]/div[2]/div[2]/form/div[1]/div[2]/div[1]',
    cardAdded: '//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div[3]/div[2]',
    carSearch: '//*[@id="root"]/div/div[5]/div[2]',
    iceCreamCount: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[3]/div/div[2]/div[1]/div/div[2]/div/div[2]',
    // Buttons
    icecreamButton: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[3]/div/div[2]/div[1]/div/div[2]/div/div[3]',
    blanketHankerchief: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[1]',
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    supportiveButton: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[1]/div[5]',
    paymentMethodButton: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[2]',
    addCard: '//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div[3]',
    linkButton: '//*[@id="root"]/div/div[2]/div[2]/div[2]/form/div[3]/button[1]',
    businessButton: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[1]/div[1]',
    numberOrderButton: '//*[@id="root"]/div/div[3]/div[4]',
    // Modals
    phoneNumberModal: '.modal',
    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    selectSupportivePlan: async function() {
        const supportiveButton = await $(this.supportiveButton);
        await supportiveButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
    fillCreditCard: async function(number,code) {
        const paymentMethodButton = await $(this.paymentMethodButton);
        await $(this.paymentMethodButton).click();
        const addCard = await $(this.addCard);
        await $(this.addCard).click();
        const cardNumberField = await $(this.cardNumberField);
        await cardNumberField.setValue(number);
        const codeNumberField = await $(this.codeNumberField);
        await codeNumberField.setValue(code);
        await $(this.signature).click();
        await $(this.linkButton).click();
    },
    fillMessage: async function(messageDriver) {
        const messageField = await $(this.messageField);
        await messageField.setValue(messageDriver);
    },
    selectBlanketandHandkerchief: async function () {
        const blanketHankerchief = await $(this.blanketHankerchief);
        await blanketHankerchief.click();
    },
    selectTwoIcecream: async function () {
        const icecreamButton = await $(this.icecreamButton);
        await $(this.icecreamButton).click();
        await $(this.icecreamButton).click();
    },
    selectCarSearchModal: async function () {
        const businessButton = await $(this.businessButton);
        await $(this.businessButton).click();
        const numberOrderButton = await $(this.numberOrderButton);
        await $(this.numberOrderButton).click();
    },
}