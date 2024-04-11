import * as mongoose from 'mongoose';

export const RegistrarionDonationSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    donationDate: {
      type: Date,
      required: true,
    },
    isHandled: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

export interface RegistrarionDonation extends mongoose.Document {
  _id: string;
  phone: string;
  fullName: string;
  isHandled: boolean;
  birthday: Date;
}
