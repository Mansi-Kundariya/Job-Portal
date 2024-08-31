import mongoose, { Document } from 'mongoose';

interface IJob extends Document {
  title: string;
  description: string;
  companyName: string;
  location: string;
  category: string;
  type: string;
  salary?: {
    min?: number;
    max?: number;
  };
  postedBy: mongoose.Types.ObjectId; // Reference to the employer (User ID)
  status: 'Open' | 'Closed';
  createdAt?: Date;
  updatedAt?: Date;
}

export default IJob;