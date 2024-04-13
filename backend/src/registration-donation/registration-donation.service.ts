import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegistrarionDonation } from './registration-donation.model';
import { format, addDays } from 'date-fns';
import ukLocale from 'date-fns/locale/uk';
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
      console.log(registrarionDonationData);
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
  async generateSchedule(): Promise<any[]> {
    try {
      const registrationDonations = await this.registrarionDonationModel
        .find()
        .exec();
      const scheduleMap = {};

      registrationDonations.forEach((donation) => {
        const { donationDate } = donation as any;

        const adjustedDate = donationDate;
        adjustedDate.setHours(donationDate.getHours());

        const day = format(adjustedDate, 'yyyy-MM-dd', {
          locale: ukLocale as any,
        });

        const time = format(adjustedDate, 'HH:mm', { locale: ukLocale as any });

        if (scheduleMap[day]) {
          scheduleMap[day].times.push(time);
        } else {
          scheduleMap[day] = {
            day: new Date(adjustedDate),
            times: [time],
          };
        }
      });

      const scheduleArray = Object.values(scheduleMap);

      scheduleArray.sort(
        (a: { day: Date }, b: { day: Date }) =>
          a.day.getTime() - b.day.getTime(),
      );

      return scheduleArray;
    } catch (error) {
      throw new Error('Error generating schedule');
    }
  }

  async toggleHandledStatus(id): Promise<RegistrarionDonation> {
    try {
      // Витягаємо рядкове значення із переданого ідентифікатора
      const registrationDonationId = id instanceof Object ? id.id : id;

      const registrationDonation = await this.registrarionDonationModel
        .findById(registrationDonationId)
        .exec();
      if (!registrationDonation) {
        throw new NotFoundException('Consultation not found');
      }

      registrationDonation.isHandled = !registrationDonation.isHandled;
      return registrationDonation.save();
    } catch (error) {
      console.error(error);
      throw new Error('Error toggling handled status');
    }
  }
}
