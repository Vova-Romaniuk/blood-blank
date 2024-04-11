import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from './auth.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('auth')
    private readonly authModel: Model<Auth>,
  ) {}

  async signIn(email: string, password: string): Promise<Auth> {
    try {
      // Знайти користувача з введеними електронною поштою та паролем
      const user = await this.authModel.findOne({ email, password }).exec();
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}
