import { Controller, Get, Post } from '@nestjs/common';
import { AppService, Person } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Person {
    return this.appService.getHello();
  }
}
