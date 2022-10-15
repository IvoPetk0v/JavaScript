function validate() {
    let userNameField = document.getElementById("username");
    let emailField = document.getElementById("email");
    let passWordField = document.getElementById("password");
    let passConfField = document.getElementById("confirm-password");
    let companyCb = document.getElementById("company");
    let companyInfoField = document.getElementById("companyInfo");
    let companyNumberField = document.getElementById("companyNumber");
    let submitBtn = document.getElementById("submit");
    let validDiv = document.getElementById("valid");

    companyCb.addEventListener("change", onChange);
    submitBtn.addEventListener("click", submitInput);
    function onChange(e) {
        if (e.target.checked) {
            companyInfoField.style.display = "block";
        } else {
            companyInfoField.style.display = "none";
        }
    }
    function submitInput(e) {
        let usernamePattern = /^[a-zA-Z0-9]{3,20}$/g;
        let passwordPattern = /^[\w]{5,15}$/g;
        let emailPattern = /.*[@].*[.]{1,}.*/g
        let isDone = false;
        if (usernamePattern.test(userNameField.value)) {
            userNameField.style.border = "none";
        } else {
            setBorderColor(userNameField, "red");
        }
        if (passwordPattern.test(passWordField.value) && passWordField.value === passConfField.value) {
            passWordField.style.border = "none";
            passConfField.style.border = "none";
        } else {
            setBorderColor(passWordField, "red");
            setBorderColor(passConfField, "red");
        }
        if (emailPattern.test(emailField.value)) {
            emailField.style.border = "none";
        } else {
            setBorderColor(emailField, "red");
        }
        if (companyInfoField.style.display === "block") {
            if (isValidCompanyNumber(companyNumberField.value)) {
                companyNumberField.style.border = "none";
            } else {
                setBorderColor(companyNumberField, "red");
            }
        }
        let arrayFields = Array.from(document.querySelectorAll("div.pairContainer input"));
        let isValid = true;
        for (const field of arrayFields) {
            if (field.style.borderColor === "red") {
                isValid = false;
            }
        }
        isDone = isValid;
        if (isDone) {
            validDiv.style.display = "block";
        } else {
            validDiv.style.display = "none";
        }
        e.preventDefault();
    }
    function setBorderColor(field, color) {
        field.style.borderColor = color;
    }
    function isValidCompanyNumber(number) {
        if (Number(number) < 1000 || Number(number) > 9999) {
            return false;
        } else {
            return true;
        }
    }

}
