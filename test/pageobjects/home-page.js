

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

     get LanguageBtn () {
        return $('//div[@class=\'header-btns\']//span[text()=\'English\']');
    }


    get planName () {
        return $$('//div[@class=\'package-container\']//h1');
    }

    get planAmt () {
        return $$('//div[@class=\'package-container\']//span[@class=\'amount\']');
    }
    
    get planCurrency () {
        return $$('//div[@class=\'package-container\']//span[@class=\'currency\']');
    }

    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new HomePage();
