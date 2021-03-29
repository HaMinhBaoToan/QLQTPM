const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'qlkd',
    port: 3306

    //   host: 'us-cdbr-east-03.cleardb.com',
    // user: 'b0fcb0931e803b',
    // password: 'ffaab3f2',
    // database: 'heroku_7fac5bf006f4d9a',
    // database: 'mysql://b0fcb0931e803b:ffaab3f2@us-cdbr-east-03.cleardb.com/heroku_7fac5bf006f4d9a?reconnect=true',
    // port: 3306

  },
  pool: {
    min: 0,
    max: 50
  }
});

module.exports = knex;
