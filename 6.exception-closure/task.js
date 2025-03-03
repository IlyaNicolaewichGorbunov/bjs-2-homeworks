function parseCount(quantity) {
    if (Number.isNaN(Number.parseFloat(quantity))) {
        throw new Error('Невалидное значение');
    }
    return parseFloat(quantity);
}

function validateCount(quantity) {
    try {
        return parseCount(quantity);
    } catch(error) {
        return error;
    }
}

class Triangle{
    constructor (a,b,c) {
        this.sides = [];
        this.sides.push(a,b,c);
        this.sides.sort(function (a,b) {
            return a-b;
        });
        if (this.sides[2]>(this.sides[0]+this.sides[1])) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        let perimetr = this.sides[0]+this.sides[1]+this.sides[2];
        return perimetr;
        
      }

    get area() {
        let halfP = ((this.sides[0]+this.sides[1]+this.sides[2])*0.5);
        let arr = (Math.sqrt(halfP*(halfP - this.sides[0])*(halfP - this.sides[1])*(halfP - this.sides[2]))).toFixed(3);
        return Number(arr);
    }
}

function getTriangle (a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() { 
                return "Ошибка! Треугольник не существует" 
            },
            get perimeter() { 
                return "Ошибка! Треугольник не существует" 
            }
        }
    }
}