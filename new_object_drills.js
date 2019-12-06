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

let occupations = [ 
    
    {
        name: "Linda Belcher",
        jobTitle: "Waitress"
    },

    {
        name: "Bob Belcher",
        jobTitle: "Chef"
    },

    {
        name: "Gene Belcher",
        jobTitle: "Beefsquatch"
    },

    {
        name: "Louise Belcher",
        jobTitle: "Mischief Maker"
    },

    {
        name: "Tina Belcher",
        jobTitle: "Zombie Fiction Writer"
    },
];

console.log(occupations);

//Properties that Aren't There

occupations.forEach(person => {
    console.log(`Name: ${person.name}, Job Title: ${person.jobTitle}`);
}