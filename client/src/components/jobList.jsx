import { useEffect, useState } from "react";
import { getJobs } from "../services/api.js";
import JobCard from "./jobCard.jsx";
import JobForm from "./jobForm.jsx";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  const fetchJobs = async () => {
    const res = await getJobs();
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const filteredJobs = jobs
    .filter((job) => (statusFilter === "All" ? true : job.status === statusFilter))
    .sort((a, b) => {
      const dateA = new Date(a.appliedDate);
      const dateB = new Date(b.appliedDate);
      return sortOrder === "Newest" ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold my-6 text-center text-blue-800">Job Applications</h2>

      {/* Filter and Sort */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border px-4 py-2 rounded shadow-sm text-sm bg-white dark:bg-gray-700 dark:text-gray-400"
        >
          <option value="All">All</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-4 py-2 rounded shadow-sm text-sm bg-white dark:bg-gray-700 dark:text-gray-400"
        >
          <option value="Newest">Sort by Newest</option>
          <option value="Oldest">Sort by Oldest</option>
        </select>
      </div>

      {/* Job Form */}
      <JobForm refreshJobs={fetchJobs} />

      {/* Job Cards in Table */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white text-sm ">
          <thead className="bg-gray-100 dark:bg-gray-500 text-gray-700 dark:text-black uppercase text-xs font-semibold">
            <tr className="text-center">
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Applied Date</th>
              <th className="px-4 py-3">Link</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500 dark:bg-gray-700">
                  No jobs found for selected filter.
                </td>
              </tr>
            ) : (
              filteredJobs.map((job) => (
                <JobCard key={job._id} job={job} refreshJobs={fetchJobs} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
