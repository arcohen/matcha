var express = require("express"),
 		app = express(),
 		bodyParser = require("body-parser"),
 		request = require("request");

const { Pool, Client } = require('pg');

var dbName = 'postgres';

const connectionString = `postgresql://arcohen@localhost:5432/${dbName}`;

var pool = new Pool({
  connectionString: connectionString,
});

pool.end();

pool.query(`CREATE DATABASE users`, (err, res) => {
  if (err)
    console.log("-- users Database Already Exists --");
  else
    console.log("-- users Database Created --");
});

dbName = 'users';
pool = new Pool({
  connectionString: connectionString,
});

pool.query('SELECT current_database()', (err, res) => {
  console.log(res.rows[0].current_database);
  if (err)
  console.log(err);
  pool.end();
});
// var userTable = `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY,
  // Firstname VARCHAR(40) NOT NULL, Lastname VARCHAR(40) NOT NULL)`;

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');

// const classes = `header ${ isLargeScreen()
//                             ? ' '
//                             : item.isCollapsed
//                             ? 'icon-expander'
//                             : 'icon-collapser'}`;
