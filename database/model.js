//this function is going to fetch user from database 
function getUser(email) {
    const SELECT_USER = `
      SELECT id, email, password, name FROM users WHERE email=$1
    `;
    return db.query(SELECT_USER, [email]).then((result) => result.rows[0]);
  }