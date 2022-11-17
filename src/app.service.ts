import { Injectable } from '@nestjs/common';
import { LoginRequest, LoginResponse } from './dto/auth.dto';
import * as moment from 'moment';
@Injectable()
export class AppService {
  getHello() {
    return {msg: 'It\' s works!'};
  }

  login(loginRequest: LoginRequest) {
    if (
      loginRequest.username === 'usuario1' &&
      loginRequest.password === '123456'
    ) {
      const user = {
        id: '000001',
        roles: ['agemes', 'tenantRead'],
        exp: moment().add('2', 'hours').unix(),
      };

      const ret = {
        access_token: {
          sub: user.id,
          roles: user.roles,
          exp: user.exp,
          mipayload: 'Mi payload... ',
        },
        refresh_token: {
          sub: user.id,
          exp: user.exp,
        },
        exp: user.exp,
      };
      return ret;
    } else {
      throw new Error('User not found!');
    }
  }
}
