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

class libraryItem {
    constructor(title, id, isAvailable) {
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }
    checkOut() {

    }
    returnItem() {

    }
}

class book extends libraryItem {
    constructor() {
        super();
        this.author = "Hermione Granger";
        this.genre = "fantasy";
    }
}

class DVD extends libraryItem {
    constructor() {
        super();
        this.director = "Niell Druckmann";
        this.duration = "2:23";
    }
}

class magazine extends libraryItem {
    constructor() {
        super();
        this.issueNumber = 137;
        this.publisher = "Time";
    }
}
