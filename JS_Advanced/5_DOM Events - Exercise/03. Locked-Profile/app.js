function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll("button"));
    
    buttons.forEach(element => {
        element.addEventListener("click", ShowAndHide);
        document.getElementById
    });

    function ShowAndHide(e) {

        let checkboxLocked = e.target.parentElement.querySelectorAll("input[type=radio]")[0];
        let button = e.target.parentElement.querySelector("button");
        let hiddenDiv = e.target.parentElement.querySelector("div");

        if (!checkboxLocked.checked && button.innerText === 'Show more') {
            hiddenDiv.style.display = "block";
            button.innerText = 'Hide it';
        } else if (!checkboxLocked.checked && button.innerText === 'Hide it') {
            hiddenDiv.style.display = "none";
            button.innerText = 'Show more';
        }
    }
}