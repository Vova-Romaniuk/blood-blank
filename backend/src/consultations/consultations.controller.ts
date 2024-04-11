// consultations.controller.ts
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ConsultationsService } from './consultations.service';
import { Consultation } from './consultation.model';

@Controller('consultations')
export class ConsultationsController {
  constructor(private readonly consultationsService: ConsultationsService) {}

  @Get()
  async getAllConsultations(): Promise<Consultation[]> {
    return this.consultationsService.getAll();
  }

  @Post()
  async createConsultation(
    @Body() consultationData: Partial<Consultation>,
  ): Promise<Consultation> {
    return this.consultationsService.createConsultation(consultationData);
  }

  @Delete(':id')
  async deleteConsultation(@Param('id') id: string): Promise<boolean> {
    return this.consultationsService.deleteConsultation(id);
  }
}
