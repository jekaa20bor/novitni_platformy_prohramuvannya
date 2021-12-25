import { Test, TestingModule } from '@nestjs/testing';
import { Lab1BorodiyController } from './lab1-borodiy.controller';

describe('Lab1BorodiyController', () => {
  let controller: Lab1BorodiyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Lab1BorodiyController],
    }).compile();

    controller = module.get<Lab1BorodiyController>(Lab1BorodiyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
