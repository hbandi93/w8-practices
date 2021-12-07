const person = {
    firstName: "Armandina",
    lastName: "Atom"
};

let p1 = {
    ...person,
};

let p2 = Object.assign({}, person);

let p3 = JSON.parse(JSON.stringify(person));

console.log(p1);
console.log(p2);
console.log(p3);

let copiedPerson = person;
copiedPerson.firstName = "Richárd";

console.log(person);

let num = 1;
let copiedNum = num;

copiedNum = 2;
console.log(num);

let person2 = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};

let copiedPerson2 = Object.assign({}, person2);

copiedPerson2.firstName = "Richárd";

copiedPerson2.address.street = 'példa utca';
console.log(copiedPerson2);

let copiedPerson3 = JSON.parse(JSON.stringify(person));

copiedPerson3.firstName = "Józsi";
copiedPerson3.address.street = "Fő utca";