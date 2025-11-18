import { Then } from '@wdio/cucumber-framework';
import RegisterPage from '../pageobjects/register.page.js';
const registerPage = new RegisterPage();
    

Then("I enter email address", async function() {
    await registerPage.inputEmail.waitForDisplayed();
    await registerPage.inputEmail.setValue("arc1@mailinator.com");
})

Then(/^I enter password$/, async function() {
    await registerPage.inputPassword.waitForDisplayed();
    await registerPage.inputPassword.setValue("123456");
})

Then(/^I enter password repeatedly$/, async function() {
    await registerPage.inputPasswordConfirmm.waitForDisplayed();
    await registerPage.inputPasswordConfirmm.setValue("123456");
})

Then(/^I select a question about elder sibling$/, async function() {
    await registerPage.selectSecurityQuestion("Your eldest siblings middle name?");
})

Then(/^I write answer$/, async function() {
    await registerPage.inputAnswer.waitForDisplayed();
    await registerPage.inputAnswer.setValue("TestAnswer");
})

Then(/^I press register button$/, async function() {
    await registerPage.buttonRegister.waitForDisplayed();
    await registerPage.buttonRegister.click();
})
    