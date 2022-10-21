window.addEventListener("load", solve);

function solve() {
    let typeProduct = document.getElementById("type-product");
    let description = document.getElementById("description");
    let clientName = document.getElementById("client-name");
    let clientPhone = document.getElementById("client-phone");
    let submitBtn = Array.from(document.getElementsByTagName("button")).find(x => x.type === "submit");
    submitBtn.addEventListener("click", submitData);
    let sectionRcvOrd = document.getElementById("received-orders");
    let sectionCmplOrd = document.getElementById("completed-orders");
    let clearBtn = Array.from(document.getElementsByTagName("button")).find(x => x.className === "clear-btn");
    clearBtn.addEventListener("click", clear);


    function submitData(e) {
        let typeProductValue = typeProduct.value;
        let descriptValue = description.value;
        let clientNameValue = clientName.value;
        let clientPhoneValue = clientPhone.value;
        if (!descriptValue || !clientNameValue || !clientPhoneValue) {
            return;
        }
        typeProduct.value = "";
        description.value = "";
        clientName.value = "";
        clientPhone.value = "";
        addReceivedOrderElements(typeProductValue, descriptValue, clientNameValue, clientPhoneValue);
    }
    function addReceivedOrderElements(typeProductValue, descriptValue, clientNameValue, clientPhoneValue) {

        let div = document.createElement("div");
        div.className = "container";

        let h2 = document.createElement("h2");
        h2.textContent = `Product type for repair: ${typeProductValue}`;

        let h3 = document.createElement("h3");
        h3.textContent = `Client information: ${clientNameValue}, ${clientPhoneValue}`;

        let h4 = document.createElement("h4");
        h4.textContent = `Description of the problem: ${descriptValue}`;

        let startBtn = document.createElement("button");
        startBtn.className = "start-btn";
        startBtn.textContent = "Start repair";
        startBtn.addEventListener("click", startRepairing);

        let finishtBtn = document.createElement("button");
        finishtBtn.className = "finish-btn";
        finishtBtn.textContent = "Finish repair"
        finishtBtn.disabled = true;


        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startBtn);
        div.appendChild(finishtBtn);
        div.style.display = "block";
        sectionRcvOrd.appendChild(div);
    }
    function startRepairing(e) {
        e.target.disabled = true;
        let finishtBtn = e.target.parentElement.getElementsByClassName("finish-btn")[0]
        finishtBtn.addEventListener("click", finishRepairing);
        finishtBtn.disabled = false;

    }
    function finishRepairing(e) {
        let div = (e.target.parentElement);
        Array.from(div.getElementsByTagName("button")).forEach(btn => btn.remove());
        sectionCmplOrd.appendChild(div);
    }
    function clear(e) {
        Array.from(e.target.parentElement.getElementsByTagName("div")).forEach(e=>e.remove());
    }
}