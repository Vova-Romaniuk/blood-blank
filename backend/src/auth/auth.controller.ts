import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './auth.model';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async signIn(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<Auth> {
    try {
      return this.authService.signIn(email, password);
    } catch (error) {
      throw new HttpException('Щось пішло не так', HttpStatus.BAD_REQUEST);
    }
  }
}
