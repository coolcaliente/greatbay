var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "andirules",
    database: "greatbay_DB"
  });

  connection.connect(function(err) {
      if (err) throw err;
      console.log("connected as id" + connection.threadId + "\n");
  });

  function postItem() {
      console.log("Posting new item...\n");
      var query = connection.query(
          "INSERT INTO items SET ?",
          {
            //   ITEM INFORMATION
          },
          function(err, res) {
              console.log(res.affectedRows + " item posted!\n");
          }
      );

      console.log(query.sql);
  };


