const mysql = require('mysql');
const mysqlConfig = require('../../config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.log('error connecting to database', err)
    return;
  }
  console.log('succesfully connected to database');
});

module.exports.db = connection;