// Popup box view btn

let overlay = document.querySelector(".popup-overlay");
let popupBox = document.querySelector(".popup-box");

function popup() {
    overlay.style.display = "block";
    popupBox.style.display = "block";
}

// Popup box remove

function cancelbtn() {
    overlay.style.display = "none";
    popupBox.style.display = "none";
}

// insert values from popup box

let bookTitle = document.getElementById("book-title-input");
let bookAuthor = document.getElementById("book-author-input");
let description = document.getElementById("book-description-input");
let container = document.querySelector(".container");

function addBook() {
    let div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${bookTitle.value}</h2><h5>${bookAuthor.value}</h5><p>${description.value}</p><button onclick='deletebtn(event)'>Delete</button>`;
    container.append(div);
    cancelbtn();
}

// remove data

let bookContainer = document.querySelector("book-container");

function deletebtn(event) {
    event.target.parentElement.remove();
}