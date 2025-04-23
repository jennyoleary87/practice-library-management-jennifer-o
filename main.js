/*
04/22/25
Classes and Inheritance - 2 Practice: Library Management System

Scenario:
You are tasked with designing a library management system. The library
lends out various types of items such as books, DVDs, and magazines. While
all items share some common properties (e.g., title, id, isAvailable), each
type has unique properties and behaviors. For example:
● Books have an author and a genre.
● DVDs have a director and duration.
● Magazines have an issueNumber and publisher.

===== Tasks =====
1. Step 1: Create a Base Class
○ Define a class LibraryItem to represent shared properties
(title, id, isAvailable) and methods (e.g., checkOut() and returnItem()).
2. Step 2: Extend the Base Class
○ Create child classes Book, DVD, and Magazine that inherit from LibraryItem.
○ Add unique properties and methods for each child class:
■ Book: Add properties like author and genre.
■ DVD: Add properties like director and duration.
■ Magazine: Add properties like issueNumber and publisher.
3. Step 3: Instantiate Objects
○ Create instances of each class and test the shared and unique methods.
4. Step 4: Test the Inheritance
○ Use inherited methods like checkOut() and returnItem() to manage the availability of items.
○ Test accessing and displaying unique properties of each child class.
*/

class LibraryItem {
    constructor(title, id, isAvailable = true) {
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }
    checkOut() {
        if (this.isAvailable) {
            this.isAvailable = false; // was true, now its false because it has been checked out
            console.log(` ${this.title} has now been checked out. `);
        } else {
            console.log(` ${this.title} has already been checked out. Please choose another title. `);
        }
    }
    returnItem() {
        if (!this.isAvailable) {
            this.isAvailable = true; // once returned, it is now available
            console.log(` Thank you for returning ${this.title}. \n ${this.title} is now available to be checked out! `);
        } else {
            console.log(` ${this.title} is already available. Are you sure you are returning ${this.title}?`);
        }
    }
}

class Book extends LibraryItem {
    constructor(title, id, author, genre, isAvailable = true) {
        super(title, id, isAvailable);
        this.author = author;
        this.genre = genre;
    }
}

let harryPotter = new Book("Harry Potter", "Hedwig", "Hermione Granger", "Fantasy");

class DVD extends LibraryItem {
    constructor(title, id, director, duration, isAvailable = true) {
        super(title, id, isAvailable);
        this.director = director;
        this.duration = duration;
    }
}

let theLastOfUs = new DVD("The Last Of Us", "Ellie", "Niel Druckmann", "2:23");

class Magazine extends LibraryItem {
    constructor(title, id, issueNumber, publisher, isAvailable = true) {
        super(title, id, isAvailable);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
}

let magTime = new Magazine("Time", "Tik Tok", 137, "Fulton Sun");

console.log(harryPotter);
console.log(theLastOfUs);
console.log(magTime);

harryPotter.checkOut();
theLastOfUs.checkOut();
theLastOfUs.checkOut();
harryPotter.returnItem();
magTime.returnItem();
