const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const content = document.querySelector(".content");

let myLibrary = [];
let booksToPrint = [];

// Book Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;

  if (read == true) {
    this.read = "Read";
  } else {
    this.read = "Not Read";
  }
}

function addBookToLibrary() {
  if (title.value == "" || author.value == "" || pages.value == "") {
    alert("Empty Input Fields");
    location.reload();
    return;
  }

  let book = new Book(title.value, author.value, pages.value, read.checked);
  myLibrary.push(book);
  booksToPrint.push(book);
  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false;
  printBooks(myLibrary.length);
}

function changeReadStatus(value) {
  if (value.innerHTML == "Read") {
    value.innerHTML = "Not Read";
  } else {
    value.innerHTML = "Read";
  }
}

function deleteCard(cardIndex) {
  let card = cardIndex;
  content.removeChild(cardIndex);
}

function printBooks(index) {
  booksToPrint.forEach((element) => {
    let card = document.createElement('div');
    card.setAttribute("id", index - 1);
    if (element.read == "Read") {
      card.classList.add("card");
      card.innerHTML = `<h5>${element.title}</h5>
      <p>Author: ${element.author}</p>
      <p>Pages: ${element.pages}</p>
      <div class="read">
        <button type="button" id="${index}button" class="read-button" onclick="changeReadStatus(document.getElementById('${index}button'))">${element.read}</button>
      </div>
      <button type="button" class="remove-button" onclick="deleteCard(document.getElementById('${index - 1}')">Remove</button>
    </div>`;
    } else {
      card.classList.add("card");
      card.innerHTML = `<h5>${element.title}</h5>
      <p>Author: ${element.author}</p>
      <p>Pages: ${element.pages}</p>
      <div class="read">
        <button type="button" id="${index}button" class="read-button" onclick="changeReadStatus(document.getElementById('${index}button'))">${element.read}</button>
      </div>
      <button type="button" class="remove-button" onclick="deleteCard(document.getElementById('${index - 1}'))">Remove</button>
    </div>`;
    }
    
    content.append(card);
    booksToPrint.pop();
  });
}
