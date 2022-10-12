Feature: subscription application test

  @Runonly
  Scenario Outline:validate subscripton packages
    Given open the home page
    When select language as english
    When fetch plan details
    When validate plan details
  