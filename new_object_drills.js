//Object Initializers and Methods 

const loaf = {
    flour: 300,
    water: 210,
    hydration: function() {
        return (this.water/this.flour) * 100;
    },
}

console.log(loaf)
console.log(loaf.hydration())

//Iterating Over Object Properties

const myObj = {
    foo: "pikachu",
    bar: "ponyta",
    fum: "psyduck",
    quux: "bulbasaur",
    spam: "snorlax",
}; 

for (const prop in myObj) { 
        console.log(`${prop}: ${myObj[prop]}`);
    }

//Arrays In Objects

const food = {
    meals: ["breakfast", "second breakfast", "elveness", "lunch", "afternoon tea", "dinner", "supper"],
};

console.log(food.meals[3]);

//Arrays Of Objects

let occupations = {
    occu1: {
        name: "Linda Belcher",
        jobTitle: "Waitress"
    },

    occu2: {
        name: "Bob Belcher",
        jobTitle: "Chef"
    },

    occu3: {
        name: "Bob Belcher",
        jobTitle: "Chef"
    },

    occu4: {
        name: "Louise Belcher",
        jobTitle: "Mischief Maker"
    },

    occu5: {
        name: "Tina Belcher",
        jobTitle: "Zombie Fiction Writer"
    },
};

let allJobs = [];

for(let prop in occupations) {
    allJobs.push(occupations[prop]);
}