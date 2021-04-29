const layout = require("../layout");
const auth = require("../auth")

function get(request, response) {
  const html = `
  <h1>Sign up</h1>
  <form action='/sign-up' method='POST'>
  <label for='name'>Name <span aria-hidden="true">*</span></label>
    <input type="name" id='name' name='name' required />
    <label for='email'>Email <span aria-hidden="true">*</span></label>
    <input type="email" id='email' name='email' required />
    <label for='password'>Password <span aria-hidden="true">*</span></label>
    <input type="password" id='password' name='password' required />
    <button>Submit</button>
  </form>
  `;
  response.send(layout("Sign up", html));
}

function post(request, response) {
  const { name, email, password } = request.body;
  auth
  .createUser(email, password, name)
.then((user) => auth.saveUserSession(user))
.then((sid) => {
  response.cookie("sid", sid, auth.COOKIE_OPTIONS);
  response.redirect("/")
})
.catch((error) => {
  console.error(error);
  response.send(`<h1>Something went wrong</h1>`);
})
}

module.exports = { get, post };
