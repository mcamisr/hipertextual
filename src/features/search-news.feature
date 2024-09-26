Feature: Newsletter functionality within the hypertextual site

  Scenario: As a user, I can subscribe me in a newsletter

    Given I am on the main page
    When I search for the news about Reed Jobs
    Then I should see that the url is correct
    When I enter my email address I click on the subscribe button
    Then I should see the confirmation message



