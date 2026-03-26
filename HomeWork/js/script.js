// Створити телефонну книгу
//    - створити початковий клас Abonent, де зберігатимуться ім*я і номер
//    - створити set який прийматиме телефон і номер
//    - створити get який виводитиме данні про абонента
//    - створити три різних юзери
//    - вивести данні

class Abonent {
    set setName(name) {
        this._name = name; 
    }

    set setPhoneNumber(phoneNumber) {
        this._phoneNumber = phoneNumber; 
    }

    get getAbonentInfo() {
        console.log(`Ім'я абонента: ${this._name}. Номер абонента ${this._phoneNumber}.`);
    }
}


const user1 = new Abonent();

user1.setName = "Vitcor";
user1.setPhoneNumber = "+380684153287";

const user2 = new Abonent();

user2.setName = "Andriy";
user2.setPhoneNumber = "+380978183218";

const user3 = new Abonent();

user3.setName = "Mykola";
user3.setPhoneNumber = "+380987823815";

console.group("Дані user 1: ");
user1.getAbonentInfo;
console.groupEnd();

console.group("Дані user 2: ");
user2.getAbonentInfo;
console.groupEnd();

console.group("Дані user 3: ");
user3.getAbonentInfo;
console.groupEnd();