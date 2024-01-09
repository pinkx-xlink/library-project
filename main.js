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
console.log(book1.info);

Book.prototype.format = function addBookToLibrary() {
    console.log(this);
    return this.info;
    //get user input
    //store this as a new Book obj into the array
}
book1.format();