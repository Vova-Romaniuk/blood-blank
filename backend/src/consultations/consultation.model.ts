import * as mongoose from 'mongoose';

export const ConsultationSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    isHandled: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

export interface Consultation extends mongoose.Document {
  _id: string;
  phone: string;
  fullName: string;
  isHandled: boolean;
}
