Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the 'login' page
    When I login with <username> and <password> #login
    Then I should see a flash message saying <message> #login


  Examples:
    | username        | password           | 
    | standard_user   | secret_sauce       |
    | tomysammy       | public_sauce       |