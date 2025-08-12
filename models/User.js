const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// ✅ Define sub-schema for workoutEntry with timestamps
const workoutEntrySchema = new mongoose.Schema(
  {
    date: { type: Date, default: Date.now },
    weight: { type: Number, default: null },
    workout: { type: String, default: null },
    dietMaintained: { type: String, default: null },
  },
  { timestamps: true } // ✅ Adds createdAt and updatedAt to each workoutEntry
);

// ✅ Main User schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    googleId: { type: String },
    profilePic: { type: String, default: "/uploads/default.jpg" },
    bmr: { type: Number, default: null },
    maintenance: { type: Number, default: null },
    gainWeight: { type: Number, default: null },
    loseWeight: { type: Number, default: null },
    bmi: { type: Number },
    category: { type: String },
    workoutEntry: [workoutEntrySchema], // ✅ use the sub-schema here
    workoutSplit: {
      gender: { type: String, default: null },
      days: { type: Number, default: null }
    }, 
  },
  { timestamps: true }
);

// ✅ Hash the password before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('password') && this.password) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// ✅ Compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  if (!this.password) return false;
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
