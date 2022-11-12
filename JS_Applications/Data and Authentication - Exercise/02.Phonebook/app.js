let ulPhoneBook = document.getElementById("phonebook");
const url = "http://localhost:3030/jsonstore/phonebook";

function attachEvents() {
    document.getElementById("btnLoad").addEventListener("click", onLoad);
    document.getElementById("btnCreate").addEventListener("click", onCreate)
}
attachEvents();

async function onLoad() {
    ulPhoneBook.replaceChildren();
    let phoneBook = await loadRecords(url);
    phoneBook.forEach(element => {
        let li = document.createElement("li");
        let btn = document.createElement("button");
        btn.textContent = "Delete";
        li.textContent = `${element.person}: ${element.phone}`
        btn.id = element._id;
        btn.addEventListener("click", onDelete);
        li.appendChild(btn);
        ulPhoneBook.appendChild(li);
    });
}
async function onCreate() {

    let name = document.getElementById("person").value;
    let phone = document.getElementById("phone").value;
    if (!name || !phone) {
        return;
    }

    let body = { "person": name, "phone": phone };
    createRecord(body);
    document.getElementById("person").value = "";
    document.getElementById("phone").value = "";
    await onLoad();
}
async function onDelete(e) {
    deleteRecord(e.target.id);
    e.target.parentElement.remove();
}
async function loadRecords(url) {
    const res = await fetch(url);
    const data = await res.json();
    return Object.values(data);
}
async function createRecord(body) {
    const post = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "Application/json"
        },
        body: JSON.stringify(body)
    });
}
async function deleteRecord(id) {
    await fetch(`${url}/${id}`, {
        method: "DELETE"
    });
}

