const db = require('./connection.js');

// step 1 for login - this function is going to fetch user from database
function getUser(email) {
  const SELECT_USER = `
      SELECT id, email, password, name FROM users WHERE email=$1
    `;
  return db.query(SELECT_USER, [email]).then((result) => result.rows[0]);
}

// step 2 for login - create session id, data and store in db
function createSession(sid, data) {
  const INSERT_SESSION = `
    INSERT INTO sessions (sid, data) VALUES ($1, $2)
    RETURNING sid
  `;
  return db
    .query(INSERT_SESSION, [sid, data])
    .then((result) => result.rows[0].sid);
}

module.exports = {
    getUser,
    createSession,

};
