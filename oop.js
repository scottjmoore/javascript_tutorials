console.log(`JavaScript OOP`);

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        const {title, author, year} = this;

        return `${title} was written by ${author} in ${year}`;
    }
}

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }

    getSummary() {
        const {month} = this;

        return `${super.getSummary()} in the month of ${month}`;
    }
}

const book = new Book('The Great North Road', 'Peter F. Hamilton', '2011');
const magazine = new Magazine('PC Format', 'SJW Publications', 1999, 'January');

console.log(book.getSummary());
console.log(magazine.getSummary());
