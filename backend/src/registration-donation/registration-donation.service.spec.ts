import { Test, TestingModule } from '@nestjs/testing';
import { RegistrationDonationService } from './registration-donation.service';

describe('RegistrationDonationService', () => {
  let service: RegistrationDonationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrationDonationService],
    }).compile();

    service = module.get<RegistrationDonationService>(RegistrationDonationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
