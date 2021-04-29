const layout = require('../layout')

function get(request, response) {
  const html = `
  <h1>Welcome</h1>
    <a href="/sign-up">Sign up</a>
    <span> | </span>
    <a href="/log-in">Log in</a>
  `;
  response.send(layout('Welcome', html))

}

module.exports = { get }
