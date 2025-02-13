class PrintEditionItem {
  
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.type = null;
    this._state = 100;
  }  

  fix() {
    let newState = this.state * 1.5;
    this.state = newState;
  }   

  set state(newState) {
    if(newState < 0) {
        this._state = 0;
    } else if(newState > 100) {
        this._state = 100;
    } else {
        this._state = newState;
    }
  }   

    
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';

    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';

    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';

    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        let inBooks = null;
        for(let book of this.books) {
            if(book[type] === value) {
                inBooks = book;
            } 
        }
        return(inBooks);
    }

    giveBookByName(bookName) {
        let i = 0;
        let needBook = null;
        for(let book of this.books){
            if(book['name'] === bookName) {
                needBook = book;
                break;
            }
            i=i+1;
        }
        
        if(i <= (this.books.length-1) && (this.books.length-1) != -1) {
            this.books.splice(i, 1);         
        } 
        return(needBook);
    }
}