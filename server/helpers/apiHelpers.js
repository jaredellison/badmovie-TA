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

exports.fetchers = {};

exports.fetchers.genreList = () => {
  axios({
    method: 'get',
    url: 'https://api.themoviedb.org/3/genre/movie/list',
    params: {
      api_key: API_KEY,
      language: 'en-US'
    }
  })
    .then(response => {
      console.log(response.data.genres);
    })
    .catch(err => {
      console.log('error fetching genre list:', err);
    });
};

// Example IDS:
//    Romance: 10749
//    Western: 37
exports.fetchers.discoverByGenre = genreID => {
  axios({
    method: 'get',
    url: 'https://api.themoviedb.org/3/discover/movie',
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: '1',
      language: 'en-US',
      sort_by: 'popularity.asc', // Get worst movies first
      include_adult: 'false',
      include_video: 'false',
      with_genres: genreID
    }
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log('error fetching movies by genre:', err);
    });
};

exports.fetchers.search = q => {
  axios({
    method: 'get',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: '1',
      language: 'en-US',
      sort_by: 'popularity.asc', // Get worst movies first
      include_adult: 'false',
      include_video: 'false',
      query: q
    }
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log('error fetching movies by search query:', err);
    });
};

exports.fetchers.search('air bud');