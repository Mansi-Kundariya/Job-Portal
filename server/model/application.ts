import mongoose, { Schema } from 'mongoose';
import IApplication from "../interfaces/application-interface";

const ApplicationSchema: Schema = new Schema({
    jobId: {
      type: Schema.Types.ObjectId,
      ref: 'Job',
      required: true,
    },
    applicantId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
    coverLetter: String,
    status: {
      type: String,
      enum: ['Pending', 'Reviewed', 'Rejected', 'Accepted'],
      required: true,
    },
    appliedAt: {
      type: Date,
      default: Date.now,
    },
  }, {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  });
  
  // Create and export the Application model
  const Application = mongoose.model<IApplication>('Application', ApplicationSchema);
  export default Application;