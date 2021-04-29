const layout = require('../layout');
const model = require('../database/model.js');
const db = require('../database/connection');

function htmlPostForm() {
    return `

    // insert from html here

    `;
}

function displayPosts() {
  return db.query("SELECT * FROM posts").then((result) => {
    const posts = result.rows;
    // console.log(posts)
    const textContent = posts.map((question) => `<p>${question.text_content}</p>`).join(""); 
    // console.log(textContent)

    return textContent //then scope: returns if promise is fulfilled
  })
}


function get(request, response) {
    displayPosts().then((post) => {
      const html = layout(
        `Checkin'?`,
          htmlPostForm() + post
      );
      response.send(html);
    })
   

}

function post(request, response) {


}

module.exports = { get, post, displayPosts };
