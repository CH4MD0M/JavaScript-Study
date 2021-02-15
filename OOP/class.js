'use strict';
/*// class 표현식
// const PersonCl = class{}

// class 선언문
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance 메서드
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  // getter
  get age() {
    return 2037 - this.birthYear;
  }

  // setter
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static 메서드
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

// 인스턴스
const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Class는 호이스트 되지 않는다.
// 2. Class는 일급 객체이다.
// 3. Class는 strict mode(엄격한 모드)에서 실행된다.

PersonCl.hey();

// getter
// getter는 클래스 필드에 접근할 때마다 클래스 필드의 값을 조작하는 행위가 필요할 때 사용한다.
// getter는 반드시 무언가를 반환해야 한다.

// setter
// setter는 클래스 필드에 값을 할당할 때마다 크래스 필드의 값을 조작하는 행위가 필요할 때 사용한다.

const account = {
  owner: 'domm',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// getter
console.log(account.latest);
// setter
account.latest = 50;
console.log(account.latest);

// ////////////////////////////////////////////
// Static Method
// ✔︎ 정적메소드는 클래스의 인스턴스가 아닌 클래스 이름으로 호출한다.
//    → 클래스의 인스턴스로 호출할 수 없다.
//    → 클래스의 인스턴스를 생성하지 않아도 호출할 수 있다.

// ✔︎ 일반 메소드 내부에서 this는 클래스의 인스턴스를 가리킨다.

// ✔︎ 정적 메소드는 this를 사용할 수 없다.
//    → this를 사용할 필요가 없는 메소드를 정적 메소드로 만들 수 있다.
//    → 정적 메소드는 애플리케이션 전역에서 사용할 유틸리티(utility)함수를 생성할 때 사용한다.

// ////////////////////////////////////////////
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

*/

// Coding Challenge #2
class Carcl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make}는 현재 ${this.speed}km/h로 달리고 있다.`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make}는 현재 ${this.speed}km/h로 달리고 있다.`);
  }

  get speedUS() {
    return `${this.make}는 현재 ${this.speed / 1.6}mi/h로 달리고 있다.`;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Carcl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();

ford.speedUS = 50;
console.log(ford);
