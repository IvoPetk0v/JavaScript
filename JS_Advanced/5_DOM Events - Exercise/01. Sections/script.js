function create(words) {
   let output = document.getElementById("content");

   words.forEach(element => {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.style.display = "none";
      p.innerText = element;
      div.appendChild(p);
      div.addEventListener("click", ShowP)
      output.appendChild(div);

   });
   function ShowP(event) {
      event.target.children[0].style.display = "";
   }
}  