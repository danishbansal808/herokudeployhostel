const mysql = require('mysql');
var connection = mysql.createPool({
  connectionLimit: 30,
  host: '127.0.0.1',
  user: 'danish',
  password: '12345678',
  database: 'test3'
});
module.exports=connection;
