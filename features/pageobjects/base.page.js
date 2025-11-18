/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
import SideMenu from './side.menu.js';
export default class Page {
    constructor() {
        this.sideMenu = new SideMenu();
    }

    get buttonAccount() {
        return browser.$(`#navbarAccount`)
        // xpath - //button[@id="navbarAccount"]
    }

    get buttonBasket() {
        return browser.$(`[routerlink="/basket"]`)
    }

    get buttonLogin() {
        return browser.$(`#navbarLoginButton`)
    }

    get buttonBurgerMenu() {
        return browser.$(`//button[@aria-label="Open Sidenav"]`)
    }

    get buttonDismissCookies() {
        return browser.$(`[aria-label="dismiss cookie message"]`)
    }

    get buttonDismissWelcome() {
        return browser.$(`[aria-label="Close Welcome Banner"]`)
    }

    get snackBarLanguageChange() {
        return browser.$('.mat-mdc-snack-bar-label.mdc-snackbar__label')
    }
}
