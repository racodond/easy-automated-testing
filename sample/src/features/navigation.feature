Feature: Navigate

  Scenario Outline: Navigate directly to URL
    When I go to the <page> page
    Then I should be on the <page> page
    Examples:
      | page    |
      | home    |
      | search  |
      | results |
      | contact |

  @smoke
  Scenario Outline: Navigate from the home page menu
    When I am on the home page
    When I go to the <page> page from the home page menu
    Then I should be on the <page> page
    Examples:
      | page    |
      | search  |
      | contact |
