const url = "http://localhost:3030/jsonstore/collections/books";
document.getElementById("loadBooks").addEventListener("click", loadBooks);
const tbodyElement = document.querySelector("tbody");
const form = document.querySelector("form");
const submitBtn = document.querySelector("form button");
submitBtn.addEventListener("click", onPost);

async function onPost(e) {

    if (e.target.textContent == "Save") {
        await onSave(e);
    } else {
        await onSubmit(e);
    }
}

loadBooks();

async function loadBooks() {
    const response = await fetch(url);
    const data = await response.json();
    renderBookLoad(Object.entries(data));
}

function renderBookLoad(data) {

    tbodyElement.replaceChildren();

    for (const element of data) {
        let tr = document.createElement("tr");
        let id = element[0];

        let author = element[1].author;
        let title = element[1].title;

        let tdTitle = document.createElement("td")
        let tdAuthor = document.createElement("td")

        tdTitle.textContent = title;
        tdAuthor.textContent = author;

        let tdAction = document.createElement("td")
        tdAction.id = id;
        let editBtn = document.createElement("button");
        let delBtn = document.createElement("button");

        editBtn.textContent = "Edit";
        delBtn.textContent = "Delete";

        editBtn.addEventListener("click", onEdit);
        delBtn.addEventListener("click", onDelete);

        tdAction.appendChild(editBtn);
        tdAction.appendChild(delBtn);

        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdAction);
        tbodyElement.appendChild(tr);
    }
}
async function onEdit(e) {
    let id = e.target.parentElement.id;
    let row = e.target.parentElement.parentElement.children
    let currTitle = row[0].textContent;
    let currAuthotr = row[1].textContent;

    form.querySelector("h3").textContent = "Edit FORM";
    let [titleField, authorField] = Array.from(form.querySelectorAll("input"));
    titleField.value = currTitle;
    authorField.value = currAuthotr;
    submitBtn.textContent = "Save";
    submitBtn.id = id;

}

async function onDelete(e) {
    let id = e.target.parentElement.id;
    try {
        const response = await fetch(url + "/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        let responseStatus = await response.status;
        if (responseStatus != 200) {
            throw new Error("Can`t delete something which didn`t exist")
        }
        loadBooks(); // may have to remove tr instead ... 
    } catch (error) {
        window.alert(error.message);
    }
}
async function onSave(e) {
   
    let id = e.target.id;
    let title = e.target.parentElement.querySelectorAll("input")[0].value;
    let author = e.target.parentElement.querySelectorAll("input")[1].value;

    let body = JSON.stringify({
        "author": author,
        "title": title
    });
    const response = await fetch(url + "/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: body
    });

    loadBooks(); 

}
async function onSubmit(e) {
  
    let title = e.target.parentElement.querySelectorAll("input")[0].value;
    let author = e.target.parentElement.querySelectorAll("input")[1].value;
    if (title && author) {
        let body = JSON.stringify({
            "author": author,
            "title": title
        });
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        });

        loadBooks();
    } else {
        return;
    }
}
