import { Then } from 'cucumber';
const exec = require('child_process').exec;
import homePage from '../pageobjects/home-page.js';

import myioimpl from '../helpers/myioimpl'


let chai = require('chai');
let assert = chai.assert;


Then('validate registraion is success {} {} {}', (Title,firstName,lastName) => {
    let actMsg=homePage.welcomeMsg.getText();
    let expMsg=Title+" "+firstName+" "+lastName;

    assert.deepEqual(expMsg,actMsg,"welcome message does not match after registration")

  
  });
  

  