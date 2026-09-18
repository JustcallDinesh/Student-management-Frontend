import {
  FaUserGraduate,
  FaBook,
  FaClipboardList,
  FaUserCheck,
  FaArrowRight,
  FaPlus,
  FaArrowRotateRight,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

import DashboardStatsSkeleton from "../components/common/DashboardStatsSkeleton";
import AnimatedNumber from "../components/common/AnimatedNumber";
import EnrollmentTrendChart from "../components/dashboard/EnrollmentTrendChart";
import CourseDistributionChart from "../components/dashboard/CourseDistributionChart";
import RecentStudents from "../components/dashboard/RecentStudents";
import RecentEnrollments from "../components/dashboard/RecentEnrollments";

import useDashboard from "../hooks/useDashboard";
import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {

  // ==========================================
  // DASHBOARD DATA
  // ==========================================

  const {
    stats,
    enrollmentTrend,
    courseDistribution,
    recentStudents,
    recentEnrollments,
    loading,
    refreshing,
    error,
    refreshDashboard,
  } = useDashboard();


  // ==========================================
  // AUTHENTICATION
  // ==========================================

  const { user, role } = useAuth();


  // ==========================================
  // STATISTICS CARDS
  // ==========================================
  // Flat icon tint instead of a gradient block — smaller footprint,
  // less visual weight per card.

  const cards = [
    {
      title: "Students",
      value: stats.students,
      tint: "bg-blue-500/10 text-blue-400",
      icon: <FaUserGraduate className="text-base" />,
    },
    {
      title: "Courses",
      value: stats.courses,
      tint: "bg-emerald-500/10 text-emerald-400",
      icon: <FaBook className="text-base" />,
    },
    {
      title: "Enrollments",
      value: stats.enrollments,
      tint: "bg-purple-500/10 text-purple-400",
      icon: <FaClipboardList className="text-base" />,
    },
    {
      title: "Active Students",
      value: stats.activeStudents,
      tint: "bg-orange-500/10 text-orange-400",
      icon: <FaUserCheck className="text-base" />,
    },
  ];


  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="space-y-4">
      {/* =====================================
          HEADER (replaces the big Welcome banner)
      ====================================== */}

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h4 className="text-2xl text-left font-semibold text-white">
            Dashboard
          </h4>
          <p className="mt-0.2 text-[12px] text-slate-400">
            Students, courses and enrollments
          </p>
        </div>

        <button
          type="button"
          onClick={refreshDashboard}
          disabled={refreshing}
          className="
            flex
            items-center
            gap-2
            rounded-lg
            border
            border-white/10
            px-3
            py-1.5
            text-xs
            font-medium
            text-slate-300
            transition
            hover:bg-white/5
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <FaArrowRotateRight
            className={`text-xs ${refreshing ? "animate-spin" : ""}`}
          />
          {refreshing ? "Refreshing..." : "Refresh"}
        </button>

      </div>


      {/* =====================================
          ERROR
      ====================================== */}

      {error && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-red-400">
                Dashboard error
              </p>
              <p className="mt-0.5 text-xs text-red-300">
                {error}
              </p>
            </div>

            <button
              type="button"
              onClick={refreshDashboard}
              disabled={refreshing}
              className="
                rounded-lg
                bg-red-500/20
                px-3
                py-1.5
                text-xs
                font-medium
                text-red-300
                transition
                hover:bg-red-500/30
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {refreshing ? "Retrying..." : "Try again"}
            </button>
          </div>
        </div>
      )}


      {/* =====================================
          STATISTICS — compact cards, hairline border,
          small tinted icon instead of a gradient block
      ====================================== */}

      {loading ? (
        <DashboardStatsSkeleton />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="
                rounded-xl
                border
                border-white/10
                bg-white/5
                p-4
              "
            >
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-400">
                  {card.title}
                </p>
                <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${card.tint}`}>
                  {card.icon}
                </div>
              </div>

              <h2 className="mt-2 text-2xl font-semibold text-white">
                <AnimatedNumber value={card.value} />
              </h2>
            </div>
          ))}
        </div>
      )}


      {/* =====================================
          CHARTS
      ====================================== */}

      <div className="grid  gap-3 xl:grid-cols-2">
        <EnrollmentTrendChart data={enrollmentTrend} />
        <CourseDistributionChart data={courseDistribution} />
      </div>


      {/* =====================================
          QUICK ACTIONS + RECENT STUDENTS
      ====================================== */}

      <div className="grid gap-3 xl:grid-cols-2">

        {/* QUICK ACTIONS — thin bordered rows instead of big
            gradient blocks */}

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h2 className="mb-3 text-sm font-semibold text-white">
            Quick actions
          </h2>

          <div className="space-y-2">

            <Link
              to="/students"
              className="
                flex
                items-center
                justify-between
                rounded-lg
                border
                border-white/10
                px-3
                py-2.5
                text-sm
                text-slate-200
                transition
                hover:bg-white/5
              "
            >
              <div className="flex items-center gap-2.5">
                <FaPlus className="text-xs text-slate-400" />
                <span>Add student</span>
              </div>
              <FaArrowRight className="text-xs text-slate-500" />
            </Link>

            <Link
              to="/courses"
              className="
                flex
                items-center
                justify-between
                rounded-lg
                border
                border-white/10
                px-3
                py-2.5
                text-sm
                text-slate-200
                transition
                hover:bg-white/5
              "
            >
              <div className="flex items-center gap-2.5">
                <FaPlus className="text-xs text-slate-400" />
                <span>Add course</span>
              </div>
              <FaArrowRight className="text-xs text-slate-500" />
            </Link>

            <Link
              to="/enrollments"
              className="
                flex
                items-center
                justify-between
                rounded-lg
                border
                border-white/10
                px-3
                py-2.5
                text-sm
                text-slate-200
                transition
                hover:bg-white/5
              "
            >
              <div className="flex items-center gap-2.5">
                <FaPlus className="text-xs text-slate-400" />
                <span>Enroll student</span>
              </div>
              <FaArrowRight className="text-xs text-slate-500" />
            </Link>

          </div>
        </div>

        {/* RECENT STUDENTS — pass a "dense" flag if that
            component supports it; see note below */}

        <RecentStudents students={recentStudents} dense />

      </div>


      {/* =====================================
          RECENT ENROLLMENTS
      ====================================== */}

      <RecentEnrollments enrollments={recentEnrollments} dense />

    </div>
  );
};

export default DashboardPage;