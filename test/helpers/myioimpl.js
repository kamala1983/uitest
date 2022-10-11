class myioimpl{

    click(element){


        element.waitForClickable({ timeout: 20000 }); 
        browser.setTimeout({ 'implicit': 200 })

        try {
            var x = 0;
            while(x < 20) {
              element.click();
                x++;
                browser.pause(1000);
            }
        } catch (Exception){
            // Assert.fail();
        }
        browser.setTimeout({ 'implicit': 20000 })

    }

}



export default new myioimpl();
