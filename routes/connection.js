const mysql = require('mysql');
var connection = mysql.createPool({
  connectionLimit: 30,
 'host: '35.184.30.192',
  user: 'danish1',
  password: '00000000',
  database: 'test3'
});
module.exports=connection;
