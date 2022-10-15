function notify(message) {
  
  let hiddenDiv = document.getElementById('notification');
  hiddenDiv.innerText = message;
  hiddenDiv.style.display = "block";
  hiddenDiv.addEventListener("click", hideBlock);
  function hideBlock(e) {
    e.target.style.display = "none";
  }
}