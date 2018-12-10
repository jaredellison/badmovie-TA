const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    apiHelpers.fetch
      .byGenreId(req.query.genreId)
      .then(movies => {
        res.json(movies);
      })
      .catch(err => {
        console.log('error searching by genre in movieControler:', err);
        res.sendStatus(404);
      });
  },

  getGenres: (req, res) => {
    apiHelpers.fetch
      .genreList()
      .then(list => {
        res.json(list);
      })
      .catch(err => {
        console.log('error fetching genre list in movieControler:', err);
        res.sendStatus(404);
      });
  },

  saveMovie: (req, res) => {
    // Params tuple format:
    // title, id, release_date, poster_path, backdrop_path, vote_average
    let m = req.body;

    params = [
      m.title,
      m.id,
      m.release_date,
      m.poster_path,
      m.backdrop_path,
      m.vote_average
    ];

    movieModel.set(params, err => {
      if (err) {
        res.sendStatus(400);
        return;
      }
      res.sendStatus(201);
    });
  },

  deleteMovie: (req, res) => {
    let m = req.body;
    params = [m.id];

    movieModel.delete(params, (err) => {
      if (err) {
        console.log('error deleting from database');
        res.sendStatus(400);
        return;
      }
      res.sendStatus(202);
    })
  },

  getFaves: (req, res) => {
    movieModel.get((err, movies) => {
      if (err) {
        console.log('error getting favorites');
        res.sendStatus(500);
        return;
      }
      res.json(movies);
    });
  }
};
