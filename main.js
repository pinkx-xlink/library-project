function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = String(`"${this.title}" by ${this.author} has ${this.pages} pages.`)
    this.readStatus = function() {
        const input = prompt(`Have you read ${this.title} yet?`)
        console.log(`"Have you read ${this.title} yet?" ${input}.`);
    };
    // this.displayInfo = function() {
    //     console.log(`"${this.title}" by ${this.author} has ${this.pages} pages.`)
    // };
}

const book1 = new Book('The Well of Loneliness', 'Radclyffe Hall', 399);
book1.readStatus();
//book1.displayInfo();
console.log(book1.info);