const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // Optional for Google auth
    googleId: { type: String },
  },
  { timestamps: true }
);

// Hash the password before saving (only if password exists)
userSchema.pre('save', async function (next) {
  if (this.isModified('password') && this.password) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Compare password (only for manual login)
userSchema.methods.comparePassword = async function (enteredPassword) {
  if (!this.password) return false; // Skip if no password (Google login)
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
