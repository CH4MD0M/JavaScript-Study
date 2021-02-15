'console.log(`Hey ${this.firstName}`);use strict';
// class 표현식
// const PersonCl = class{}

// class 선언문
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // 메서드
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
