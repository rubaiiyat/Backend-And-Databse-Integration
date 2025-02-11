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
    InsertData(con);
  }
});

function InsertData(con) {
  const sqlQuery =
    "INSERT INTO `studentlist`(`ID`, `name`, `address`, `dept`, `batch`) VALUES ('43','Abir Rubaiyat','Bogura','CSE','17th(Diploma)')";

  con.query(sqlQuery, function (error) {
    if (error) {
      console.log("Data is not inserted");
    } else {
      console.log("Data is inserted Successfully");
    }
  });
}
