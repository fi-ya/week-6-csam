const layout = require('../layout');
const auth = require('../auth.js');

function get(request, response) {
  const html = `
  <h1>Log in</h1>
    <form action="log-in" method="POST">
      <label for="email">Email</label>
      <input type="email" id="email" name="email">
      <label for="password">Password</label>
      <input type="password" id="password" name="password">
      <button>Log in</button>
    </form>
  `
  response.send(layout('Log in', html))

}

// step 3 for login - getting user input, verify details, create/save sid, create cookie, redirect /
function post(request, response) {
  const { email, password } = request.body;
  console.log({ email, password });
}

module.exports = { get, post };
