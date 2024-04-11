import * as mongoose from 'mongoose';

export const AuthSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export interface Auth extends mongoose.Document {
  _id: string;
  email: string;
  password: string;
}
