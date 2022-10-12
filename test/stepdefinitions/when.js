 import { Given, When, Then } from '@cucumber/cucumber';

 import homePage from '../pageobjects/home-page.js';
 var actPlanDetails;
// import chai from 'chai';
// let assert = chai.assert;
var metainfo = new Map();
let chai = require('chai');
let assert = chai.assert;

import hooks from "./hooks.js"

When('select language as english', async () => {
  await homePage.LanguageBtn.waitForClickable({ timeout: 20000 });
  await homePage.LanguageBtn.click();

 });


 When('fetch plan details', async () => {

   actPlanDetails =
  {
      "LITE": { "itemAmount": "", "itemCurrency": "" },
      "CLASSIC": { "itemAmount": "", "itemCurrency": "" },
      "PREMIUM": { "itemAmount": "", "itemCurrency": "" }
  }


  for (var i = 0; i < 3; i++) {

      if ( await homePage.planName[i].getText() == 'LITE') {
          actPlanDetails.LITE.itemAmount =   await homePage.planAmt[i].getText()
          actPlanDetails.LITE.itemCurrency =   await homePage.planCurrency[i].getText()
      }
      if ( await homePage.planName[i].getText() == 'CLASSIC') {
          actPlanDetails.CLASSIC.itemAmount =  await homePage.planAmt[i].getText()
          actPlanDetails.CLASSIC.itemCurrency =  await homePage.planCurrency[i].getText()
      }

      if ( await homePage.planName[i].getText() == 'PREMIUM') {
          actPlanDetails.PREMIUM.itemAmount =  await homePage.planAmt[i].getText()
          actPlanDetails.PREMIUM.itemCurrency =   await homePage.planCurrency[i].getText()
      }
  }

   hooks.metainfo.set("actPlanDetails", actPlanDetails);

 });


