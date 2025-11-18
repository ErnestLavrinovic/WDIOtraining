Feature: homework
this is homework feature file

@homework
Scenario: click through all homework steps
    Given I open landing page
    And I press on language select dropdown
    And I verify title All Products is displayed
    And I verify visibility of page select size dropdown menu
    And I press on current items in page textbox
    And I press on next page button
    And I press on previous page button
    When I open side menu
    And I press on menu subtitle Contact us in side menu
    And I press on menu ontion About us in side menu
    And I press on Version info text box in side menu
    Then I wait for 5 seconds