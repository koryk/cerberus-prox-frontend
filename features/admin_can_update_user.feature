Feature:
  In order to add new cards to the system
  As an admin
  I need to be able to create and edit cards

  Scenario: Creating a new card
    Given I am logged in
    When I go to "the new card page"
    And I fill in "ID" with "1337"
    And I fill in "User" with "User Name"
    And I fill in "Nick" with "yoozer"
    And I press "Create Card"
    Then I should see "Card was successfully created"

  @selenium
  Scenario: Creating a new card and capture swipe
    Given I am logged in
    When I go to "the new card page"
    And I press "Capture Card"
    Then I should see "Swipe Card"
    When my card with code "1337" is denied 
    And I wait "1" second 
    Then the "card_id" field should contain "1337" 
    And I should see "Card captured"
    
