//this function is going to fetch user from database
const db = require("../database/connection");

function getUser(email) {
  const SELECT_USER = `
      SELECT id, email, password, name FROM users WHERE email=$1
    `;
  return db.query(SELECT_USER, [email]).then((result) => result.rows[0]);
}

function createUser(email, hash, name) {
  const INSERT_USER = `
  INSERT INTO users (email, password, name) VALUES($1,$2,$3)
  RETURNING id, email, name
  `;
  return db
    .query(INSERT_USER, [email, hash, name])
    .then((result) => result.rows[0]);
}

module.exports = {
  createUser,
  getUser,
};
