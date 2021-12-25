import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getNumbers(): number {
    let a: number = 10
    let b: number = 1.5
    let c: number = a + b
    return c
  }

  getString(): string {
    let str: string = 'string'
    return str
  }

  getArrays(): number[] {
    let lst: number[] = [1, 2, 3]
    return lst
  }

  getEnums(): any {
    const enum e {
      A = 0, 
      B = 1, 
      C = 2, 
      D = 3
    }
    var a = e.A + e.B + e.C + e.D
    return a
  }

  getMultitypeArrays(): (string | number)[] {
    let lst: (string | number)[] = ['str', 1]
    return lst
  }

  getMultitypeValues(): (number | string) {
    let a: (number | string) = 15
    let b: (number | string) = 'str'
    let c: (number | string) = a + b
    return c
  }
}
