Feature: Google search testing

    Scenario: User is able to search for kittens
        Given User launches "https://www.google.com/" search page
        And "Google" Page is loaded
        Then Fill up the term "cute kitten" in search bar
        When Click the "Search" button
        Then You should see the search page with "cute kittens" results

    Scenario: User is able to search for puppies
        Given User launches "https://www.google.com/" search page
        And "Google" Page is loaded
        Then Fill up the term "cute puppy" in search bar
        When Click the "Search" button
        Then You should see the search page with "cute puppy" results