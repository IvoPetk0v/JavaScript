function addItem() {
    let itemText = document.getElementById("newItemText").value;
    let itemValue = document.getElementById("newItemValue").value;
    let option = document.createElement("option");
    let select = document.getElementById("menu");

    option.textContent = itemText;
    option.value = itemValue;
    select.appendChild(option);
    
    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";

}