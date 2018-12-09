const { db } = require('../../db/sql');

module.exports = {
  get: callback => {
    let selectQ = `
    select * from favorites;
    `;
    db.query(selectQ, (err, movies) => {
      callback(movies);
    });
  },

  set: (params, callback) => {
    let insertQ = `
    insert into favorites
    (title, id, release_date, poster_path, backdrop_path, vote_average)
    values (
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
    );
    `;

    db.query(insertQ, params, err => {
      if (err) console.log('error inserting into database');
      callback();
    });
  },

  delete: (movieId, callback) => {
    db.query('delete from favorites where id = ?', [movieId], err => {
      if (err) console.log('error deleting from database');
      callback();
    });
  }
};
