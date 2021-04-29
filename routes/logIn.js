const layout = require('../layout');
const auth = require('../auth.js');

function get(request, response) {
  const html = `
  <h1>Log in</h1>
    <form action="/log-in" method="POST">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required>
      <button>Log in</button>
    </form>
    <a href="/">Back to Homepage</a>
  `;
  response.send(layout('Log in', html))

}

// step 3 for login - getting user input, verify details, create/save sid, create cookie, redirect /
function post(request, response) {
  const { email, password } = request.body;
  auth
    .verifyUser(email, password)
    .then(auth.saveUserSession)
    .then((sid) => {
      console.log(sid);
      response.cookie("sid", sid, auth.COOKIE_OPTIONS);
      response.redirect("/");
    })
    .catch((error) => {
      console.error(error);
      const html =
        `<h1>User not found</h1>
        <a href="/">Back to Homepage</a>
        `;
      response.send(layout('User not found', html));

    });
}
module.exports = { get, post };
