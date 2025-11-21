import { Then } from "@wdio/cucumber-framework"
import ComnplaintPage from "../pageobjects/complaint.page.js"
const complaintPage = new ComnplaintPage();

Then(/^I type and send message "I don't like tomato juice"$/, async function() {
    await complaintPage.textAreaMessage.waitForDisplayed();
    await complaintPage.textAreaMessage.setValue("I don't like tomato juice");
    await complaintPage.buttonSubmit.waitForDisplayed();
    await complaintPage.buttonSubmit.click();
})

Then(/^I see confirmation that message has been sent$/, async function() {
    await complaintPage.confirmationTextArea.waitForDisplayed();
    await expect(await complaintPage.confirmationTextArea).toHaveText(expect.stringContaining("Customer support will get in touch with you soon! Your complaint reference is"));
})
