import mongoose, { Schema } from 'mongoose';
import IUser from "../interfaces/user-interface";

const UserSchema: Schema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['jobSeeker', 'employer'],
      required: true,
    },
    profile: {
      firstName: String,
      lastName: String,
      phone: String,
      address: String,
      resume: String,
    },
  }, {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  });
  
  // Create and export the User model
  const User = mongoose.model<IUser>('User', UserSchema);
  export default User;