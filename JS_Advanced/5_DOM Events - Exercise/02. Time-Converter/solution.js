function attachEventsListeners() {

    let buttons = Array.from(document.querySelectorAll("input[type=button]"));
    buttons.forEach(element => {
        element.addEventListener("click", convert)
    });


    function convert(event) {
        let value = Number(event.target.parentElement.querySelector("input[type=text]").value);
        let unit = event.target.id;
        switch (unit) {
            case "daysBtn":
                populate(value);
                break;
            case "hoursBtn":
                populate(value / 24);
                break;
            case "minutesBtn":
                populate(value / 24 / 60);
                break;
            case "secondsBtn":
                populate(value / 24 / 60 / 60)
                break;
        }
    }
    function populate(value) {
        let inputs = Array.from(document.querySelectorAll("input[type=text]"));
        inputs.shift().value = value;
        let currValue = value * 24;
        inputs.forEach(element => {
            element.value = currValue;
            currValue *= 60;
        });
    }
}
