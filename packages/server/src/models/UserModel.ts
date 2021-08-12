import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from '@bet/structures';

const userSchema = new mongoose.Schema<User.User>(
  {
    profile: {
      type: mongoose.Schema.Types.Mixed,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
    score: {
      type: Number,
      default: 0,
    },
  },
  {
    collection: 'user',
    timestamps: true,
  },
);

userSchema.index({ email: 1 }, { unique: true });

userSchema.pre('save', function hashPassword(next) {
  if (!this.isModified('password')) {
    next();
    return;
  }

  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) {
      next(err);
      return;
    }

    this.password = hash;
    next();
  });
});

export const UserModel = mongoose.model('User', userSchema);
