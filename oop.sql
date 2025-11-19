              ┌─────────────┐
              │   Object    │
              └─────┬──────┘
                    │
                    ▼
              ┌─────────────┐
              │   Class     │
              │(Blueprint)  │
              └─────┬──────┘
       Inherits     │
                    ▼
             ┌─────────────┐
             │  Child Class│
             │ (Inheritance)│
             └─────┬──────┘
    Encapsulation  │ Polymorphism
   ┌─────────┐     ▼
   │ Private │   ┌─────────────┐
   │ Fields  │   │  Methods    │
   └─────────┘   │(Overriding) │
                 └─────────────┘
                    ▲
                    │
               Abstraction
            (hide complex logic)

Prototype-based inheritance is behind the scenes in JS, connecting all objects.

┌───────────────────────┐
│       OBJECT           │
│-----------------------│
│ Properties & Methods  │
│ Example:              │
│ const obj = {         │
│   name: "Nikhil",     │
│   greet() {           │
│     console.log(...); │
│   }                   │
│ };                     │
└─────────┬─────────────┘
          │
          ▼
┌───────────────────────┐
│        CLASS           │
│-----------------------│
│ Blueprint to create    │
│ objects                │
│ Example:               │
│ class Person {         │
│   constructor(name) { │
│     this.name = name;  │
│   }                    │
│   greet() {            │
│     console.log(...); │
│   }                    │
│ }                      │
└─────────┬─────────────┘
          │
          ▼
┌───────────────────────┐
│    CHILD CLASS         │
│-----------------------│
│ Inherits from Parent   │
│ Example:               │
│ class Employee extends │
│ Person {               │
│   constructor(...) {...│
│   work() {...}         │
│ }                      │
└─────┬───────┬─────────┘
      │       │
      │       │
      │       ▼
      │   POLYMORPHISM
      │   (method overriding)
      │ Example:
      │ Dog extends Animal {
      │   speak() {...}
      │ }
      │
      ▼
ENCAPSULATION
(private fields / getter-setter)
Example:
class BankAccount {
  #balance = 0;
  deposit(amount) { this.#balance += amount; }
  getBalance() { return this.#balance; }
}

ABSTRACTION
(hide complexity)
Example:
class Vehicle {
  start() { this.engineStart(); }
  engineStart() { throw Error("must implement"); }
}

PROTOTYPES
(JS underlying inheritance)
Example:
function Person(name) { this.name = name; }
Person.prototype.greet = function() { console.log(this.name); }

