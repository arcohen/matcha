var conn = require('./connection.js');

connection.query("CREATE DATABASE IF NOT EXISTS matcha", function(err) {
  if (err) {console.log(err)}
  
});

conn.query("CREATE TABLE IF NOT EXISTS users
  id INT(8) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  username VARCHAR(25) NOT NULL,
  email VARCHAR(50) NOT NULL,
  firstName VARCHAR(50) NOT NULL,
  surname VARCHAR(50) NOT NULL,
  password VARCHAR(255)"
);
