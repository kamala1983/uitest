Feature: subscription application test

  @Runonly
  Scenario Outline:validate subscripton packages
    Then clear mock data
    Given open the home page
    When select language as english
    When fetch plan details
    When validate plan details
  

  # @Runonly
  # Scenario Outline:validate subscripton packages
  #   Then clear mock data
  #   Given open the home page
  #   When select language as english
  #   When fetch plan details
  #   When validate plan details
  #   When fill the required details for registration <Title> <firstName> <lastName> <password> <address> <city> <state> <country> <mobile> <postcode>
  #   When click on register button
  #   Then validate registraion is success <Title> <firstName> <lastName>   
  #   When click on sign out button

  #   Examples:
  #    | email               | Title   |firstName |lastName  | password  | address                  | city   | state | country | mobile    | postcode      | totalCreditUtilized | resCode |cardStatus|
  #    | kktest23@gmail.com  | Mr      |rasmi     |pradhan   | pass#12      | testaddress1,testaddress2| bhadrak | idaho| india | 9999999999| 00000   | 1,80,000.00         | 200     |Blk,NORM|