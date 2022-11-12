let titleElement = document.getElementById('post-title');
let bodyElement = document.getElementById('post-body');
let ulElement = document.getElementById('post-comments');
let selectEl = document.getElementById('posts');

function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', onLoadPosts);
    document.getElementById('btnViewPost').addEventListener('click', displayPost);

}
attachEvents();

async function displayPost() {
    ulElement.replaceChildren();
    let selectedId = document.getElementById('posts').value;
    if (!selectedId) {
        return;
    }

    let comments = await getCommentsByPostId(selectedId);
    comments.forEach(c => {
        let liElement = document.createElement('li');
        liElement.textContent = c.text;
        ulElement.appendChild(liElement);
    });
}

async function onLoadPosts() {
    let url = 'http://localhost:3030/jsonstore/blog/posts';
    selectEl.replaceChildren();

    let response = await fetch(url);
    let data = await response.json();
    let post = await Object.values(data)[0];
    titleElement.textContent = post.title;
    bodyElement.textContent = post.body;

    Object.values(data).forEach(p => {

        let optEl = document.createElement('option');
        optEl.textContent = p.title;
        optEl.value = p.id;

        selectEl.appendChild(optEl)
    });

    selectEl.addEventListener('change', showPost);

}
async function showPost(e) {
    ulElement.replaceChildren();
    let postID = e.target.selectedOptions[0].value;
    let post = await getPostById(postID);
    titleElement.textContent = post.title;
    bodyElement.textContent = post.body;

}
async function getPostById(postId) {
    let url = 'http://localhost:3030/jsonstore/blog/posts/' + postId;

    let res = await fetch(url);
    let data = await res.json();

    return data;
}

async function getCommentsByPostId(postId) {
    let url = 'http://localhost:3030/jsonstore/blog/comments';

    let res = await fetch(url);
    let data = await res.json();

    let comments = Object.values(data).filter(c => c.postId == postId);

    return comments;
}