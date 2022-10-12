import { Given } from '@cucumber/cucumber';
 require('dotenv').config()


Given('open the home page', async () => {
  browser.setTimeout({ 'pageLoad': 60000 })
  browser.setTimeout({ 'implicit': 20000 })
    browser.url(process.env.BASE_URL)
})


Given('pause for {} seconds', (duration) => {
  browser.pause(duration)

})




