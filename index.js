const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 3000 || process.env.PORT
const app = express();
app.enable("trust proxy");
const mysql = require('mysql');
const path = require("path")
const router = require("./router/router.js")
app.use(express.static(path.join(__dirname, "client")));
const path1 = __dirname + "/client/";
app.get("/", function(req, res) {
  res.sendFile(path + "index.html");
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "new_Password",
//   insecureAuth: "true",
//   database: "this_db"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//=========================CREATE DATABASE==============================
// con.query("CREATE DATABASE mydb", function (err, result) {
//   if (err) throw err;
//   console.log("Database created");
// });
//======================================================================

  //=======================CREATE TABLE==================================
  // con.query("CREATE TABLE people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(60), hobby VARCHAR(60))", function(err, result){
  //   if(err) throw err;
  //   console.log("Table created", result)
  // })
  //===================================================================

//=========================INSERT INTO TABLE VALUE==========================
// con.query('INSERT INTO people (name, hobby) VALUES ("BILL", "Diving")', function(err, result){
//   if(err) throw err;
//   console.log('INSERTED', result)
// })
//======================================================================

//=========================INSERT INTO TABLE MULTIPLE VALUES==========================
// var values = [
//   ['John', 'dancing'],
//   ['Tom', 'singing'],
//   ['Jack', 'painting'],
// ]
// con.query('INSERT INTO people (name, hobby) VALUES ?', [values], function(err, result){
//   if(err) throw err;
//   console.log("Added new values", result)
// })
//======================================================================

//=========================SELECT SPECIFIC VALUES==========================
// con.query('SELECT name FROM people', function(err, result){
//   if(err) throw err;
//   console.log("Names:", result)
// })
//======================================================================

//=========================SELECT with WHERE==========================
// var name = "John";
// con.query("SELECT * FROM people WHERE name = ?", [name], function(err, result){
//   if(err) throw err;
//   console.log("result", result[0].hobby)
// })
// con.query("SELECT * FROM people WHERE name = " + mysql.escape(name), function(err, result){
//   if(err) throw err;
//   console.log("Name", result)
// })
//======================================================================

//=========================ORDER BY==========================
// con.query("SELECT * FROM people ORDER BY hobby DESC", function(err, result){
//   if(err) console.log(err)
//   console.log("Ordered list: ", result)
// })
// con.query("SELECT * FROM people ORDER BY name", function(err, result){
//   if(err) throw err;
//   console.log("Result", result)
// })
//=====================================================================

//=========================DELETE FROM TABLE==========================
// var name = "BILL";
// con.query("DELETE FROM people WHERE name = ?", [name], function(err, result){
//   if(err) console.log(err)
//   console.log("Delete", result)
// })
//======================================================================

//=========================UPDATE TABLE==========================
// var hobby = 'swimming';
// var name = "John";
// con.query("UPDATE people SET hobby = ? WHERE name = ?", [hobby, name], function(err, result){
//   if(err) throw err;
//   console.log("Result", result)
// })
//======================================================================

//=========================LIMIT, OFFSET==========================
// con.query("SELECT * FROM people LIMIT 1, 2", function(err, result){
//   if(err) console.log(err)
//   console.log("Result", result)
// })
//======================================================================


//=========================JOIN TABLES==========================
// var values1 = [
//   [1, 'Tom', 3],
//   [2, 'Jay', 1],
//   [3, 'Jerry', 2]
// ]
// var values2 =[
//   [1, 'swimming'],
//   [2, 'dancing'],
//   [3, 'sport']
// ]
// var values3 =[
//   [ 'swimming'],
//   [ 'dancing'],
//   [ 'sport']
// ];
// var values4 =[
//   [1],
//   [2],
//   [3]
// ]
// con.query('CREATE TABLE persnona (id INT, name VARCHAR(60), hobby VARCHAR(60))', function(err, result){
//   if(err) throw err;
//   console.log("Created", result)
// })

// con.query('CREATE TABLE hobby (id INT, title VARCHAR(60))', function(err, result){
//   if(err) throw err;
//   console.log('Result', result)
// })
// con.query('INSERT INTO persnona (id, name, hobby) VALUES ?', [values1], function(err, result){
//   if(err) console.log(err)
//   console.log("Result", result)
// } )

// con.query("INSERT INTO hobby (id, title) VALUES ?", [values2], function(err, result){
//   if(err) throw err;
//   console.log("result", result)
// })

// con.query('DROP TABLE IF EXISTS hobby', function(err, result){
//   if(err) throw err;
//   console.log("Result", result)
// })
// con.query('SELECT * FROM hobby', function(err, result){
//   if(err) console.log(err)
//   console.log('Result', result)
// })


// con.query("SELECT persnona.id AS id, persnona.name AS name, hobby.title as hobby FROM persnona JOIN hobby ON persnona.hobby = hobby.id", function(err, result){
//   if(err) throw err;
//   console.log("Result", result)
// })
//======================================================================


//========================DELETE TABLE===================================
// con.query('DROP TABLE IF EXISTS people', function(err, result){
//   if(err) throw err;
//   console.log("Result", result)
// })
//======================================================================
// });
app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});
const db = require("./app/models");
db.sequelize.sync();
// app.use('/', router)
require("./app/routes/turorial.routes")(app);
app.listen(PORT, ()=>{
  console.log(`Working on a port ${PORT}`)
})