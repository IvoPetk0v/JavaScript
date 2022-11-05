async function getInfo() {
    const input = document.getElementById("stopId");
    const busID = input.value;
    const url = "http://localhost:3030/jsonstore/bus/businfo/";
    const stopName = document.getElementById("stopName");
    const busList = document.getElementById("buses");
    busList.innerHTML = ""
    input.value = "";

    try {
        const response = await fetch(url + busID);
        const data = await response.json();
        stopName.textContent = data.name;
        Object.entries(data.buses).forEach(bus => {
            const li = document.createElement("li");
            li.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
            busList.appendChild(li);
        });
    } catch (error) {
        stopName.textContent = "Error";
    }
}