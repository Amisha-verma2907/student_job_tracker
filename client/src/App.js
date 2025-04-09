import JobList from "./components/jobList.jsx";
import ThemeToggle from "./components/themeToggle.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <JobList />
    </div>
  );
}

export default App;
