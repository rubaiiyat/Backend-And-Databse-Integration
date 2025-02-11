const mysql = require("mysql");

const databaseConnectionConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "school",
};

const con = mysql.createConnection(databaseConnectionConfig);

con.connect(function (error) {
  if (error) {
    console.log("Localhost is not connected with node");
  } else {
    console.log("Localhost is successfully connected");
  }
});
