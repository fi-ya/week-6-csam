const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const model = require("./database/model");

const COOKIE_OPTIONS = {
  httpOnly: true,
  maxAge: 600000,
  sameSite: "strict",
  signed: true,
};

function createUser(email, password, name) {
  return bcrypt
    .hash(password, 10)
    .then((hash) => model.createUser(email, hash, name));
}

function saveUserSession(user) {
    const sid = crypto.randomBytes(18).toString("base64");
    return model.updateSession(sid, { user });
}



module.exports = { createUser, saveUserSession,COOKIE_OPTIONS };