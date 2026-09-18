const CourseTable = ({ courses, loading, handleEdit, handleDelete }) => {
  return (
    <div className="rounded-3xl border border-white/30  backdrop-blur-l shadow-xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Course List</h3>

        <span className="rounded-full  px-3 py-1 text-sm font-semibold text-blue-700 bg-white">
          {courses.length} Courses
        </span>
      </div>

      {loading ? (
        <div className="py-10 text-center text-slate-500">
          Loading courses...
        </div>
      ) : courses.length === 0 ? (
        <div className="py-10 text-center text-slate-500">
          No courses available.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl">
          <table className="min-w-full ">
            <thead className="">
              <tr>
                <th className="px-4 py-4 text-left text-sm font-semibold">
                  ID
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold">
                  Code
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold">
                  Title
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold">
                  Duration
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold">
                  Fee
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold">
                  Status
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold">
                  Description
                </th>

                <th className="px-5 py-4 text-center text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course) => (
                <tr
                  key={course.id}
                  className="border-b border-slate-200 hover:bg-cyan-800  transition"
                >
                  <td className="px-3 py-2 text-left">{course.id}</td>

                  <td className="px-3 py-2 text-sm font-semibold text-blue-600 text-left">
                    {course.courseCode}
                  </td>

                  <td className="px-5 text-sm py-4 text-left">{course.title}</td>

                  <td className="px-5 py-4 text-sm text-left">
                    {course.durationInMonths} Months
                  </td>

                  <td
                    className="px-5 py-4 font-semibold text-[13px]
                    text-green-600 text-left"
                  >
                    ₹ {course.fee}
                  </td>

                  <td className="px-5 py-4 text-left">
                    <span
                      className={`rounded-full px-3 py-1 text-[12px] font-semibold ${
                        course.status === "ACTIVE"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {course.status}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-sm max-w-sm truncate text-left">
                    {course.description || "-"}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => handleEdit(course)}
                        className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600 transition hover:cursor-pointer"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(course.id)}
                        className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition hover:cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CourseTable;
