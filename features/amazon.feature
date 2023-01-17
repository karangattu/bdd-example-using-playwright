Feature: Amazon home page

    Scenario: User is able to navigate on Amazon website
        Given User launches "https://www.amazon.com/" search page
        And "Amazon.com. Spend less. Smile more." Page is loaded
        Then Click on "Open Menu"
        Then Select "Best Sellers" from list