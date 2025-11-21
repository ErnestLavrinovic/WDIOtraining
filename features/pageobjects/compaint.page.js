import BasePage from "./base.page.js";

export default class ComplaintPage extends BasePage {
    constructor() {
        super();
    }
    get title() {
        return browser.$('//h1[text()="Complaint"]');
    }
    get inputCustomerEmail() {
        return browser.$('[aria-label="Text field for the mail adress of the user"]');
    }
    get textAreaMessage() {
        return browser.$('#complaintMessage');
    }
    get attachement() {
        return browser.$('#file');
    }
    get buttonSubmit() {
        return browser.$('submitButton');
    }
    get confirmationTextArea() {
        return browser.$('//div[@class="confirmation"][constains(text(), "Customer support will get in touch with you soon! Your compaint reference is")]');
    }
    async waitForLoad() {
        await this.title.waitForDisplayed();
        await this.inputCustomerEmail.waitForDisplayed();
        await this.textAreaMessage.waitForDisplayed();
        await this.attachement.waitForDisplayed();
        await this.buttonSubmit.waitForDisplayed();
    }
    
}