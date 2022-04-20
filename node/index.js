const express = require("express");
const app = express();

const mysql = require('mysql2');
const configDB = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'node_nginx'
}

const createTable = `CREATE TABLE IF NOT EXISTS people (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
)`;

const connection = mysql.createConnection(configDB);

connection.query(createTable);

const sql = `INSERT INTO people(name) values ('Fulano de Tal')`;
connection.query(sql);

connection.promise().query("SELECT * FROM people")
  .then(([rows, fields]) => {
    app.get("/", (request, response) => {

      var header = '<h1>Full Cycle Rocks!</h1>';
      var names = '';

      rows.map(row => {
        names += '<li>' + row.name + '</li>'
      });

      var lista = '<ul>' + names + '</ul>';
      response.send(header + lista);
    })
  })
  .catch(console.log)
  .then(() => connection.end());


const port = 3000;
app.listen(port, () => {
  console.log("🔥🔥🔥Server is running on port " + port);
});