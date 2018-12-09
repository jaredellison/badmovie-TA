const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // console.log('Serving GET request at /movies/search endpoint');
    // console.log('request:', req.query);
    apiHelpers.fetch.byGenreId(req.query.genreId)
    .then((movies) => {
      console.log('movieControllers.getSearch json:', movies);
      res.json(movies);
    })
    .catch(err => {
      console.log('error searching by genre in movieControler:', err);
      res.sendStatus(404);
    });
  },
  getGenres: (req, res) => {
    apiHelpers.fetch.genreList()
    .then((list) => {
      // console.log('movieControllers.getGenres json:',list);
      res.json(list);
    })
    .catch(err => {
      // console.log('error fetching genre list in movieControler:', err);
      res.sendStatus(404);
    });
  },

  saveMovie: (req, res) => {},
  deleteMovie: (req, res) => {}
};
