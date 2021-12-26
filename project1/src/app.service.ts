import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Person {
    const person = new Person("OKSANA", 21, 70);
    return person;
  }
}


export class Person {
  name : string;
  age : number;
  weight: number;

  constructor(name : string, age : number, weight : number) {
    this.name = name;
    this.age = age;
    this.weight = weight;

  }
}
