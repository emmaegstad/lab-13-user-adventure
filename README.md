# Adventure Quest Plan

## Steps

1. ~~Create file structure~~
    - ~~Home (index.html, app.js), Map (index.html, map.js), Quests (index.html, quests.js, quest-data.js)~~
2. Home page
    - Build out HTML
    - TDD LS functions (getUser, setUser)
    - Create submit event
        - TDD generateUser()
        - setUser()
        - Redirect to map page
3. Create preliminary quest data
4. Map page
    - Build out HTML
    - Add links
        - Make unclickable if quest has been completed
        - Links should contain URL search params containing the quest ID
5. Quest page
    - Build out HTML
        - On page load, grab quest ID from search params and populate correct data
        - On form submit, update user data and redirect to map page

## Home Page

-   HTML Elements

*   [ ] Text input for user name
*   [ ] Radio buttons for user race

-   Events

*   [ ] On Form Submit
    -   [ ] Generate a user object using form data (generateUser)
    -   [ ] Store user data in localStorage (setuser)
    -   [ ] Redirect to the map page

## Map Page

-   HTML Elements

*   [ ] List of links for each quest (generated from the quest-data)
    -   [ ] Link should not be clickable if the user has already completed the quest
    -   [ ] Link should contain a URL search parameter containing the quest ID

-   Events

*   [ ] On page load -- TBD: GAME LOGIC

## Quest Detail Page

-   HTML Elements

*   [ ] Title
*   [ ] Description
*   [ ] Quest Image
*   [ ] Quest Choices (radio buttons)

-   Events

*   [ ] On page load, get the quest ID from the URL Search Parameters and load the quest data onto the page
*   [ ] On form submit
    -   [ ] update the user data
    -   [ ] redirect to the map page
