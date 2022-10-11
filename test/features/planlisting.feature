Feature: registation

  @Runonly
  Scenario Outline:validate user can register to the web site successfully
    Then clear mock data
    Given open the home page
    When click on sign in
    When enter new eamil address in order to create a account
    When click on create account
    When fill the required details for registration <Title> <firstName> <lastName> <password> <address> <city> <state> <country> <mobile> <postcode>
    When click on register button
    Then validate registraion is success <Title> <firstName> <lastName>   
    When click on sign out button

    Examples:
     | email               | Title   |firstName |lastName  | password  | address                  | city   | state | country | mobile    | postcode      | totalCreditUtilized | resCode |cardStatus|
     | kktest23@gmail.com  | Mr      |rasmi     |pradhan   | pass#12      | testaddress1,testaddress2| bhadrak | idaho| india | 9999999999| 00000   | 1,80,000.00         | 200     |Blk,NORM|
   