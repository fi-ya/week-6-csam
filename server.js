const express = require("express");
const server = express();
const staticHandler = express.static("public");


// middleware - gets cookie header, parses into obj + attaches to request
const cookieParser = require('cookie-parser');
const homepage = require("./routes/home.js");
const logIn = require("./routes/logIn.js");
const signUp = require("./routes/signUp.js");
const bodyParser = express.urlencoded({ extended: false });


server.use(cookieParser(process.env.COOKIE_SECRET));
//const posts = require("./routes/posts.js");
server.use(staticHandler);


server.get("/", homepage.get);
server.get("/log-in", logIn.get);
server.post('/log-in', bodyParser, logIn.post);

server.get("/sign-up", signUp.get);
server.post("/sign-up", bodyParser, signUp.post);


const PORT = process.env.PORT || 3000;

process.on("unhandledRejection", (error) => {
  console.error(error);
  process.exit(1);
});

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
