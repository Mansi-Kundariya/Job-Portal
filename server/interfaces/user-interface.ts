import { Document } from 'mongoose';

interface IUser extends Document {
  email: string;
  passwordHash: string;
  role: 'jobSeeker' | 'employer';
  profile: {
    firstName?: string;
    lastName?: string;
    phone?: string;
    address?: string;
    resume?: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

export default IUser;
