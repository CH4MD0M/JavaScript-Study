/*
// ////////////////////////////////////////////////////////////////
// Class Inheritance : 프로토타입 체인
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking Prototype(프로토타입 연결)
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

// ////////////////////////////////////////////////////////////////
// Coding  Challenge #3
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make}는 현재 ${this.speed}km/h로 달리고 있다.`);
};

Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`${this.make}는 현재 ${this.speed}km/h로 달리고 있다.`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make}는 현재 ${this.speed}km/h로 달리고 있고, 배터리는 ${this.charge}이다.`
    );
  };
  
  const tesla = new EV('Tesla', 120, 23);
  tesla.chargeBattery(90);
  console.log(tesla);
  tesla.brake();
  tesla.accelerate();

// ////////////////////////////////////////////////////////////////
// Class Inheritance : ES6 class
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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // 메서드 오버라이딩
  // 부모 클래스보다 프로토타입 채인 상에서 더 가까우므로 오버라이딩 된다.
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student Ifeel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();


// ////////////////////////////////////////////////////////////////
// Class Inheritance : Object.create()
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(StudentProto);
jay.init('jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();


// ////////////////////////////////////////////////////////////////
// 1)Public fields
// 2)Private fields
// 3)Public methods
// 4)Private methods

class Account {
  // Public fields (인스턴스)
  lacale = navigator.language;

  // Private fields
  #movements = [];
  #pin;
  // --> pin은 생성자(constructor)에 대한 입력 값을 기반으로 하기 때문에
  // --> field는 constructor 안에 선언할 수 없다.

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // **protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${(this, owner)}`);
  }

  //    Public methods
  getMovements() {
    return this.#movements;
  }
  // 입금
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  // 출금
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
  static helper() {
    console.log('Helper');
  }

  // Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Dom', 'EUR', 1111);
console.log(acc1);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements); // Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class
// console.log(acc1.#pin); // Uncaught SyntaxError: Private field '#pin' must be declared in an enclosing class
// --> '#' 태그를 사용하여 private fields로 선언하면 프로퍼티가 보호(캡슐화)된다

// ////////////////////////////////////////////////////////////////
// Chaning
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/

// ////////////////////////////////////////////////////////////////
// Coding Challenge #4

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
    return this;
  }

  get speedUS() {
    return `${this.make}는 현재 ${this.speed / 1.6}mi/h로 달리고 있다.`;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends Carcl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make}는 현재 ${this.speed}km/h로 달리고 있고, 배터리는 ${
        this.#charge
      }이다.`
    );

    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
