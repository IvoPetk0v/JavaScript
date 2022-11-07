let section = document.getElementById("main");
async function solution() {

    const url = "http://localhost:3030/jsonstore/advanced/articles/list";
    const response = await fetch(url);
    const data = await response.json();
    const articlesList = Array.from(Object.values(data));
    articlesList.forEach(a => {
        let name = a.title;
        let id = a._id;
        createArticleElements(name, id);
    })
}

function createArticleElements(name, id) {

    let mainDiv = document.createElement("div");
    mainDiv.className = "accordion";

    let headDiv = document.createElement("div");
    headDiv.className = "head";

    let span = document.createElement("span");
    span.textContent = name;

    let btn = document.createElement("button");
    btn.className = "button";
    btn.id = id;
    btn.textContent = "More";
    btn.addEventListener("click", onToggle);

    headDiv.appendChild(span);
    headDiv.appendChild(btn);

    let extraDiv = document.createElement("div");
    extraDiv.className = "extra";
    extraDiv.style.display = "none";
    let p = document.createElement("p");
    extraDiv.appendChild(p);

    mainDiv.appendChild(headDiv);
    mainDiv.appendChild(extraDiv);
    section.appendChild(mainDiv);
}

async function onToggle(e) {
    if (e.target.textContent === "More") {
        let extraDiv = e.target.parentElement.parentElement.getElementsByClassName("extra")[0];
        const url = "http://localhost:3030/jsonstore/advanced/articles/details/";
        const response = await fetch(url + e.target.id);
        const data = await response.json();
        const articlesData = [...Object.values(data)];
        extraDiv.firstChild.textContent = articlesData[2];
        extraDiv.style.display = "block";
        e.target.textContent = "Less";
    } else {
        e.target.parentElement.parentElement.getElementsByClassName("extra")[0].style.display = "none";
        e.target.textContent = "More";
    }
}
solution();