
const router = require("express").Router();
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "new_Password",
    database: "this_db"
})


router.get('/all-data', (req, res)=>{
connection.query(`SELECT * FROM people`, (err, result)=>{
    if(err) throw err;
    console.log(result)
    res.json(result)
})
})
module.exports = router;