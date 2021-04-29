const layout = require("../layout");
const model = require("../database/model.js");

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

function displayPosts() {
  return `

    // insert html here for posts layout ect divs with posts and delete button

    `;
}

function get(request, response) {
  const html = layout(`Checkin'?`, htmlPostForm() + displayPosts());
  response.send(html);
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
}

module.exports = { get, post };
