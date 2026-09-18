const CourseHeader = ({ fetchCourses }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl text-left font-bold text-slate-800">
          Courses
        </h2>

        <p className="text-slate-500 mt-1 text-left text-[12px]">
          Manage all available courses.
        </p>
      </div>

      <button
        onClick={fetchCourses}
        className="rounded-lg bg-blue-600 px-5 py-2 text-white font-semibold hover:bg-blue-700 transition hover:cursor-pointer font-mono"
      >
        Refresh
      </button>
    </div>
  );
};

export default CourseHeader;