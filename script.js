let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(aBook) {
    myLibrary.push(aBook);
}

function displayBooks () {
    let container = document.querySelector('.grid-container');

    for (let i = 0; i < myLibrary.length; i++) {
        currentBook = myLibrary[i];

        let aBook = document.createElement('div');
        aBook.className = 'book';

        let aTitle = document.createElement('div');
        aTitle.className = 'title';
        aTitle.textContent = currentBook.title;

        let aAuthor = document.createElement('div');
        aAuthor.className = 'author';
        aAuthor.textContent = 'by ' + currentBook.author;

        let aPages = document.createElement('div');
        aPages.className = 'pages';
        aPages.textContent = currentBook.pages + ' pages';

        let aRead = document.createElement('div');
        if (currentBook.read) {
            aRead.className = 'read';
            aRead.textContent = 'READ';
        }
        else {
            aRead.className = 'not-read';
            aRead.textContent = 'NOT READ';
        }

        aBook.appendChild(aTitle);
        aBook.appendChild(aAuthor);
        aBook.appendChild(aPages);
        aBook.appendChild(aRead);

        container.appendChild(aBook);
    }
}

addBookToLibrary(new Book('Romeo and Juliet', 'William Shakespeare', 336, false));

displayBooks();
