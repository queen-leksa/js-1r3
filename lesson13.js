/*
    Array - массив
    Массив - упорядоченная последовательность чего-угодно
    [] - пустой массив
    ["Печенька", 2, "Тралала", 0, 1, true, undefined, 23];

    arr.length => длина массива (количество элементов массива)
    arr[0] => Обращение к первому элементу массива
    arr[arr.length - 1] => Обращение к последнему индексу массива
*/

let ivan = ["Печенька", 2, "Тралала", 0, 1, true, undefined, 23];
let ivanObj = {
    word: "Печенька",
    num: 2
}
let ivanArr = {
    0: "Печенька",
    1: 2,
    2: "Тралала"
}

console.log(ivan.length);
console.log(ivan[3]);
ivan[13] = "Igor";
console.log(ivan.length);
console.log(ivan[10]);

let numbers = [];
/* Наполнить массив 100 рандомными числами (1-100) и посчитать их сумму */
function getNumber(max = 11, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

let i = 0;
while (i < 100) {
    // numbers[i] = getNumber(101,1);
    numbers.push(getNumber(101,1));
    i++;
}
console.log(numbers);
let arrSum = 0;
for (let i = 0, cnt = numbers.length; i < cnt; i++) {
    arrSum += numbers[i];
}
console.log(arrSum);

let fruits = [
    "банан",
    "манго",
    "киви",
    "яблоко",
    "ананас",
    "мандарин",
    "гоава"
];

/*
    Методы массив
    .push(el) - добавить элемент в конец массива
    .unshift(el) - добавить элемент в начало массива
    .pop() - забрать последний элемент массива
    .shift() - забрать первый элемент массива
*/
fruits.push("груша");
fruits.push("персик");
console.log(fruits);
fruits.unshift("абрикос");
let last = fruits.pop();
console.log(fruits, last);

/*
    Создать функцию, которая возвращает массив из простых чисел от 1 до n - рандомное число
*/

function simple(n) {
    // ...
    return [];
}


