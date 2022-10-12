const { assert } = require('chai');
const HomePage = require('../pageobjects/home.page');


describe('subscription application validation', () => {
    it('validate subscription plan details', async () => {
        await HomePage.open();
        await HomePage.LanguageBtn.click();



        var actPlanDetails =
        {
            "LITE": { "itemAmount": "", "itemCurrency": "" },
            "CLASSIC": { "itemAmount": "", "itemCurrency": "" },
            "PREMIUM": { "itemAmount": "", "itemCurrency": "" }
        }


        for (var i = 0; i < 3; i++) {

            if (await HomePage.planName[i].getText() == 'LITE') {
                actPlanDetails.LITE.itemAmount = await HomePage.planAmt[i].getText()
                actPlanDetails.LITE.itemCurrency = await HomePage.planCurrency[i].getText()
            }
            if (await HomePage.planName[i].getText() == 'CLASSIC') {
                actPlanDetails.CLASSIC.itemAmount = await HomePage.planAmt[i].getText()
                actPlanDetails.CLASSIC.itemCurrency = await HomePage.planCurrency[i].getText()
            }

            if (await HomePage.planName[i].getText() == 'PREMIUM') {
                actPlanDetails.PREMIUM.itemAmount = await HomePage.planAmt[i].getText()
                actPlanDetails.PREMIUM.itemCurrency = await HomePage.planCurrency[i].getText()
            }
        }

        assert.deepEqual(exptPlanDetails.LITE.itemAmount, actPlanDetails.LITE.itemAmount, "itemAmount not mathcing for plan LITE")
        assert.deepEqual(exptPlanDetails.LITE.itemCurrency, actPlanDetails.LITE.itemCurrency, "itemCurrency not mathcing for plan LITE")
        assert.deepEqual(exptPlanDetails.CLASSIC.itemAmount, actPlanDetails.CLASSIC.itemAmount, "itemAmount not mathcing for plan CLASSIC")
        assert.deepEqual(exptPlanDetails.CLASSIC.itemCurrency, actPlanDetails.CLASSIC.itemCurrency, "itemCurrency not mathcing for plan CLASSIC")
        assert.deepEqual(exptPlanDetails.PREMIUM.itemAmount, actPlanDetails.PREMIUM.itemAmount, "itemAmount not mathcing for plan PREMIUM")
        assert.deepEqual(exptPlanDetails.PREMIUM.itemCurrency, actPlanDetails.PREMIUM.itemCurrency, "itemCurrency not mathcing for plan PREMIUM")

        console.log(actPlanDetails)


    });
});






