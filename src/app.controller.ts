import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginRequest, LoginResponse } from './dto/auth.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello() {
    return this.appService.getHello();
  }

  @Post('/login')
  login(@Body() loginRequest: LoginRequest) {
    return this.appService.login(loginRequest);
  }
}
