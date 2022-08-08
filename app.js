let myLibrary = [];

// Book Constructor
function Book(title, author, pages, readOrNot) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readOrNot = readOrNot;
  this.info = () => {
    return title + " by " + author + ", " + pages + " pages, " + readOrNot;
  };
}

function addBookToLibrary() {
  
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet");

console.log(theHobbit.info());
