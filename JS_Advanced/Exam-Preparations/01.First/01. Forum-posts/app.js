window.addEventListener("load", solve);

function solve() {
    let titleField = document.getElementById("post-title");
    let categoryField = document.getElementById("post-category");
    let contentField = document.getElementById("post-content");
    let publishBtn = document.getElementById("publish-btn");
    let ul = document.getElementById("review-list");
    let apprSection = document.getElementById("published-list");

    publishBtn.addEventListener("click", public);
    document.getElementById("clear-btn").addEventListener("click", clearPost);

    function public() {
        let titleValue = titleField.value;
        let categoryValue = categoryField.value;
        let contentValue = contentField.value;
        if (!titleValue || !categoryValue || !contentValue) {
            return;
        }
        createElements(titleValue, categoryValue, contentValue);
    }
    function createElements(titleValue, categoryValue, contentValue) {
        let li = document.createElement("li");
        li.classList.add("rpost");

        let article = document.createElement("article");

        let h = document.createElement("h4");
        h.textContent = titleValue;

        let categoryP = document.createElement("p");
        categoryP.textContent = `Category: ${categoryValue}`;

        let contentP = document.createElement("p");
        contentP.textContent = `Content: ${contentValue}`
        article.appendChild(h);
        article.appendChild(categoryP);
        article.appendChild(contentP);

        let editButton = document.createElement("button");
        editButton.classList.add("action-btn");
        editButton.classList.add("edit");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", editPost);

        let approveButton = document.createElement("button");
        approveButton.classList.add("action-btn");
        approveButton.classList.add("approve");
        approveButton.textContent = "Approve";
        approveButton.addEventListener("click", approve);

        li.appendChild(article);
        li.appendChild(editButton);
        li.appendChild(approveButton);
        ul.appendChild(li);
        titleField.value = "";
        categoryField.value = "";
        contentField.value = "";
    }
    function editPost(event) {
        let currPost = event.target.parentElement;
        let articleContent = currPost.getElementsByTagName("article")[0].children;

        let titleValue = articleContent[0].textContent;
        let categoryValue = articleContent[1].textContent;
        let contentValue = articleContent[2].textContent;
        titleField.value = titleValue;
        categoryField.value = categoryValue.split(": ")[1];
        contentField.value = contentValue.split(": ")[1];
        currPost.remove();
    }
    function approve(e) {
        let currPost = e.target.parentElement;
        apprSection.appendChild(currPost);
        currPost.querySelectorAll("button")[0].remove();
        currPost.querySelectorAll("button")[0].remove();
    }
    function clearPost(e) {
        Array.from(apprSection.children).forEach(li => li.remove());
    }
}