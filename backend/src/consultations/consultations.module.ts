// consultations.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsultationsController } from './consultations.controller';
import { ConsultationsService } from './consultations.service';
import { ConsultationSchema } from './consultation.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'consultation', schema: ConsultationSchema },
    ]),
  ],
  controllers: [ConsultationsController],
  providers: [ConsultationsService],
})
export class ConsultationsModule {}
