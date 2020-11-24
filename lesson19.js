// Есть точка

// function Point(x,y) {
//     this.x = x;
//     this.y = y;
// }
// Point.prototype.moveX = function(newX) {
//     this.x = newX;
// }
// Point.prototype.moveY = function(newY) {
//     this.y = newY;
// }
// Point.prototype.toString = function() {
//     return `(${this.x};${this.y})`;
// }

class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    moveX(newX) {
        this.x = newX;
    }
    moveY(newY) {
        this.y = newY;
    }
    toString() {
        return `(${this.x};${this.y})`;
    }
}

class Point3D extends Point {
    constructor(x,y,z) {
        super(x,y); // Обращение к конструктору родителя
        this.z = z;
    }
    moveZ(newZ) {
        this.z = newZ;
    }
    toString() {
        return `(${this.x};${this.y};${this.z})`;
    }
}

let point = new Point(2,4);
point.moveX(5);
point.moveY(10);
// point.moveZ(1);
console.log(point.toString());

let p3d = new Point3D(0,1,2);
p3d.moveX(6);
p3d.moveY(8);
p3d.moveZ(10);
console.log(p3d.toString());

/* 
    1) Создать класс Rectangle - прямоугольник, который принимает две стороны
    У прямоугольника есть методы
    getPerimetr() - отдает периметр прямоугольника
    getArea() - считает площадь прямоугольника
    showInfo() - выводит следующую фразу:
                "Прямоугольник со сторонами 20x40 имеет площадь - 800 и периметр - 120"

    2) Создать класс Square наследованный от прямоугольника

    3) Создать два объекта sq и rec при помощи классов и вывести информацию о них с помощью методов showInfo()
*/

class Rectangle {
    constructor(a,b) {
        this.ver = a;
        this.hor = b;
        this.text = "Прямоугольник";
    }
    getPerimeter() {
        return this.ver * 2 + this.hor * 2;
    }
    getArea() {
        return this.ver * this.hor;
    }
    showInfo() {
        return `${this.text} со сторонами ${this.ver}x${this.hor} имеет площадь - ${this.getArea()} и периметр - ${this.getPerimeter()}`;
    }
} 
class Square extends Rectangle {
    constructor(size) {
        super(size,size);
        this.text = "Квадрат";
    }
}

let rec = new Rectangle(20,40);
console.log(rec.showInfo());
let sq = new Square(20);
console.log(sq.showInfo());













