import { Test, TestingModule } з "@nestjs/тестування";
import { Lab1BorodiyService } від './lab1-borodiy.service';

describe("Lab1БородійСервіс", () => {
 нехай сервіс: Лаб1БородійСервіс;

 beforeEach(асинхронний () => {
 const module: TestingModule = await Test. createTestingModule({
 постачальники послуг: [Лаб1БородійСервіс],
 }). компіляція();

 service = module. отримати<Lab1БородійСервісний>(Лаб1БородійСервіс);
  });

 це('слід визначити', () => {
 очікувати(послуга).  toBeDefined();
  });
});