/*
    Object - Объект - набор неупорядоченных пар "ключ-значение"
*/
let obj = {}; // это - пустой объект
let capitals = {
    "Российская Федерация": "Moscow",
    italy: "Rome",
    spain: "Madrid",
    china: "Beijing" // "Пекин"
}

capitals.china = "Пекин";
capitals.america = "Washinghton";

delete capitals.italy;
// console.log(capitals);

let cntr = "spain";

// console.log(capitals["Российская Федерация"]);
// console.log(capitals[cntr]);

let mazda = {
    model: "Mazda MX5",
    color: "coral",
    year: 1999,
    automat: false,
    user: {
        name: "Олег",
        rights: 25879634
    },
    benzin: "dt",
    showInfo: function() {
        return `${this.user.name} обладает ${this.model} ${this.year} года цвета ${this.color} с ${this.automat ? "автоматической" : "механической"} КПП`;
    }
}

/* 
    Вывести в консоль фразу:
    "У Олега есть Mazda MX5 1999 года кораллового цвета с механической коробкой передач";
*/

// let str = `${car.user.name} обладает ${car.model} ${car.year} года цвета ${car.color} с `;
// if (car.automat) {
//     str += "автоматичесой";
// } else {
//     str += "механической";
// }
// str += " КПП";

console.log(mazda.showInfo());
