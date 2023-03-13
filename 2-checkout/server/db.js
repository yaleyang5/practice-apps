const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (\
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
        session_id VARCHAR(50) UNIQUE,\
        name VARCHAR(20),\
        email VARCHAR(30),\
        password VARCHAR(30),\
        line1 VARCHAR(30),\
        line2 VARCHAR(30),\
        city VARCHAR(20),\
        state VARCHAR(20),\
        zipcode VARCHAR(15),\
        phone_number VARCHAR(15),\
        credit_num VARCHAR(20),\
        credit_expiry VARCHAR(15),\
        credit_cvv VARCHAR(10),\
        credit_zip VARCHAR(15)\
        )"
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
