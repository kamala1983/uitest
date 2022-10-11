import { Given, When, Then } from 'cucumber';

import homePage from '../pageobjects/home-page.js';

import chai from 'chai';
let assert = chai.assert;

When('click on sign in', () => {
  homePage.signInBtn.waitForClickable({ timeout: 20000 });
  homePage.signInBtn.click();

 });

When('enter new eamil address in order to create a account', () => {
  homePage.emailInputBox.waitForClickable({ timeout: 20000 });
  //homePage.emailInputBox.setValue(email)
    homePage.emailInputBox.setValue(config.NEW_USER)
});

When('enter existing eamil address in order to create a account', () => {
  homePage.emailInputBox.waitForClickable({ timeout: 20000 });
  //homePage.emailInputBox.setValue(email)
    homePage.emailInputBox.setValue(config.EXISTING_USER)
});


When('click on create account', () => {
  homePage.createActBtn.waitForClickable({ timeout: 20000 });
  homePage.createActBtn.click();

});

When('fill the required details for registration {} {} {} {} {} {} {} {} {}', (firstName,lastName,password,address,city,state,country,mobile,postcode) => {
  homePage.title.click();
  homePage.firstName.setValue(firstName);
  homePage.lastName.setValue(lastName);
  homePage.password.setValue(password);
  homePage.firstNameforAddr.setValue(firstName);
  homePage.lastNameforAddr.setValue(lastName);
  homePage.addr.setValue(address);
  homePage.city.setValue(city);
  $('#uniform-id_state').click()
  browser.pause(2000)
  $('#uniform-id_state').selectByIndex(2)
  //homePage.country.setValue(country);
  homePage.mobile.setValue(mobile);
  homePage.postcode.setValue(postcode);


});



When('click on register button', () => {
  homePage.subBtn.click();
});

When('click on sign out button', () => {
  homePage.logoutBtn.click();
});

When('enter login and password', () => {
  homePage.userName.setValue(config.EXISTING_USER);
  homePage.passwd.setValue(config.PASSWORD);

});

When('enter invalid login and password {} {}', (login,password) => {
  homePage.userName.setValue(login);
  homePage.passwd.setValue(password);

});


When('submit the credential for login', () => {
  homePage.loginBtn.waitForClickable({ timeout: 20000 });
  homePage.loginBtn.click();

});

When('search for a product {}', (product) => {
  homePage.searchBox.setValue(product);
  $('.ac_even').click();
  // homePage.searchBtn.waitForClickable({ timeout: 20000 });
  // homePage.searchBtn.click();
  
});

When('click on add to cart', () => {
  productPage.addCardBtn.waitForClickable({ timeout: 20000 });
  productPage.addCardBtn.click();

});

When('proceed to checkout', () => {
  productPage.checkOut.waitForClickable({ timeout: 20000 });
  productPage.checkOut.click();
  $$('//span[contains(text(),\'Proceed to checkout\')]')[1].waitForClickable({ timeout: 20000 });
  $$('//span[contains(text(),\'Proceed to checkout\')]')[1].click();
  $$('//span[contains(text(),\'Proceed to checkout\')]')[1].waitForClickable({ timeout: 20000 });
  $$('//span[contains(text(),\'Proceed to checkout\')]')[1].click();
  $('#uniform-cgv').waitForClickable({ timeout: 20000 });
  $('#uniform-cgv').click();
  $$('//span[contains(text(),\'Proceed to checkout\')]')[1].waitForClickable({ timeout: 20000 });
  $$('//span[contains(text(),\'Proceed to checkout\')]')[1].click();

});




