

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

- [x] Get API key 

- [x] Set up boiler plate react app

- [x] Set up boiler plate express server to serve app

- [x] make basic API GET requests from node server

  https://www.themoviedb.org/documentation/api

  - [x] Learn how:

    - [x] make a get request for a list of genres:

      `curl https://api.themoviedb.org/3/genre/movie/list?api_key=a67c6ad0fb5de896557e4cc755be70af&language=en-US`

    - [x] make a get request based on a search
      https://developers.themoviedb.org/3/search/search-movies

    - [x] make a get request based on a genre

      Need to plug a genre number into query like this:

      ```
      curl https://api.themoviedb.org/3/discover/movie?api_key=a67c6ad0fb5de896557e4cc755be70af&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_genres=37
      ```

      https://www.themoviedb.org/documentation/api/discover

    - [x] make a get request based on a movie ID

- [ ] Set up database

  - [ ] Create database schema
    - [ ] ID
    - [ ] title VARCHAR(500)
    - [ ] tmage  VARCHAR(500)
    - [ ] description  VARCHAR(1000)
    - [ ] tmdb_ID INT
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

## Notes:

TMDB Genres:

```
{
  genres: [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' }
  ]
};

```

