import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Person {
    const person = new Person("Serhii", 21, 70);
    return person;
  }
}

<<<<<<< HEAD
  public compare(a : number, b : number, number : number) : number {
    if (number % 2 == 0) {
      if (a > b) {
        return a;
      } else if (a < b) {
        return b;
      } else return a;
    } else if (number % 2 != 0) {
      return a + b;
    }
=======
export class Person {
  name : string;
  age : number;
  weight: number;

  constructor(name : string, age : number, weight : number) {
    this.name = name;
    this.age = age;
    this.weight = weight;
>>>>>>> 134dc746ed3a0b1cd357acbcda2e4117a7b68810
  }
}
