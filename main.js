function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = function() {
        const input = prompt(`Have you read ${this.title} yet?`)
        console.log(input);
    }
}