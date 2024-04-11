import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsultationsModule } from './consultations/consultations.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrarionDonationModule } from './registration-donation/registration-donation.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://romanyuk1504:5Euu4asuwzqQEKym@cluster0.vruvp5m.mongodb.net/',
    ),
    ConsultationsModule,
    RegistrarionDonationModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
