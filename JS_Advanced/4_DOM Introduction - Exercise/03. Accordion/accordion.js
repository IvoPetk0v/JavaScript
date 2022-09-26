function toggle() {
    let buttonName = document.getElementsByClassName("button")[0];
    let displayStyle = document.getElementById("extra");

    if (buttonName.innerHTML === "More") {
        displayStyle.style.display = "block";
        buttonName.textContent = "Less";

    } else {
        displayStyle.style.display = "none"
        buttonName.textContent = "More";
    }
}
