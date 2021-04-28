const layout = require('../layout')

function get(request, response) {
  const html = `
  <h1>Welcome</h1>
  <form action='/sign-up' method='POST'>
    <label for='name'>Name</label>
    <input type="text" id='name' name='name' required />
    <label for='password'>Password</label>
    <input type="password" id='password' name='password' required />
    <button>Submit</button>
  </form>

  `
  response.send(layout('Sign up', html))
}

function post(request, response) {
  const newUser = request.body;
  console.log(newUser)
  response.redirect('/')
}

module.exports = { get, post };