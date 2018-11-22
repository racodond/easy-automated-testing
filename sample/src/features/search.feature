Feature: Search engine

  Background:
    Given I am on the search page

  @smoke
  Scenario: Search for something and land on the results page
    When I search for something
    Then I should be on the results page

  @smoke
  Scenario: Search for something that exists and see some results
    When I search for something that exists
    Then I should be on the results page
    And I should see some results

  @smoke
  Scenario: Search for something that does not exist and see no results
    When I search for something that does not exist
    Then I should be on the results page
    And I should be told that no results have been found

  @query-reminder
  Scenario: Be reminded the search query on the results page
    When I search for something
    Then I should be on the results page
    And I should be reminded what I searched for
