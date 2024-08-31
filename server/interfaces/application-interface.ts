import mongoose, { Document } from 'mongoose';

interface IApplication extends Document {
  jobId: mongoose.Types.ObjectId; // Reference to the Job ID
  applicantId: mongoose.Types.ObjectId; // Reference to the Job Seeker (User ID)
  resume: string;
  coverLetter?: string;
  status: 'Pending' | 'Reviewed' | 'Rejected' | 'Accepted';
  appliedAt?: Date;
}

export default  IApplication;