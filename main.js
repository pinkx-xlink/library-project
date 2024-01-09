const myLibrary = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = String(`"${this.title}" by ${this.author} has ${this.pages} pages.`)
    this.readStatus = function() {
        const input = prompt(`Have you read ${this.title} yet?`)
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
}
book1.format();
myLibrary.push(book1);

book2.format();
myLibrary.push(book2);

const shelf = document.querySelector('#shelf');

function displayBook(Book) {
    for(let i = 0; i < 3;) {
        if (i < 3) {
            const newCard = document.createElement('div');
            newCard.setAttribute('id', 'new-card');
            newCard.innerHTML+= `<div>${myLibrary.splice("")}</div>`;
            shelf.appendChild(newCard);
            i++;
        } else if (i > 3) {
            console.log('thats all the books, kid.'); // does not log
        };
    };
};
displayBook(Book);
