const layout = require('../layout')

function get(request, response) {
  const html = `
  <h1>Welcome</h1>
    
  `
  response.send(layout('Welcome', html))

}

module.exports = { get }