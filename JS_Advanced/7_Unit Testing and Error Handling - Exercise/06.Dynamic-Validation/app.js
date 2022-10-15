function validate() {
    let input = document.getElementById('email');
    input.addEventListener("change", onChange);

    function onChange(e) {
        let textInput = e.target.value;
        let emailPattern = /[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+/g

        if (emailPattern.test(textInput)) {
            e.target.classList.remove("error")
        } else {
            e.target.classList.add("error")
        }
    }
}