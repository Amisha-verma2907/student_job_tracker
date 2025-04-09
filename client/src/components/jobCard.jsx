import { deleteJob, updateJob } from "../services/api";

const JobCard = ({ job, refreshJobs }) => {
  const handleStatusChange = async (e) => {
    await updateJob(job._id, { status: e.target.value });
    refreshJobs();
  };

  const handleDelete = async () => {
    await deleteJob(job._id);
    refreshJobs();
  };

  return (
    <tr className="bg-gray-50 dark:bg-gray-700 transition duration-200 text-center">
      <td className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-400">
        {job.company}
      </td>
      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
        {job.role}
      </td>
      <td className="px-4 py-3">
        <select
          value={job.status}
          onChange={handleStatusChange}
          className="bg-gray-100 dark:bg-gray-700 dark:text-gray-400 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </td>
      <td className="px-4 py-3 text-gray-500 dark:text-gray-400">
        {new Date(job.appliedDate).toLocaleDateString()}
      </td>
      <td className="px-4 py-3">
        <a
          href={job.link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          View
        </a>
      </td>
      <td className="px-4 py-3">
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition text-sm font-medium"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default JobCard;
