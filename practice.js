const array1 = []; // empty array

const arraynotempty = ['this', 'that', 'theother', 'thisone', 'thatone']; //not empty array

console.log(arraynotempty.length); //length of array

console.log(arraynotempty[0], arraynotempty[2], arraynotempty[4]); // print index of the array, 1st middle and last index.

const mixedDataTypes = ['string', 7, 5, 'aNumber5', 1, 4]; // new arr
console.log(mixedDataTypes.length); // print the length of the arr

const itCompanies = ['Facebook', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']; //new array of IT companies
console.log(itCompanies); //print array
console.log('length of array: ',itCompanies.length); // print length of arrat

console.log(itCompanies, 'are big IT companies') //this didnt work, it did but it didnt look good was still in array format
let newstr = ''; // init empty string for the logic of making it a sentence 

for (let x of itCompanies) {
    console.log(x)
    newstr = newstr + ` ${x},`
} // logic for adding all of the items into one string so it removes the array 

const combinedstr = `${newstr} are big IT companies` // form the sentence, however it didnt look good as 1st elemnt shouldnt have a spoace and last should have a comma so it didnt look correct

console.log(combinedstr) //print this broken version

let newstr2 = ''; // init empty string for the second try

console.log('-----------------------------------------') // printing for seperation

for (let i = 0; i < itCompanies.length; i++) {
    let x = itCompanies[i];
    if (i === 0) {
        newstr2 = `${x}`;
    } else if (i == itCompanies.length) {
        newstr2 = `${newstr2} ${x}`; 
    } else {
        newstr2 = `${newstr2}, ${x}`;
    }
} // new logic to make them look good and like a normal sentence

console.log(newstr2); // print the nice list 

console.log(newstr2, 'are all big IT companies.')

console.log(newstr2.toUpperCase()) // make them all upper case

// CHECK IF A STRING IS IN A LIST

var check = 'hbrfgesdujf' // replace with what you want to search for

for (let i = 0; i < itCompanies.length; i++) {
    let x = itCompanies[i];
    if (check != x) {
        console.log('not this one')
    } else {
        console.log('this one ')
        console.log('index: ', i)
    }
}

// COUNT THE AMNOUTN OF letters's IN A STRING (EG IF YOURE LOOKING FOR O YOUR TARGET_STRING WILL BE O)

var seenTargets = []; // init a list to store seen Os
var target_string  = 'o' // can be anything as long as its a letter 

for (let i = 0; i < itCompanies.length; i++) {
    let x = itCompanies[i]; // get the word

    seenTargets = [];

    for (let j = 0; j < x.length; j++) {
        let y = x[j]; //get the letters of the current word
        if (y === 'o') { // if the letter within the word is an O
            seenTargets.push(y); // append y to the seenOs dioct 
        }
    }

    if (seenTargets.length > 1) { // check if there is more than one O 
        console.log(`Index ${i} has more than one 'O': ${x}`); // if yues then it will print the word and the index of the word with more than one O
    }
}

var sorted_companies = itCompanies.sort()
console.log(sorted_companies)

console.log(sorted_companies.slice(3,6)) // slice last three
console.log(sorted_companies.slice(0,3)) //slice first three
console.log(sorted_companies.slice(2,4)) // slice middle

// CONDITIONALS

let num = 1001;
big_number(num)
eliffunc(num)
pos_or_neg(num)
function big_number(num) { // function to determine if the num is bigger or less than 10
    if (num > 10) {
        console.log('Number greater than 10')
    } else {
        console.log('Number smaller than 10.')
    }
}

function pos_or_neg(num) { // funcition to determien if nuymber is positive or negative
    if (num > 0) {
        console.log('This number is positive')
    } else {
        console.log('This number is negative')
    }
}

function eliffunc(num) { //function that evalutes number uses else if statment
    if (num > 100) {
        console.log('THis numbner is bigger than 100')
    } else if (num == 0) {
        console.log('This number is zero')
    } else {
        console.log('This number is less than 100')
    }
}

// WEEKEND OR WEEKDAY

let the_day = 'saturday';

switch (the_day) {
    case 'saturday':
    case 'sunday':
        console.log('It\'s the weekend');
        break;
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log('It\'s a weekday');
        break;
    default:
        console.log('Invalid day');
}

// CALCULATE IF YOU CAN DRIVE

let age = 15;

if (age >= 18) {
    console.log('You are old enough to drive :)')
} else {
    console.log(`You are not old enough to drive however you have ${18-age} years left untill you can drive!`)
}

// COMPARE AGES 

const myAge = 55
const yourAge = 27

if (myAge > yourAge) {
    const difference_age = myAge - yourAge
    console.log(difference_age)
} else {
    const difference_age = yourAge - myAge
    console.log(difference_age)
}

// GRADES

// A
const upperA = 100;
const lowerA = 80;

//B
const upperB = 79;
const lowerB = 70;

//C
const upperC = 69;
const lowerC = 60;

//D
const upperD = 59;
const lowerD = 50;

// F
const upperF = 49;
const lowerF = 0;

grade = 48;

if (grade >= lowerA && grade <= upperA) {
    console.log('You got an A')
} else if (grade >= lowerB && grade <= upperB) {
    console.log('You got a B')
} else if (grade >= lowerC && grade <= upperC) {
    console.log('You got a C')
} else if (grade >= lowerD && grade <= upperD) {
    console.log('You got a D')
} else if (grade >= lowerF && grade <= upperF) {
    console.log('You got a F')
}

for (let i = 0; i < 6; i++) {
    console.log(i)
}

const person1 = {
    firstName: 'Jeff',
    lastName: 'Fejji',
    age: 300,
    country: 'England',
    skills: [
        'HTML',
        'CSS',
        'REACT'
    ],
    getFullName: function() {
        return `${this.firstName}` `${this.lastName}`
    },
}

console.log(person1)
console.log(person1.getFullName)