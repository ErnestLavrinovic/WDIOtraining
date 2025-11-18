import { Then } from '@wdio/cucumber-framework';
import HomeworkPage from '../pageobjects/homework.page.js';
const homeworkPage = new HomeworkPage();

Then(/^I press on language select dropdown$/, async function() {
    await homeworkPage.dropdownLanguageSelect.waitForDisplayed();
    await homeworkPage.dropdownLanguageSelect.click();
    await browser.keys('Escape');
})

Then(/^I verify title All Products is displayed$/, async function() {
    await homeworkPage.titleAllProducts.waitForDisplayed();
    await expect(homeworkPage.titleAllProducts).toHaveText("All Products");
})

Then(/^I verify visibility of page select size dropdown menu$/, async function() {
    await homeworkPage.dropdownPageSizeSelect.scrollIntoView();
    await homeworkPage.dropdownPageSizeSelect.waitForDisplayed();

})

Then(/^I press on current items in page textbox$/, async function() {
    await homeworkPage.textboxCurrentItemsInPage.waitForDisplayed();
    await homeworkPage.textboxCurrentItemsInPage.click();
})

Then(/^I press on next page button$/, async function() {
    await homeworkPage.buttonNextPage.waitForDisplayed();
    await homeworkPage.buttonNextPage.click();
})

Then(/^I press on previous page button$/, async function() {
    await homeworkPage.buttonPreviousPage.waitForDisplayed();
    await homeworkPage.buttonPreviousPage.click();
})

Then(/^I press on menu subtitle Contact us in side menu$/, async function() {
    await homeworkPage.sideMenuContactUsOption.waitForDisplayed();
    await homeworkPage.sideMenuContactUsOption.click();
})

Then(/^I press on menu ontion About us in side menu$/, async function() {
    await homeworkPage.sideMenuAboutUsOption.waitForDisplayed();
    await homeworkPage.sideMenuAboutUsOption.click();
})

Then(/^I press on Version info text box in side menu$/, async function() {
    await homeworkPage.sideMenuVersionInfoTextBox.waitForDisplayed();
    await homeworkPage.sideMenuVersionInfoTextBox.click();
})
