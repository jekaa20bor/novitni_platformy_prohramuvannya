import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): number {
    let a, b, number : number;
    a = 17;
    b = 12;
    number = 5;
    return this.compare(a, b, number);
  }

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
  }
}
