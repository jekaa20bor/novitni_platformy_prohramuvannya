import { Module } from '@nestjs/common';
import { Lab1BorodiyController } from './lab1-borodiy.controller';
import { Lab1BorodiyService } from './lab1-borodiy.service';

@Module({
  controllers: [Lab1BorodiyController],
  providers: [Lab1BorodiyService]
})
export class Lab1BorodiyModule {}
