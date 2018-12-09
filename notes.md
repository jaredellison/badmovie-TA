# Bad Movies Mock TA Notes

*Start time 10:30*

- [ ] User should be allowed to search for movies by genre
  - Search component
    - HTML Input Element with on change event handler
    - Local State storage within storage component
    - Event handler passed down from main react app to do the searching
    - maybe search is in sidebar?
  - use axios to make API requests
- [ ] User should be given a list of official genres to choose from
  - Sidebar component
    - list of genres maybe each is a sub component renderd from api options?
- [ ] Movies should be sorted to show the movies with horrible ratings first (figure out how to modify the API endpoint to do so)
  - Make appropriate get request to server
  - Render search results 
- [ ] User should be able to click on a movie within the search results in order to save it to their favorites (mySQL database, you must make your own Schema)
- [ ] If a user is viewing their favorites they should be able to delete a movie from their favorites by clicking on it

## Dependencies

### Server

Express

bodyparser

mysql

###  Client

React

ReactDOM

axios

### Dev

babel

Webpack

Mysql

## To Do

- [x] Explore existing codebase
- [ ] Set up boiler plate react app
- [ ] Set up boiler plate express server to serve app
- [ ] Get API key and make basic GET requests
- [ ] Set up database
  - [ ] Create database schema
    - [ ] Title VARCHAR(500)
    - [ ] URL?  VARCHAR(500)
    - [ ] Favorite BOOLEAN
  - [ ] CRUD Queries
    - [ ] CREATE: query to insert new favorite
    - [ ] READ: query to list all favorites
    - [x] UPDATE: not required
    - [ ] Delete: query to remove a favorite
  - [ ] Manually manipulate database
- [ ] Integrate database manipulation with server
  - [ ] Test with CURL or postman
- [ ] Integrate client with server database manipulation

## Questions:

- [ ] Do we need to create a user account?
- [ ] Do users search by a query string or just by genre?

