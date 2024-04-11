import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { RegistrarionDonation } from './registration-donation.model';
import { RegistrationDonationService } from './registration-donation.service';
@Controller('registration-donation')
export class RegistrationDonationController {
  constructor(
    private readonly registrationDonationService: RegistrationDonationService,
  ) {}

  @Get()
  async getAllRegistrationsDonation(): Promise<RegistrarionDonation[]> {
    return this.registrationDonationService.getAll();
  }

  @Post()
  async createRegistrationsDonation(
    @Body() registrarionDonationData: Partial<RegistrarionDonation>,
  ): Promise<RegistrarionDonation> {
    return this.registrationDonationService.createRegistrarionDonation(
      registrarionDonationData,
    );
  }

  @Delete(':id')
  async deleteRegistrationDonation(@Param('id') id: string): Promise<boolean> {
    return this.registrationDonationService.deleteRegistrarionDonation(id);
  }
}
