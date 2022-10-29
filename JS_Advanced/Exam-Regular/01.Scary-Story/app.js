window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let age = document.getElementById("age");
  let storyTitle = document.getElementById("story-title");
  let genre = document.getElementById("genre");
  let story = document.getElementById("story");

  let publishBtn = document.getElementById("form-btn");
  publishBtn.addEventListener("click", publish);

  let ulPr = document.getElementById("preview-list");

  function publish(e) {
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let ageValue = age.value;
    let storyTitleValue = storyTitle.value;
    let genreValue = genre.value;
    let storyValue = story.value;
    if (!firstNameValue || !lastNameValue || !ageValue || !storyTitleValue || !genreValue || !storyValue) {
      return;
    }

    // Create elements function 
    let li = document.createElement("li");
    li.className = "story-info";

    let article = document.createElement("article");

    let h4 = document.createElement("h4");
    h4.textContent = `Name: ${firstNameValue} ${lastNameValue}`;

    let pAge = document.createElement("p");
    pAge.textContent = `Age: ${ageValue}`;

    let pTitle = document.createElement("p");
    pTitle.textContent = `Title: ${storyTitleValue}`;

    let pGenre = document.createElement("p");
    pGenre.textContent = `Genre: ${genreValue}`;

    let pStory = document.createElement("p");
    pStory.textContent = `${storyValue}`;

    let saveBtn = document.createElement("button");
    saveBtn.className = "save-btn";
    saveBtn.textContent = `Save Story`;
    saveBtn.addEventListener("click", saveStory);

    let editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit Story";
    editBtn.addEventListener("click", editStory);

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete Story";
    deleteBtn.addEventListener("click", deleteStory);

    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStory);
    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    ulPr.appendChild(li);
    publishBtn.disabled = true;

    firstName.value = "";
    lastName.value = "";
    age.value = "";
    storyTitle.value = "";
    debugger;
    genre.value="";
    story.value = "";

  }
  function saveStory(e) {
    let div = document.getElementById("main");
    let h1 = document.createElement("h1");
    h1.textContent = "Your scary story is saved!";
    div.replaceChildren(h1);
  }
  function editStory(e) {
    
    let articleData = Array.from(e.target.parentElement.firstChild.children)
    firstName.value = articleData[0].textContent.split(": ")[1].split(" ")[0];
    lastName.value = articleData[0].textContent.split(": ")[1].split(" ")[1];
    age.value = articleData[1].textContent.split(": ")[1];
    storyTitle.value = articleData[2].textContent.split(": ")[1];
    genre.value = articleData[3].textContent.split(": ")[1];
    story.value=articleData[4].textContent;
    //story.value =Array.from(articleData[4].textContent).splice(1,(articleData[4].textContent.length-2)).join("");
    publishBtn.disabled=false;
        e.target.parentElement.remove();

  }
  function deleteStory(e) {

    e.target.parentElement.remove();
    publishBtn.disabled = false;
  }
}
