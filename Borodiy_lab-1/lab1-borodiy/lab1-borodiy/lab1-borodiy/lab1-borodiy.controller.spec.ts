import { Test, TestingModule } з "@nestjs/тестування";
import { Lab1BorodiyController } від './lab1-borodiy.controller';

describe('Lab1BorodiyController', () => {
 нехай контролер: Lab1БородійController;

 beforeEach(асинхронний () => {
 const module: TestingModule = await Test. createTestingModule({
 контролери: [Лабораторія1БородійController],
 }). компіляція();

 контролер = модуль. отримати<Lab1БородійКонтролер>(Lab1BorodiyController);
  });

 це('слід визначити', () => {
 очікувати(контролер).  toBeDefined();
  });
});