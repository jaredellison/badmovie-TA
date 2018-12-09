const request = require('request');
const axios = require('axios');

// Create a file '../../api-key.js' to store personal private API key
const { API_KEY } = require('../../api-key.js');


// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file