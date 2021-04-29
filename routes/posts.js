const layout = require('../layout');
const model = require('../database/model.js');

function htmlPostForm() {
    return `

    // insert from html here

    `;
}

function displayPosts() {
    return `

    // insert html here for posts layout ect divs with posts and delete button 

    `;
}


function get(request, response) {

    const html = layout(
      `Checkin'?`,
        htmlPostForm() + displayPosts()
    );
    response.send(html);

}

function post(request, response) {


}

module.exports = { get, post };
