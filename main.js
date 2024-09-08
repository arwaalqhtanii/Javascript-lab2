//Q1

var eatsPlants = true; 
var eatsAnimals = false; 
var animalType = (eatsPlants && eatsAnimals) ? 'omnivore' :
                 (eatsPlants && !eatsAnimals) ? 'herbivore' :
                 (!eatsPlants && eatsAnimals) ? 'carnivore' : undefined;
console.log(` ${eatsPlants} ${eatsAnimals}. result is: ${animalType}`);

//Q2

var musicians = 1; 
var musicianGroups = {
    0: 'not a group',
    1: 'solo',
    2: 'duet',
    3: 'trio',
    4: 'quartet' 
};

var output = (musicians in musicianGroups) ? musicianGroups[musicians] : 'this is a large group';
console.log(output);



//Q3
let room = 'dining room'; 
let suspect = 'Mr. Parkes'; 
let weapon;
let result;

let Details = {
  'dining room': { suspect: 'Mr. Parkes', weapon: 'knife' },
  'gallery': { suspect: 'Ms. Van Cleve', weapon: 'trophy' },
  'ballroom': { suspect: 'Mr. Kalehoff', weapon: 'poison' },
  'billiards room': { suspect: 'Mrs. Sparr', weapon: 'pool stick' }
};
if (Details[room] && Details[room].suspect === suspect) {
  weapon = Details[room].weapon;
  result = `${suspect} did it in the ${room} with the ${weapon}!`;
} else {
  result = `unable to solve the case`;
}
console.log(result);


//Q4


var balance = -325; 
var checkBalance = true; 
var isActive = true; 

if (checkBalance) {
    if (isActive) {
        if (balance > 0) {
            console.log("Your balance is $" + balance + ".");
        } else if (balance === 0) {
            console.log("Your balance is $0.00.");
        } else {
            console.log("Your balance is false. To solve this proplem contact us.");
        }
    } else {
        console.log("Your account is not active . please contact us.");
    }
}




//Q5

var flavor = "vanilla"; 
var vessel = "cone";
var toppings = "sprinkles";

if ((flavor === "vanilla" || flavor === "chocolate") &&(vessel === "cone" || vessel === "bowl") &&(toppings === "sprinkles" || toppings === "peanuts")) {
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`);
}

