import { Then } from '@cucumber/cucumber';
const exec = require('child_process').exec;
import homePage from '../pageobjects/home-page.js';
import hooks from "./hooks.js"
var exptPlanDetails;

//import myioimpl from '../helpers/myioimpl'


let chai = require('chai');
let assert = chai.assert;



Then('validate plan details', () => {


  exptPlanDetails =
  {
    "LITE": { "itemAmount": "5.4", "itemCurrency": "USD" },
    "CLASSIC": { "itemAmount": "10.9", "itemCurrency": "USD" },
    "PREMIUM": { "itemAmount": "16.3", "itemCurrency": "USD" }
  }

  assert.deepEqual(exptPlanDetails.LITE.itemAmount, hooks.metainfo.get("actPlanDetails").LITE.itemAmount, "itemAmount not mathcing for plan LITE")
  assert.deepEqual(exptPlanDetails.LITE.itemCurrency, hooks.metainfo.get("actPlanDetails").LITE.itemCurrency, "itemCurrency not mathcing for plan LITE")
  assert.deepEqual(exptPlanDetails.CLASSIC.itemAmount, hooks.metainfo.get("actPlanDetails").CLASSIC.itemAmount, "itemAmount not mathcing for plan CLASSIC")
  assert.deepEqual(exptPlanDetails.CLASSIC.itemCurrency, hooks.metainfo.get("actPlanDetails").CLASSIC.itemCurrency, "itemCurrency not mathcing for plan CLASSIC")
  assert.deepEqual(exptPlanDetails.PREMIUM.itemAmount, hooks.metainfo.get("actPlanDetails").PREMIUM.itemAmount, "itemAmount not mathcing for plan PREMIUM")
  assert.deepEqual(exptPlanDetails.PREMIUM.itemCurrency, hooks.metainfo.get("actPlanDetails").PREMIUM.itemCurrency, "itemCurrency not mathcing for plan PREMIUM")

});



