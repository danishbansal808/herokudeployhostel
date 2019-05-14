const mysql = require('mysql');
var connection = mysql.createPool({
  connectionLimit: 30,
  host: '35.184.30.192',
  user: 'danish',
  password: '12345678',
  database: 'test5'
});
module.exports=connection;
