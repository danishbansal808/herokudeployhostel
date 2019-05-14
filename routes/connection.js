const mysql = require('mysql');
var connection = mysql.createPool({
  connectionLimit: 30,
  host: 'remotemysql.com/:3306',
  user: 'hpNkrtiEMK',
  password: ' x4qOZ0mtfc',
  database: 'hpNkrtiEMK'
});
module.exports=connection;
