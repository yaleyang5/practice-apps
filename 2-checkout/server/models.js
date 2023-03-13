const db = require('./db');

const get = () => {
  return db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Connected, get!');
    var sql = 'SELECT * FROM responses';
    db.query(sql, (err, result, fields) => {
      if (err) {
        throw err;
      }
      console.log(result);
      return result;
    })
  });
};

const post = (response) => {
  return db.connectAsync((err) => {
    if (err) {
      throw err;
    }

    console.log('Connected, post! response: ', response);
    var sql = 'INSERT INTO responses SET ';
    var visited = false;
    for (var key in response) {
      sql += `${key} = '${response[key]}', `
      visited = true;
    }
    sql = sql.slice(0, -2);
    sql += `ON DUPLICATE KEY UPDATE session_id = '${response['session_id']}'`;
    console.log('sql: ', sql);
    db.query(sql, (err, result, fields) => {
      if (err) {
        throw err;
      }
      console.log(result);
      //
    })
  });
};



module.exports = {get, post};