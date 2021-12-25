import { Module } з "@nestjs/common";
import { Lab1BorodiyController } від './lab1-borodiy.controller';
import { Lab1BorodiyService } від './lab1-borodiy.service';

@Модуль({
 контролери: [Лабораторія1БородійController],
 постачальники послуг: [Лаб1БородійСервіс]
})
експорт класу Lab1БородійМодула {}