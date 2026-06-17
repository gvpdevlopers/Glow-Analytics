import DashboardTopbar from "../components/DashboardTopbar";

const DashboardLayout = ({ children }) => {
  return (
    <div
      className="
        min-h-screen

        bg-slate-100
      "
    >
      {/* TOPBAR */}
      <DashboardTopbar />

      {/* MAIN CONTENT */}
      <main
        className="
          p-4 md:p-6 lg:p-8
        "
      >
        <div
          className="
            max-w-[1600px]
            mx-auto
          "
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
