// 'use strict';

// const Person = function (fname, birthYear) {
//   this.fname = fname;
//   this.birthYear = birthYear;
// };

// //prototype function age
// Person.prototype.calcAge = function () {
//   //   console.log(2024 - this.birthYear);
// };

// Person.prototype.species = 'Homo Sapiens';

// // console.log(Person.prototype);

// const Matthew = new Person('Matthew', 2011);
// Matthew.calcAge();

// // console.log(Matthew.species);

// // console.log(Matthew.__proto__);

// const arr = [1, 1, 3, 7, 3, 5, 7, 9];
// // console.log(arr.__proto__);
// // console.log(arr.__proto__ === Array.prototype);
// // console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// // console.log(arr.unique());

// const h1 = document.querySelector('h1');

// //
/////////////////////////////////////////////////////////////////////////////////
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const BMW = new Car('BMW', 120);
// const Mercedes = new Car('Mercedes', 95);

// console.log(BMW);
// console.log(Mercedes);

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is accelerating at ${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is slowing at ${this.speed}km/h`);
// };

// BMW.accelerate();
// Mercedes.accelerate();
// BMW.brake();
// Mercedes.brake();

// //class expression
// // const PersonCl = class {

// // }
///////////////////////////////////////////////////////////////////////////
// //class declaration

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Instance Method
//   //Methods will be added to .prototype property
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }

//   get age() {
//     return 2024 - this.birthYear;
//   }

//   //Setting a property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
//   //Static Method
//   static hey() {
//     console.log('Hello!!!');
//   }
// }

// const Walter = new PersonCl('Walter Zz', 1995);
// const Samson = new PersonCl('Matthew Samson', 1996);
// console.log(Samson);
// console.log(Samson.age);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.fullName}`);
// };

// Samson.greet();
// PersonCl.hey();

/////////////////////////////////////////////////////////////////////////
// const account = {
//   owner: 'Matthew',
//   movement: [200, 530, 120, 300],

//   get latest() {
//     return this.movement.slice(-1).pop();
//   },

//   set latest(mov) {
//     return this.movement.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movement);

///////////////////////////////////////////////////////////////////////////
// const PersonProto = {
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const Steven = Object.create(PersonProto);
// console.log(Steven);
// Steven.name = 'Steven';
// Steven.birthYear = 2002;
// Steven.calcAge();

// console.log(Steven.__proto__);

// const Sarah = Object.create(PersonProto);
// Sarah.init('Sarah', 2018);
// Sarah.calcAge();
// console.log(Sarah);

/////////////////////////////////////////////////////////////////////////
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is accelerating at ${this.speed}km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is slowing at ${this.speed}km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const Ford = new Car('Ford', 120);
// Ford.accelerate();
// Ford.brake();

// //get speedUs()
// console.log(Ford.speedUS);

// //set speedUS(speed)
// Ford.speedUS = 50;
// console.log(Ford);

////////////////////////////////////////////////////////////////////////////////
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 1990, 'Computer Science');

// mike.introduce();
// mike.calcAge();

// Student.prototype.constructor = Student;
// console.log(mike instanceof Student);
// console.log(mike instanceof Person);

//////////////////////////////////////////////////////////////////////////
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is accelerating at ${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is slowing at ${this.speed}km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is accelerating at ${this.speed}km/h, with a charge of ${this.charge}`
//   );
// };

// EV.prototype.brake = function () {
//   this.speed -= 10;
//   this.charge--;
//   console.log(
//     `${this.make} is braking at ${this.speed}km/h, with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);

// tesla.brake();
// tesla.accelerate();

///////////////////////////////////////////////////////////////////////////////
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }

//   get age() {
//     return 2024 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hello!!!');
//   }
// }

// const Walter = new PersonCl('Walter Zz', 1995);
// const Samson = new PersonCl('Matthew Samson', 1996);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.fullName}`);
// };

// Samson.greet();
// PersonCl.hey();

// class Student extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //Always need to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(`I'm ${2024 - this.birthYear} years old`);
//   }
// }

// const martha = new Student('Martha Happy', 1990, 'Aeronautics');
// martha.introduce();
// martha.calcAge();

////////////////////////////////////////////////////////////////
const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
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
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
