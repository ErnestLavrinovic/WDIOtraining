import BasePage from './base.page.js';

export default class HomeworkPage extends BasePage {
    constructor(){
        super();
    }

    get dropdownLanguageSelect() {
        return browser.$('button#navbarLanguageButton');
    }

    get titleAllProducts() {
        return browser.$('//div[normalize-space()="All Products" and contains(@class, "heading")]');
    }

    get dropdownPageSizeSelect() {
        return browser.$('//mat-form-field//mat-select[contains(@class, "mat-mdc-select")]');
    }

    get textboxCurrentItemsInPage() {
        return browser.$('#mat-paginator-page-size-label-0');
    }

    get buttonNextPage() {
        return browser.$('button[aria-label="Next page"]');
    }

    get buttonPreviousPage() {
        return browser.$('button[aria-label="Previous page"]');
    }

    get sideMenuContactUsOption() {
        return browser.$(`//h3[normalize-space()="Contact"]`)
    }

    get sideMenuAboutUsOption() {
        return browser.$(`a[aria-label="Go to about us page"]`)
    }

    get sideMenuVersionInfoTextBox() {
        return browser.$('div.appVersion');
    }

}