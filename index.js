// OBJECTS
// Let's create a basic person object that will include nested objects, nested arrays, and functions
let person = {
    firstname: "Jeddy",
    lastname: "Hwang",
    age: 27,
    // Object within object
    favorites: {
        // Arrays within object
        movies: ["Thor", "M", "HP", "LoTR", "Sharknado", "Fantastic Fungi", "Morbius"],
        artists: ["Moonchild", "Nas", "Bruno Mars", "The Wiggles", "Beethoven", "Thelonious Monk"]
    },
    // Functions within object
    greeting: () => {
        console.log("Hello world!");
    }
}

// Now let's practice accessing key/value pairs within our object
// We can use dot or bracket notation
// console.log(person.firstname);
// console.log(person["firstname"]);
// console.log(person[firstname]); 

// How do I access the movie of LoTR in my person object?
// console.log(person.favorites.movies[3]);

// Let's invoke the greeting function
// person.greeting();

// Let's practice some destructuring
// let {lastname} = person;
// console.log(lastname);
// console.log(person.lastname);

// let {greeting} = person;
// greeting();

let {firstname, lastname, age: yearsOfWisdom} = person;
// console.log(firstname, lastname, age);
// firstname = "Nicole";
// console.log(firstname, person.firstname);
// console.log(yearsOfWisdom);

// Review of looping objects using for...in loops
// for(const property in person) {
//     console.log(`The property of ${property} has a value of: ${person[property]}`);
// }

// Talking about adding and deleting properties
person.job = "Instructor";
// console.log(person);

delete person.job;
// console.log(person);

// CLASSES
// Let's make a basic dog class
class Dog {
    constructor(name, breed, age, color) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.color = color;
        this.isCute = true;
    }

    greeting() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My breed is ${this.breed}.`);
    }
}

const finn = new Dog("Finn", "Goldendoodle", 2);
// console.log(finn);
// finn.greeting();

// Now let's tackle class extension using puppies
class Puppy extends Dog {
    constructor(name, breed, age, isTeething) {
        super(name, breed, age);

        this.isTeething = isTeething;
    }
}

const marmy = new Puppy("Marmy", "Bernese", 1, "white", true);
console.log(marmy);
