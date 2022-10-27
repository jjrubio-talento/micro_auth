import { Injectable } from '@nestjs/common';
import { LoginRequest, LoginResponse } from './dto/auth.dto';

@Injectable()
export class AppService {
  getHello() {
    return { msg: 'It\' s works!'};
  }

  login(loginRequest: LoginRequest): LoginResponse {
    if (
      loginRequest.username === 'usuario1' &&
      loginRequest.password === '123456'
    ) {
      return {
        name: 'carlos',
        username: loginRequest.username,
        lastname: 'gonzalez',
      };
    } else {
      throw new Error('User not found!');
    }
  }
}
