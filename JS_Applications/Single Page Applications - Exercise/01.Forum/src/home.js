const homeSection = document.getElementById("homeView");
const main = document.getElementsByTagName("main")[0];
const topicForm = document.querySelector("#homeView form");


topicForm.addEventListener("submit", onSubmit);
homeSection.remove();

export function showHomePage() {
    main.replaceChildren(homeSection);

}

function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(topicForm);
    const body = Object.fromEntries(formData);
    createPost(body);
}
async function createPost(body) {
    const url = "http://localhost:3030/jsonstore/collections/myboard/posts";

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body)
    });
    const data = await response.json();
    return data;
}