// let myFirstName; let mySecondName; let myFamilyName;
let myFirstName, mySecondName, myFamilyName;

/*
    Тип данных String (строка) - последовательность символов
    "АБВ"
    'тралала'
    ololo 2 - не строка
    "1234567890"
    '' - пустая строка
    ' ' - не пустая строка
    `Это очень крутая строка!`
*/

let number = 2 / 6;
// console.log(number);
// console.log(number.toFixed(1));

myFirstName =  "Александра";
mySecondName = "Дмитриевна";
myFamilyName = "Сурначева";

/*
    + Оператор конкатенации (склеивание строк)
*/
// console.log(myFamilyName + " " + myFirstName + " " + mySecondName);
let fullName = myFirstName + " " + mySecondName;
// console.log(myFamilyName + " " + fullName);
// console.log(fullName + " " + myFamilyName);

/* 
Создать переменую с именем
Создать переменную с фразой

Вывести следующую конструкцию:
"Петя сказал: "Я свободен!"";
*/

let name = "Оля", phrase = "Какой чудесный тёплый вторник!";

// let str = name + " сказал(а): "" + phrase + """;
// let str = name + ' сказал(а): "' + phrase + '"';
// let str = name + " сказал(а): \"" + phrase + "\"";
// console.log(str);

/* 
    Экранированные символы в строке
    '\'' => "'"
    '\'' => "'"
    '\\' => "\"
    '\n' => Enter
    '\r' => Признак окончания строки
    '\t' => Tab
*/
let str = name + " сказал(а): \n\t\"" + phrase + "\"";
// console.log(str);


console.log("2" + 4);
console.log(2 + "4");

// Строка + число всегда = Строка!!!
console.log(+"2" + 4);
// console.log("6" / 3);
console.log("6g" / 3);