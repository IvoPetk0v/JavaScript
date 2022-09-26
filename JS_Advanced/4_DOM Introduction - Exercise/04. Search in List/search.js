function search() {
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let text = document.getElementById("searchText").value;
   let matchedElement = document.getElementById("result");
   let count = 0;
   for (const town of towns) {
      if (town.textContent.includes(text) && text != "") {
         count++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   matchedElement.textContent = `${count} matches found`
}
