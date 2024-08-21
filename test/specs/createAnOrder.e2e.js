const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', async ()  => {
    it('should set the address', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await expect(await $(page.toField)).toHaveValue('1300 1st St');
        await expect(await $(page.fromField)).toHaveValue('East 2nd Street, 601');
    })

    it('should select supportive plan', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        await expect(await $(page.supportiveButton)).toBeExisting();
    })
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(page.phoneNumberModal);
        await expect(phoneNumberModal).toBeExisting();
    })

    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })
    it('should add a credit card', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        await page.fillCreditCard(123412341234,12);
        await expect(await $(page.addCard)).toBeExisting();
    })
    it('should write message to driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        await page.fillMessage("Hello driver");
        await expect(await $(page.messageField)).toHaveValue('Hello driver');
    })
    it('should order a blanket and handkerchiefs', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        await page.selectBlanketandHandkerchief();
        await expect(await $(page.blanketHankerchief)).toBeExisting();
    })
    it('should order icecream', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        await page.selectTwoIcecream();
        await expect(await $(page.iceCreamCount)).toHaveText('2');
    })
    it('should appear with car search modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectCarSearchModal();
        await expect(await $(page.carSearch)).toBeExisting();
    })
})