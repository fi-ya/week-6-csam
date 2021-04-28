const express = require("express");

const server = express();
const staticHandler = express.static("public");
const signUp = require("./routes/signUp.js");

server.use(staticHandler);
const bodyParser = express.urlencoded({ extended: false });


server.get('/sign-up', signUp.get);
server.post('/sign-up', bodyParser, signUp.post);



const PORT = process.env.PORT || 3000;

process.on("unhandledRejection", (error) => {
  console.error(error);
  process.exit(1);
});

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
