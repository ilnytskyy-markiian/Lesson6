// const sum = 20000;
// const month = 12;
// const p = 1000;

// const credit = (sum, date, p) => {
//     return sum + p * date;
// };

// console.log(credit(sum, month, p));

////////////////////////////////////////////////////////////////

// const credit = {
//     sum: 20000,
//     month: 12,
//     p: 1000,
//     result() {
//         return this.sum + this.p * this.month;
//     }
// };

// console.log(credit.result());

////////////////////////////////////////////////////////////////

// class Banc {
//     static type = "PrivatBank";

//     constructor(options) {
//         this.sum = options.sum;
//         this.month = options.month;
//         this.p = options.p;
//     }

//     credit() {
//         return console.log("I am Privat");
//     }
// }

// // const userBank = new Banc({
// //     sum: 30000,
// //     month: 5,
// //     p: 500,
// // });

// // userBank.credit();
// // console.log(Banc.type);

// class newBank extends Banc {
//     constructor(options) {
//         super(options);
//         this.card = options.card;
//     }
//     credit() {
//         super.credit();
//         console.log("I am Aval");
//     }
// }

// const newBankObj = new newBank({
//     sum: 30000,
//     month: 5,
//     p: 500,
//     card: true,
// });

// console.log(newBankObj);
// newBankObj.credit();

////////////////////////////////////////////////////////////////

// class User {
//     constructor(props) {
//         this.name = props.name;
//     }

//     firstName = "";
//     lastName = "";
//     age = NaN;
//     city = "";

//     set name(newName) {
//         const nameRow = newName.split(" ");
//         this.firstName = nameRow[0];
//         this.lastName = nameRow[1];
//     }

//     get name() {
//         return `First name: ${this.firstName}. Last name: ${this.lastName}.`
//     }
// }

// const Kris = new User({
//     name: "Kristina Malitowska",
// });

// const Dasha = new User({
//     name: "Dasha Happy",
// });

// console.log(Kris);
// console.log(Dasha);

////////////////////////////////////////////////////////////////

// const a = [1, 2, 3];

// console.log(a);

////////////////////////////////////////////////////////////////

// const a = {
//     x: 1,
//     y: 2,
// };

// const b = Object.create(a);

// console.log(b.y);

////////////////////////////////////////////////////////////////

// const Manager = function(name, sales) {
//     this.name = name;
//     this.sales = sales;
// };

// const ann = new Manager("Anna", 5);
// const ivan = new Manager("Ivan", 10);

// Manager.prototype.sale = function() {
//     this.sales += 1;
// }

// // console.log(ann);
// // ann.sale();
// // console.log(ann);

// console.dir(Manager);

////////////////////////////////////////////////////////////////

// class CoffeMachine {
//     _water = 0;

//     #waterLimit = 500;

//     constructor(power) {
//         this.power = power;
//     }

//     set waterAmount(value) {
//         if(value < 0) {
//             value = 0;
//         }

//         this._water = value;
//     }
// }

// let coffeMachine = new CoffeMachine(100);

// coffeMachine.waterAmount = -20;

// console.log(coffeMachine);

////////////////////////////////////////////////////////////////