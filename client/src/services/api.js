import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// CRUD functions
export const getJobs = () => API.get("/api/jobs");
export const addJob = (jobData) => API.post("/api/jobs", jobData);
export const updateJob = (id, updatedData) => API.put(`/api/jobs/${id}`, updatedData);
export const deleteJob = (id) => API.delete(`/api/jobs/${id}`);
