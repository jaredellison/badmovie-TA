const { db } = require('../../db/sql');

module.exports = {
  get: callback => {
    console.log('movieModel get called')
    let selectQ = `
    select * from favorites;
    `;
    db.query(selectQ, (err, result) => {
      console.log(result.poster_path);
      callback(err, result);
    });
  },

  set: (params, callback) => {
    let insertQ = `
    insert into favorites
    (title, id, release_date, poster_path, backdrop_path, vote_average)
    values (
    ?,
    ?,
    ?,
    ?,
    ?,
    ?
    )
    ;
    `;

    let insertId = [params[1]];

    db.query('select * from favorites where id = ?;', insertId, (err, result) => {
      if (err){
        console.log('error inserting into database', err)
        return;
      };
      if (result.length === 0) {
        db.query(insertQ, params, err => {
          callback(err);
        });
      }
    });
  },

  delete: (params, callback) => {
    db.query('delete from favorites where id = ?', params, (err) => {
      callback(err);
    });
  }
};
