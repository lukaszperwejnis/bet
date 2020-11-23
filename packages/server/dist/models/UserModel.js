"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    profile: {
        type: mongoose.Schema.Types.Mixed
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    is_admin: {
        type: Boolean,
        default: false
    },
    score: {
        type: Number,
        default: 0
    }
}, {
    collection: 'user',
    timestamps: true
});
userSchema.index({ email: 1 }, { unique: true });
userSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    bcrypt.hash(this.password, 10, (err, hash) => {
        if (err) {
            return next(err);
        }
        this.password = hash;
        next();
    });
});
exports.UserModel = mongoose.model('User', userSchema);
//# sourceMappingURL=UserModel.js.map