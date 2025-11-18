import BasePage from './base.page.js';

export default class RegisterPage extends BasePage {
    constructor(){
        //empty constructor
    }

    get title(){
        return browser.$('//h1[text()="Register"]=Register');
    }

    get inputEmail(){
        return browser.$('#emailControl');
    }

    get inputPassword(){
        return browser.$('#passwordControl');
    }

    get inputPasswordConfirmm(){
        return browser.$('#repeatPasswordControl');
    }

    get switchShowPasswordAdvice(){
        return browser.$('span.mdc-switch__track');
    }

    async selectSecurityQuestion(option){
        return browser.$(`//span[@class="mdc-list-item__primary-text"][normalize-space(text())="Your eldest siblings middle name?"] = "${option}"`);
    }

    get inputAnswer(){
        return browser.$('#securityAnswerControl');
    }

    get buttonRegister(){
        return browser.$('button#registerButton');
    }

    get linkToLogin(){
        return browser.$('[routerlink="/login"]');
    }
}