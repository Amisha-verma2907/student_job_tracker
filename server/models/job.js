import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  company: String,
  role: String,
  status: {
    type: String,
    enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
    default: 'Applied'
  },
  appliedDate: {
    type: Date,
    required: true
  },
  link: String
}, {
  timestamps: true
});

const Job = mongoose.model('Job', jobSchema);
export default Job;
