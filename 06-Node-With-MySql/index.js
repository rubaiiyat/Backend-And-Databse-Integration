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
    // InsertData(con);
    // deleteDataById(con);
    updateDataById(con);
  }
});

function InsertData(con) {
  const sqlQuery =
    "INSERT INTO `studentlist`(`ID`, `name`, `address`, `dept`, `batch`) VALUES ('48','Tania Rahman','Sylhet','MBA','15th(Private)'  )";

  con.query(sqlQuery, function (error) {
    if (error) {
      console.log("Data is not inserted");
    } else {
      console.log("Data is inserted Successfully");
    }
  });
}

function deleteDataById(con) {
  const sqlQuery = "DELETE FROM `studentlist` WHERE `ID`=47";

  con.query(sqlQuery, function (error) {
    if (error) {
      console.log("Data is not deleted");
    } else {
      console.log("Data is deleted successfully");
    }
  });
}

function updateDataById(con) {
  const sqlQuery = "UPDATE `studentlist` SET `address`='Bogura' WHERE `ID`=44";

  con.query(sqlQuery, function (error) {
    if (error) {
      console.log("Data is not updating");
    } else {
      console.log("Data is updating");
    }
  });
}
