const express = require("express");

const server = express();
const staticHandler = express.static("public");
const posts = require("./routes/posts.js");
const home = require("./routes/home.js");
const model = require("./database/model.js");

server.use(staticHandler);
const bodyParser = express.urlencoded({ extended: false });


const PORT = process.env.PORT || 3000;

process.on("unhandledRejection", (error) => {
  console.error(error);
  process.exit(1);
});

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
