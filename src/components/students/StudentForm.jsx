const StudentForm = ({
  formData,
  handleChange,
  handleSubmit,
  editingStudentId,
  resetForm,
  submitLoading,
  successMessage,
  error,
}) => {
  return (
    <div className="rounded-xl bg-transparent p-5 shadow-sm border border-slate-200">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-white-800">
          {editingStudentId ? "Edit Student" : "Add Student"}
        </h3>

        {editingStudentId && (
          <button
            type="button"
            onClick={resetForm}
            className="rounded-lg border border-slate-300 px-4 py-2 text-white hover:bg-slate-100  hover:text-black hover:cursor-pointer transition"
          >
            Cancel Edit
          </button>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-white mb-2 text-left">
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full rounded-lg border  border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-white mb-2 text-left">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-white mb-2 text-left">
            Phone
          </label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
            required
          />
        </div>

        {/* DOB */}
        <div>
          <label className="block text-sm font-medium text-white mb-2 text-left">
            Date of Birth
          </label>

          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm "
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-white mb-2 text-left">
            Gender
          </label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm student-status-select"
            required
          >
            <option className="student-status-select option" value="">Select gender</option>
            <option value="MALE">MALE</option>
            <option value="FEMALE">FEMALE</option>
            <option value="OTHER">OTHER</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-white mb-2 text-left">
            Status
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm student-status-select option"
            required
          >
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
          </select>
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-white mb-2 text-left">
            Address
          </label>

          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            placeholder="Enter address"
            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 text-left placeholder:text-sm"
            required
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={submitLoading}
            className={`w-full rounded-lg px-4 py-2 text-white font-semibold cursor-pointer transition disabled:opacity-70 ${
              editingStudentId
                ? "bg-amber-600 hover:bg-amber-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {submitLoading
              ? editingStudentId
                ? "Updating..."
                : "Adding..."
              : editingStudentId
              ? "Update Student"
              : "Add Student"}
          </button>
        </div>
      </form>

      {successMessage && (
        <p className="mt-4 text-green-600 font-medium">
          {successMessage}
        </p>
      )}

      {error && (
        <p className="mt-4 text-red-600 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

export default StudentForm;