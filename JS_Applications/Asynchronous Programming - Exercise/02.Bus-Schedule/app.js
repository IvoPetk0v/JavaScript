function solve() {
    const url = "http://localhost:3030/jsonstore/bus/schedule/";
    const infoBar = document.getElementById("info").firstChild;
    const depBtn = document.getElementById("depart");
    const arrBtt = document.getElementById("arrive");

    let nextStopID = "depot";
    let stopID = "";

    async function depart() {
        try {
            const response = await fetch((url + nextStopID));
            const data = await response.json();
            nextStopID = data.next;
            stopID = data.name;
            infoBar.textContent = `Next stop ${stopID}`;
            depBtn.disabled = true;
            arrBtt.disabled = false;
        } catch (error) {
            infoBar.textContent = "Error";
            depBtn.disabled = true;
            arrBtt.disabled = true;
        }
    }

    function arrive() {
        infoBar.textContent = `Arriving at ${stopID}`;
        depBtn.disabled = false;
        arrBtt.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();