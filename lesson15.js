/*
    Типы данных
    Number (4, NaN)
    String ("Ололо")
    Boolean (false)
    undefined
    null
    Object {}
           []
          
    Управляющие конструкции
    if (true) {

    } else if (true) {

    } else {

    }
    
    Циклы
    while (true) {

    }

    do {

    } while (true);

    for (;true;) {

    } 

    function(n) {
        return n + n;
    }
*/
let words = ["огурец", "помидор", "тыква"];

function getOtherWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const getWord = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//console.log(words[1]); // получение элемента массива по индексу
console.log(getWord(words));

// Декларированная функция
function a() {
    console.log("Функция А");
}
// Функциональное выражение
const b = function() {
    console.log("Функция B");
}
// Cтрелочная функция
const c = () => {
    console.log("Функция С");
}

/* 
    1, 2, 3, 4, 5, 6, 7
    2 - 2 - 2 
    1 - 4 - 5
*/

const getNumber = max => Math.ceil(Math.random() * max); // 0 < x <= 7

const changeChar = function(char) {
    switch(char) {
        case 1:
            char = "@";
            break;
        case 2:
            char = "$";
            break;
        case 3:
            char = "♥";
            break;
        case 4:
            char = "#";
            break;
        case 5:
            char = "%";
            break;
        case 6:
            char = "&";
            break;
    }
    return char;
}

const game = function(money, bet) { 
    let coint = 0;
    while (money >= 100) {
        let slot1 = getNumber(7), 
            slot2 = getNumber(7), 
            slot3 = getNumber(7);
        money -= bet;
        let info = "";
        if (slot1 === slot2 && slot1 === slot3) {
            coint += 2;
            money += bet * 2;
            info = "Большой куш!";
        } else if (slot1 === slot2 || slot1 === slot3 || slot2 === slot3) {
            coint += 1;
            money += bet * 1.5;
            info = "Вы выиграли";
        } else {
            info = "Ставка не сыграла";
        }
        console.log(`${changeChar(slot1)} - ${changeChar(slot2)} - ${changeChar(slot3)}: ${info}, ваш счёт - ${coint}`);
    }
}

game(300, 100);