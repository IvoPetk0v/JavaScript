document.getElementById("refresh").addEventListener("click", onRefresh);
document.getElementById("submit").addEventListener("click", onSumbit);;
let textArea = document.getElementById("messages");

const url = "http://localhost:3030/jsonstore/messenger";

function attachEvents() {


}

attachEvents();
async function onRefresh() {
    textArea.textContent = "";
    let result = await loadMsgs();
    textArea.textContent = result;
}
async function onSumbit(e) {

    let [authorField, msgField] = Array.from(e.target.parentElement.querySelectorAll("input"))
        .filter(x => x.type == "text");

    let post = {
        author: authorField.value,
        content: msgField.value,
    };
    await createMsg(post);
    let result = await loadMsgs();
    textArea.textContent = result;
}

async function createMsg(post) {
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(post)
    })
}
async function loadMsgs() {
    const res = await fetch(url);
    const data = await res.json();
    return Object.values(data).map(r => r = `${r.author}: ${r.content}`).join("\n");
}
