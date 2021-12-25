import { Test, TestingModule } from '@nestjs/testing';
import { Lab1BorodiyService } from './lab1-borodiy.service';

describe('Lab1BorodiyService', () => {
  let service: Lab1BorodiyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Lab1BorodiyService],
    }).compile();

    service = module.get<Lab1BorodiyService>(Lab1BorodiyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
