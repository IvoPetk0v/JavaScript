function solve() {

  let generate = document.getElementsByTagName("button")[0];
  let buy = document.getElementsByTagName("button")[1];
  let textAreaInput = document.querySelectorAll("textarea")[0];
  let textAreaOuput = document.querySelectorAll("textarea")[1];

  generate.addEventListener("click", Generate);
  buy.addEventListener("click", Buy);

  function Generate(e) {
    let input = JSON.parse(textAreaInput.value);
    for (let i = 0; i < input.length; i++) {
      const rowData = input[i];
      document.querySelectorAll("tr")[1]
        .getElementsByTagName("td")[4]
        .getElementsByTagName("input")[0]
        .disabled = false;
      let newElement = document.querySelectorAll("tr")[1].cloneNode(true);
      let rows = newElement.getElementsByTagName("td");
      let first = rows[0].getElementsByTagName('img')[0].src = rowData.img;
      let second = rows[1].getElementsByTagName("p")[0].textContent = rowData["name"];
      let third = rows[2].getElementsByTagName("p")[0].textContent = rowData["price"];
      let forth = rows[3].getElementsByTagName("p")[0].textContent = rowData["decFactor"];
      document.getElementsByTagName("tbody")[0].appendChild(newElement);
    }
  }

  function Buy(e) {
    let products = [];
    let totalPrice = 0;
    let avgDecFactor = 0;

    let checkBoxes = Array.from(document.querySelectorAll("tr td input"));
    if (checkBoxes.length === 0) {
      return;
    }
    checkBoxes.forEach(element => {
      if (element.checked) {
        let tableRow = element.parentElement.parentElement;
        products.push(tableRow.getElementsByTagName("p")[0].textContent);
        totalPrice += Number(tableRow.getElementsByTagName("p")[1].textContent);
        avgDecFactor += Number(tableRow.getElementsByTagName("p")[2].textContent)
      }
    });
    avgDecFactor /= checkBoxes.length;
    let result = `Bought furniture: ${products.join(", ")}\nTotal price: ${totalPrice}\nAverage decoration factor: ${avgDecFactor}`;
    textAreaOuput.textContent = result;
  }
}