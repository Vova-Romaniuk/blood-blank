import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistrationDonationController } from './registration-donation.controller';
import { RegistrationDonationService } from './registration-donation.service';
import { RegistrarionDonationSchema } from './registration-donation.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'registrationDonation', schema: RegistrarionDonationSchema },
    ]),
  ],
  controllers: [RegistrationDonationController],
  providers: [RegistrationDonationService],
})
export class RegistrarionDonationModule {}
