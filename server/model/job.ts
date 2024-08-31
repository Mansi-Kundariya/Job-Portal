import mongoose, { Schema } from 'mongoose';
import IJob from "../interfaces/job-interface";

const JobSchema: Schema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    salary: {
      min: Number,
      max: Number,
    },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: ['Open', 'Closed'],
      required: true,
    },
  }, {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  });
  
  // Create and export the Job model
  const Job = mongoose.model<IJob>('Job', JobSchema);
  export default Job;