import BasePage from './base.page.js';

export default class LoginPage extends BasePage{
    constructor(){
        super();
    }

    get title() {
        return browser.$('// h1[text()="Login"]=Login');
    }
    get inputEmail() {
        return browser.$('#email');
    }

    get inputPassword() {
        return browser.$('#password');
    }

    get linkForgotPassword() {
        return browser.$('.primary-link.forgot-pw');
    }

    get checkboxRememberMe() {
        return browser.$('[for="rememberMe-input"]');
    }

    get linkRegister() {
        return browser.$('[routerlink="/register"]');
    }

    async waitForLoad(){
        await this.title.waitForDisplayed();
        await this.inputEmail.waitForDisplayed();
        await this.inputPassword.waitForDisplayed();
        await this.linkForgotPassword.waitForDisplayed();
        await this.checkboxRememberMe.waitForDisplayed();
        await this.linkRegister.waitForDisplayed();
    }

    get buttonLogin() {
        return browser.$('#loginButton');
    }

}