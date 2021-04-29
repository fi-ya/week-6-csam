const layout = require('../layout');
const model = require('../database/model.js');
const db = require('../database/connection');

function htmlPostForm() {
  return `
    <h1>Checkin'?</h1>
    <form action="/posts" method="POST">
        <div>
            <label for="text_content"> Leave your question here! </label>
            <textarea name= "text_content" id="text_content" required>
            </textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
    <a href="/">Back to Homepage</a>
    `;
}
/*
server.get('/', (request, response) => {
  db.query("SELECT firstname FROM fac_members")
  .then((result) => {
    const members = result.rows;
    const membersList = members.map((x) => `
      <li>${x.firstname}</li>
      <form action="/delete-user" method="POST" style="display: inline;">
        <button name="name" value="${x.firstname}" aria-label="Delete ${x.firstname}">
          Delete
        </button>
      </form>`).join("");

    response.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <h1>My Database</h1>
      <ul>
        ${membersList}
      </ul>
      <a href='/add-person'>Add yourself to the list!</a><br>
      <a href='/comments'>Add a comment!</a>
    </body>
    </html>
    `);
  })
})
*/


/*
const db = require("../database/connection.js");

function post(request, response) {
  const idToDelete = request.body.id;
  // Note: this also deletes all the user's blog_posts
  // see "ON DELETE CASCADE" in init.sql
  db.query("DELETE FROM users WHERE id = $1", [idToDelete]).then(() => {
    response.redirect("/");
  });
}

module.exports = { post };
*/


function displayPosts() {
  return db.query("SELECT * FROM posts").then((result) => {
    const posts = result.rows;
     console.log(posts)
    const postContent = posts.map((question) => `
    <div>
    <span>${question.user_id}</span>
    <p>${question.text_content}</p>
    <form action="/delete-post" method="POST" style="display: inline;">
        <button name="id" value="${question.id}" aria-label="Delete post">
          Delete
        </button>
      </form>
      </div>`).join(""); 
    // console.log(textContent)
//then scope: returns if promise is fulfilled
    return `
    <section>
    ${postContent}
    <section>
    ` 

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
  const { text_content } = request.body;
  const sid = request.signedCookies.sid;
  if (sid) {
    model
      .getUserSessionData(sid)
      .then((result) => {
        const user_id = result.data.user.id;
        return model.createPost(user_id, text_content);
      })
      .then(response.redirect("/posts"));
  }
  response.redirect("/log-in")
}

function deletePost  (request, response) {
        const postId = request.body.id;
        console.log(postId)
        return db
          .query("DELETE FROM posts WHERE id = $1", [postId])
          .then(() => {
            response.redirect("/posts");
          })
      
}
module.exports = { get, post, deletePost };
