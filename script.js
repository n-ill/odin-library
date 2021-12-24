let myLibrary = [];
let counter = 0;

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

    for (let i = counter; i < myLibrary.length; i++) {
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

    counter++;
}

let newBookButton = document.querySelector('.new-book-button');

function toggleForm() {
    let form = document.querySelector('.form-container');
    if (form.style.display === 'none') {
        form.style.display = 'flex';
    } 
    else {
        form.style.display = 'none';
    }
}

function formSubmit() {
    let title = document.querySelector('input[name="title"]').value;
    let author = document.querySelector('input[name="author"]').value;
    let pages = document.querySelector('input[name="pages"]').value;
    let read = document.querySelector('input[name="read"]:checked').value;
    if (read === 'Yes') {
        read = true;
    }
    else {
        read = false;
    }

    addBookToLibrary(new Book(title, author, pages, read));
    displayBooks();

    document.querySelector('.new-book-form').reset();
    toggleForm();
}

newBookButton.addEventListener('click', toggleForm);
