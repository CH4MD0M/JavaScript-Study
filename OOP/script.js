'use strict';
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  
  //  생성자 함수 안에 메서드를 만들지 말기! => 매 인스턴스마다 반복하기 때문
  //  prototype을 사용.
  //   this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    //   };
  };

const domm = new Person('Domm', 1996);
console.log(domm);

const matilda = new Person('Matilda', 2019);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

// console.log(domm instanceof Person);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
domm.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(domm.__proto__);
console.log(domm.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(domm)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(jack)); // true

Person.prototype.species = 'Human';
console.log(domm.species); // Human

console.log(domm.hasOwnProperty('firstName')); // true
console.log(domm.hasOwnProperty('species')); // false

console.log(domm.__proto__); // Person.prototype
// Object.prototype ( 프로토타입 체인의 최상위)
console.log(domm.__proto__.__proto__); // Object.prototype
console.log(domm.__proto__.__proto__.__proto__); // null

///////////////////////////////////////
// Coding Challenge #1

1. 생성자 기능을 사용하여 자동차를 구현합니다. 
   자동차는 제작물과 속도 특성을 가지고 있다. 
   속도 특성은 차량의 현재 속도(km/h)입니다. 
2. 자동차의 속도를 10배 증가시키는 '가속' 방법을 구현하고, 
   새로운 속도를 콘솔에 기록합니다. 
3. '브레이크' 방식을 구현하여 차량 속도를 5까지 낮추고, 
   새로운 속도를 콘솔에 기록합니다. 
4. 차량 물체 2개를 만들고 각각에 대해 '가속'과 '브레이크'를 여러 번 호출하는 
   실험을 합니다.
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make}는 현재 ${this.speed}km/h로 달리고 있다.`);
};

Car.prototype.break = function () {
  this.speed -= 10;
  console.log(`${this.make}는 현재 ${this.speed}km/h로 달리고 있다.`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 90);

mercedes.accelerate();
mercedes.break();
mercedes.break();

bmw.accelerate();
bmw.break();
bmw.break();
