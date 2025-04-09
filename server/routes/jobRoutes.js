import express from 'express';
import {
  createJob,
  getAllJobs,
  updateJobStatus,
  deleteJob
} from '../controllers/jobControllers.js';

const router = express.Router();

router.post('/', createJob);
router.get('/', getAllJobs);
router.put('/:id', updateJobStatus);
router.delete('/:id', deleteJob);

export default router;
