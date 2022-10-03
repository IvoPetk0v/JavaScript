function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableRows = document.querySelectorAll("tbody tr");
      let input = document.getElementById('searchField').value;

      for (const iterator of tableRows) {
         iterator.classList.remove('select');
         let text = iterator.innerHTML;
         if (text.includes(input) && input !== "") {
            iterator.className = "select";
         }
      }
      input = '';
   }
}