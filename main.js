function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = function() {
        const input = prompt(`Have you read ${this.title} yet?`)
        console.log(`"Have you read ${this.title} yet?" ${input}.`);
    }
}

const book1 = new Book('The Well of Loneliness', 'Radclyffe Hall', 399);
book1.readStatus();