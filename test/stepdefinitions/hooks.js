const { Before } = require('cucumber');
const { After } = require('cucumber');
import { before } from 'mocha';


const exec = require('child_process').exec;



Before("@beforeFeature", async () => {


  await common.emptyDir("./test/reports/app-log/")
  await common.emptyDir("./test/reports/allure-results/")
  await common.emptyDir("./test/reports/cucumber-results/")
  await common.emptyDir("./test/reports/cucumber-results/assets/")
  await common.emptyDir("./test/reports/cucumber-results/features/")
  await common.emptyDir("./test/reports/screenshots/")
  //await config.commonFun.emptyDir("./test/reports/junit-results/")

  //await config.commonFun.emptyDir("./allure-report/")


});


Before((scenario) => {
  // var rows = config.commonFun.readFileXls(config.testDataFilePath)
  // metainfo.set("excelRows", rows);
  config.lineNumber = scenario.pickle.locations[0].line
  testScriptId = scenario.pickle.tags[0].name.split(':')[1]
  //config.logger.info("*********** "+testScriptId+"||Exeution Started ***********")
  start = new Date();
  //config.logger.setTestScriptId(testScriptId, config.lineNumber);


});

function getMetaInfo() {
  return metainfo;
}

After(() => {
  //config.softAss.softAssertAll();
});


After((scenario) => {
  testScriptId = scenario.pickle.tags[0].name.split(':')[1]
  //let dynamicString = config.commonFun.formatDate(new Date())
  let fileName = testScriptId + "-" + ".png"
  let activeTC=scenario.pickle.tags[0].name;
  

  try {
    if (scenario.result.status != 'passed') {
      browser.pause(2000)
    browser.saveScreenshot("test/reports/screenshots/" + fileName)
    }
  }
  catch (Exception) {
       console.log("there is some error with writing screenshot")
  }
  time=new Date() - start;
  //config.logger.info("*********** "+testScriptId+"||Exeution Ended After "+time+"ms **********")

});


After("@afterFeature", async () => {

    exec('node reporter.js', () => {



  });
});



module.exports.getMetaInfo = getMetaInfo;
module.exports.testScriptId = testScriptId;