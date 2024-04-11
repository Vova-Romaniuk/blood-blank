import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegistrarionDonation } from './registration-donation.model';
@Injectable()
export class RegistrationDonationService {
  constructor(
    @InjectModel('registrationDonation')
    private readonly registrarionDonationModel: Model<RegistrarionDonation>,
  ) {}

  async getAll(): Promise<RegistrarionDonation[]> {
    try {
      return await this.registrarionDonationModel.find().exec();
    } catch (error) {
      throw new Error('Error getting all registrarionDonations');
    }
  }

  async createRegistrarionDonation(
    registrarionDonationData: Partial<RegistrarionDonation>,
  ): Promise<RegistrarionDonation> {
    try {
      const createdRegistrarionDonation = new this.registrarionDonationModel(
        registrarionDonationData,
      );
      return await createdRegistrarionDonation.save();
    } catch (error) {
      throw new Error('Error creating registrarionDonation');
    }
  }

  async deleteRegistrarionDonation(id: string): Promise<boolean> {
    try {
      const result = await this.registrarionDonationModel
        .deleteOne({ _id: id })
        .exec();
      if (result.deletedCount === 0) {
        throw new NotFoundException('RegistrarionDonation not found');
      }
      return result.deletedCount > 0;
    } catch (error) {
      throw new Error('Error deleting registrarionDonation');
    }
  }
}
