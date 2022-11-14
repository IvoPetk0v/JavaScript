const url = "http://localhost:3030/jsonstore/collections/students";
let resTableBody = document.querySelector("div table tbody");
let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", onSubmit)
async function loadResultTable() {
    try {
        const data = await FetchResultTable();
        createTrElements(data);
        document.querySelector("p.notification").innerText = "";
    } catch (error) {
        document.querySelector("p.notification").innerText = "There is no students to show yet";
    }
};


loadResultTable();


function onSubmit(e) {
    e.preventDefault();
    document.querySelector("p.notification").innerText = "";
    let [firstName, lastName, facNum, grade] = (Array.from(document.querySelectorAll("input"))).map(e => e.value);

    try {

        if (!firstName || !lastName || !facNum || !grade) {
            throw new Error("All form fields must be filled")
        }
        if (!Number(facNum)||!Number(grade)) {
            throw new Error("Faculty number and Grade values must be a number")
        }
    } catch (error) {
        document.querySelector("p.notification").innerText = error;
        return;
    }

    function createStudent(firstName, lastName, facNum, grade) {
        return {
            "firstName": firstName,
            "lastName": lastName,
            "facultyNumber": facNum,
            "grade": Number(grade)
        }
    };
    PostStudent(createStudent(firstName, lastName, facNum, grade));
    loadResultTable();
    Array.from(document.querySelectorAll("input")).forEach(e => e.value = "");
}

async function PostStudent(student) {
    const post = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    });

}
async function FetchResultTable() {
    const response = await fetch(url);
    const data = await response.json();
    return Object.values(data);
}
function createTrElements(data) {
    if (!data) {
        return;
    }
    resTableBody.replaceChildren();
    data.forEach(row => {
        row = Object.values(row);

        let tableRow = document.createElement("tr");
        for (let i = 0; i < 4; i++) {
            let newThEl = document.createElement("td");
            newThEl.innerText = row[i];
            tableRow.appendChild(newThEl);
        }
        resTableBody.appendChild(tableRow);
    })
}