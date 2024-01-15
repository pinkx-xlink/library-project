const myLibrary = [];
const shelf = document.querySelector('#shelf');

const newBookBtn = document.querySelector('#new-book-btn');

const h1 = document.querySelector('h1');
function createNewBook () {
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
        <p id="read-status"> Have you read this book yet? <br>
          <label for="yes"> Yes 
              <input type="radio" id="yes" name="radio" value="yes" id="yes"/>
          </label><br>
          <label for="no"> Nope 
              <input type="radio" id="no" name="radio" value="no" id="no"/>
          </label>
        </p>
        <button type="submit" id="submit-form", onclick="submitBookForm()", onclick="setUserInput()">Add Book</button>
        <button id="delete-form">Nevermind</button>
      </div>
    `;
  h1.appendChild(inputCard);
}
function getUserInput () {
  const titleInput = document.getElementById('title_input').value;
  console.log(titleInput);
  const authorInput = document.getElementById("author_input").value;
  console.log(authorInput);
  const pagesInput = document.getElementById("pages_input").value;
  console.log(pagesInput);
  let readStatus;
  function getReadStatus() {
    if (document.getElementById('yes').checked == true ) {
      readStatus = 'Already read'
      console.log('Already read');
    } else {
      readStatus = 'Not read yet'
      console.log('Not read yet');
    }
    return readStatus;
  }
  getReadStatus();

  const infoFromInput = String(`"${titleInput}" by ${authorInput} has ${pagesInput} pages. ${readStatus}`);
  console.log(infoFromInput);
  myLibrary.push(infoFromInput);
  console.log(myLibrary);
  const addArrayItems = () => {
    const book = document.createElement('div');
    book.classList.add('div');
    shelf.appendChild(book);
    
    book.innerHTML +=
    `<div id="new-card">
      <p>${titleInput}</p><br>
      <p>${authorInput}</p><br>
      <p>${pagesInput}</p><br>
      <p>${readStatus}</p>
     
    </div>`
    const deleteBookBtn = document.createElement('button');
    deleteBookBtn.classList.add('button');
    book.appendChild(deleteBookBtn);
    deleteBookBtn.setAttribute('id', 'delete-book-btn');
    deleteBookBtn.innerHTML = `X`;
    deleteBookBtn.addEventListener("click", deleteBook);
    function deleteBook() {
      let removeBook = shelf.removeChild(book);
    };
    
  };
  addArrayItems();
  return this.infoFromInput;
}

newBookBtn.addEventListener("click", createNewBook);
function submitBookForm() {
  getUserInput();
}
