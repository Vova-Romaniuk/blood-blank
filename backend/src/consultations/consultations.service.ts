// consultations.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Consultation } from './consultation.model';

@Injectable()
export class ConsultationsService {
  constructor(
    @InjectModel('consultation')
    private readonly consultationModel: Model<Consultation>,
  ) {}

  async getAll(): Promise<Consultation[]> {
    try {
      return await this.consultationModel.find().exec();
    } catch (error) {
      throw new Error('Error getting all consultations');
    }
  }

  async createConsultation(
    consultationData: Partial<Consultation>,
  ): Promise<Consultation> {
    try {
      const createdConsultation = new this.consultationModel(consultationData);
      return await createdConsultation.save();
    } catch (error) {
      throw new Error('Error creating consultation');
    }
  }

  async deleteConsultation(id: string): Promise<boolean> {
    try {
      const result = await this.consultationModel.deleteOne({ _id: id }).exec();
      if (result.deletedCount === 0) {
        throw new NotFoundException('Consultation not found');
      }
      return result.deletedCount > 0;
    } catch (error) {
      throw new Error('Error deleting consultation');
    }
  }
  async toggleHandledStatus(id): Promise<Consultation> {
    try {
      // Витягаємо рядкове значення із переданого ідентифікатора
      const consultationId = id instanceof Object ? id.id : id;

      const consultation = await this.consultationModel
        .findById(consultationId)
        .exec();
      if (!consultation) {
        throw new NotFoundException('Consultation not found');
      }

      consultation.isHandled = !consultation.isHandled;
      return consultation.save();
    } catch (error) {
      console.error(error);
      throw new Error('Error toggling handled status');
    }
  }
}
