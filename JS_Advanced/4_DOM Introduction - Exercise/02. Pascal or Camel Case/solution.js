function solve() {
  let input = document.getElementById("text").value.toLowerCase();
  let currCase = document.getElementById("naming-convention").value;
  let result = "";
  if (currCase === "Camel Case") {
    let array = input.split(" ");
    result += array[0];
    for (let i = 1; i < array.length; i++) {
      const element = array[i];
      result += element.charAt(0).toUpperCase() + element.slice(1);
    }
  } else if (currCase === "Pascal Case") {
    let array = input.split(" ");
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      result += element.charAt(0).toUpperCase() + element.slice(1);
    }
  } else {
    result = "Error!";
  }
  document.getElementById("result").innerText = result;
}