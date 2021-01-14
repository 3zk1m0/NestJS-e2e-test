import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: UsersService) {}

  @Get()
  getHello() {
    return this.appService.findAll();
  }

  @Post()
  createUser(@Body() body) {
    return this.appService.createUser(body)
  }
}
