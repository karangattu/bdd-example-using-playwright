Feature: Google search testing

    Scenario: User is able to search for kittens
        Given User launches "Google" search page
        And Page is loaded
        Then Fill up the term "Cute kittens" in search bar
        When Click the "search" button
        Then You should see the search page with "Cute kittens" results
