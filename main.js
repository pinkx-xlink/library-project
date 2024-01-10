const myLibrary = [];

function Book(title, author, pages){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = String(`"${this.title}" by ${this.author} has ${this.pages} pages.`)
  this.readStatus = function() {
    const input = prompt(`Have you read ${this.title} yet?`);
    console.log(`"Have you read ${this.title} yet?" ${input}.`);
  };
  return this.info;
}

const book1 = new Book('The Well of Loneliness', 'Radclyffe Hall', 399);
book1.readStatus();

const book2 = new Book('All the Bright places', 'Jennifer Niven', 416);
book2.readStatus();


Book.prototype.format = function addBookToLibrary() {
  //get user input
  console.log(this);
  return this.info;
  //store this as a new Book obj into the array
};

book1.format();
myLibrary.push(book1);

book2.format();
myLibrary.push(book2);

const shelf = document.querySelector('#shelf');

function displayBook(myLibrary) {
  for (let i = 0; i < 3;) {
    if (i < 3) {
      const newCard = document.createElement('div');
      newCard.setAttribute('id', 'new-card');
      newCard.innerHTML+= `<div>${Book.info}</div>`;
      shelf.appendChild(newCard);
      i++;   
    } else if (i > 3) {
      console.log('thats all the books, kid.'); // does not log
    };
  }
}
displayBook(myLibrary);

const newBookBtn = document.querySelector('#new-book-btn');
//newBookBtn.addEventListener("click", createNewBook);
const h1 = document.querySelector('h1');
function createNewBook() {
  const inputCard = document.createElement('div');
  inputCard.setAttribute('id', 'inputCard');
  inputCard.classList.add('inputCard');
  inputCard.innerHTML = `
      <div id="input-form">
        <label> Title: 
        <input type="text", id="title_input"/>
        </label><br>
        <label> Author: 
        <input type="text", id="author_input"/>
        </label><br>
        <label> Pages: 
        <input type="text", id="pages_input"/>
        </label><br>
        <p> Have you read this book yet? <br>
        <label for="yes"> Yes 
            <input type="radio" value="yes" id="yes"/>
        </label><br>
        <label for="no"> Nope 
            <input type="radio" value="no" id="no"/>
        </label>
        </p>
        <button type="submit" id="submit-form", onclick="submitBookForm()">Add Book</button>
        <button id="delete-form">Nevermind</button>
      </div>
    `;
  h1.appendChild(inputCard);
}

function getUserInput() {
    const titleInput = document.getElementById('title_input').value;
    console.log(titleInput);
    const authorInput = document.getElementById("author_input").value;
    console.log(authorInput);
    const pagesInput = document.getElementById("pages_input").value;
    console.log(pagesInput);
}

newBookBtn.addEventListener("click", createNewBook);

const submitFormBtn = document.querySelector("#submit-form");
function submitBookForm() {
  getUserInput();
}



//submitFormBtn.addEventListener("click", submitBookForm);
