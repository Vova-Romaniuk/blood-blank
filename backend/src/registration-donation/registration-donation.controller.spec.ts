import { Test, TestingModule } from '@nestjs/testing';
import { RegistrationDonationController } from './registration-donation.controller';

describe('RegistrationDonationController', () => {
  let controller: RegistrationDonationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistrationDonationController],
    }).compile();

    controller = module.get<RegistrationDonationController>(RegistrationDonationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
