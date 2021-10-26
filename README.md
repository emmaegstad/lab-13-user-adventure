# Adventure Quest Plan

## Pt. 2 Steps

1. Quest page game logic
    - Submit event handler
        - Grab selected radio button
        - Hide form, display quest result
        - Get user results
        - Update user
            - TDD scoreQuest() (updates treat, lives, completed)
        - Reset user to LS
        - Link back to map page
2. Map page
    - Disable quests that have been completed
    - Redirect to results at 0 lives or all quests completed
3. Result page
    - Create HTML, styling
    - Display results
    - Game reset
4. Figure out how to style map page

## Pt. 1 Steps

1. ~~Create file structure~~
    - ~~Home (index.html, app.js), Map (index.html, map.js) Quest (index.html, quest.js), Data (quest-data.js)~~
2. ~~Design game~~
    - ~~theme, avatars, quests, assets, etc.~~
    - ~~what choices are being presented, what consequences/rewards will exist (all adjustments to user object)~~
    - ~~Gather assets~~
3. ~~Home page~~
    - ~~Build out HTML~~
    - ~~TDD LS functions (getUser, setUser)~~
    - ~~Create submit event~~
        - ~~TDD generateUser()~~
        - ~~setUser()~~
        - ~~Redirect to map page~~
4. ~~Create preliminary quest data~~
5. ~~Map page~~
    - ~~Build out HTML~~
    - ~~Add links~~
        - ~~Links should contain URL search params containing the quest ID~~
6. ~~Quest page~~
    - ~~Build out HTML~~
        - ~~On page load, grab quest ID from search params and populate correct data~~
        - ~~Refactor how options load, should be a loop~~
7. ~~Display user info on all pages~~

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
