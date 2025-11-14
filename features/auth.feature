Feature: auth
# empty comment
This feature describes scenarios for login, registration etc.

Scenario: Login
    Given I open landing page
    #that is a precondition so i use Given
    And I press on account button
    And I press on login button
    And I am on login page
    When I enter login email
    And I enter login password
    And I confirm login
    Then I am logged in

Scenario: Registration
    Given I open landing page
    And I press on account button
    And I press on login button
    When I press not yet a customer button
    And I enter email adress
    And I enter registration password
    And I enter registration password repeat
    And I select a question about elder sibling
    And I write my answer
    And I press register button
    Then I am on login page
    And I enter login email
    And I enter login password
    And I confirm login
    Then I am logged in