const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Keiffer_11",
    database: "burgers_db"
});
connection.connect(function(err) {
    if(err){
        console.log("error connecting:" + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);
});
module.exports = connection;