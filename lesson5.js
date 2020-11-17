// Типы данных: Number, Boolean, String

let a; // undefined
// console.log(a + c);

// null
let age = 10;

let access = age >= 12 ? "yes" : "no";
console.log(access);

/* Условные выражения (условия) */

let $ = 50;

// if ($ < 100) console.log("Выживем!");
// if ($) console.log("Выживем!");
if ($ > 50) {
    $ -= 50; 
    console.log($);
} else {
    console.log(`Бедный доллар - стоит ${$}`);
}
console.log();
console.log();

let cash = 500;
if (cash >= 20000000) {
    console.log("Ура! Я буду без денег, но с Lamborghini");
} else if (cash >= 25000) {
    console.log("Я стану бременским музыкантом!");
} else {
    console.log("Мечт нет, копим дальше!");
}


// Написать правильно фразу "На ветке сидело n ворон"