const express = require("express");

const server = express();
const staticHandler = express.static("public");
//const posts = require("./routes/posts.js");
const home = require("./routes/home.js");
const model = require("./database/model.js");
const logIn = require("./routes/logIn.js");

server.use(staticHandler);
const bodyParser = express.urlencoded({ extended: false });

server.get('/', logIn.get);
server.post('/log-in', logIn.post);



const PORT = process.env.PORT || 3000;

process.on("unhandledRejection", (error) => {
  console.error(error);
  process.exit(1);
});

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
