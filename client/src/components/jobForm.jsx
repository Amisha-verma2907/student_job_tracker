import { useState } from "react";
import { addJob } from "../services/api";

const JobForm = ({ refreshJobs }) => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    appliedDate: "",
    link: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addJob(formData);
    refreshJobs();
    setFormData({
      company: "",
      role: "",
      status: "Applied",
      appliedDate: "",
      link: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8 flex flex-wrap gap-4 justify-between items-center sticky top-0 z-40"
    >
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
        autoComplete="off"
        required
        className="flex-1 min-w-[150px] border border-gray-300 rounded px-4 py-2 dark:bg-gray-700 dark:text-white"
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
        autoComplete="off"
        required
        className="flex-1 min-w-[150px] border border-gray-300 rounded px-4 py-2 dark:bg-gray-700 dark:text-white"
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="flex-1 min-w-[150px] border border-gray-300 rounded px-4 py-2 dark:bg-gray-700 dark:text-gray-400"
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input
        type="date"
        name="appliedDate"
        value={formData.appliedDate}
        onChange={handleChange}
        autoComplete="off"
        required
        className="flex-1 min-w-[150px] border border-gray-300 rounded px-4 py-2 dark:bg-gray-700 dark:text-gray-400"
      />
      <input
        type="url"
        name="link"
        placeholder="Job Link"
        value={formData.link}
        onChange={handleChange}
        autoComplete="off"
        className="flex-1 min-w-[150px] border border-gray-300 rounded px-4 py-2 dark:bg-gray-700 dark:text-white"
      />
      <button
        type="submit"
        className="bg-blue-600 dark:bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
      >
        Add Job
      </button>
    </form>
  );
};

export default JobForm;
