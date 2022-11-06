async function lockedProfile() {
    document.querySelector("div.profile").getElementsByTagName("div")[0].style.display = "none";
    let profileDiv = document.querySelector("div.profile");
    let listOfInput = Array.from(document.querySelectorAll("div input")).filter(x => x.tagName === "INPUT");
    let listOfElements = [];

    function onToggle(e) {
        if (e.target.parentElement.getElementsByTagName("INPUT")[0].checked) {
            return;
        }
        if (e.target.parentElement.getElementsByTagName("div")[0].style.display !== "block") {
            e.target.parentElement.getElementsByTagName("div")[0].style.display = "block";
            e.target.textContent = "Hide it";

        } else {
            e.target.parentElement.getElementsByTagName("div")[0].style.display = "none";
            e.target.textContent = "More";
        }
    }

    const url = "http://localhost:3030/jsonstore/advanced/profiles";
    let profileList = await getProfileData(url);
    for (let i = 0; i < profileList.length; i++) {
        let p = profileList[i];

        listOfInput[2].value = p.username;
        listOfInput[3].value = p.email;
        listOfInput[4].value = p.age;
        document.querySelectorAll("div div")[1].id = `user${i + 1}HiddenFields`
        document.querySelectorAll("div div")[1].className = "";
        listOfInput[0].name = `user${i + 1}Locked`;
        listOfInput[1].name = `user${i + 1}Locked`;
        listOfInput[2].name = `user${i + 1}Username`;
        listOfInput[3].name = `user${i + 1}Email`;
        listOfInput[4].name = `user${i + 1}Age`;
        listOfInput[4].type = "email";
        let profileElement = profileDiv.cloneNode(true);
        listOfElements.push(profileElement);

    }

    listOfElements.forEach(x => { profileDiv.parentElement.appendChild(x) });
    profileDiv.remove();
    let btnShowMore = Array.from(document.querySelectorAll("div.profile button")).forEach(b => {
        b.addEventListener("click", onToggle);
    });

}
async function getProfileData(url) {
    const response = await fetch(url);
    const data = await response.json();
    const profileList = Object.values(data);
    return profileList;
}