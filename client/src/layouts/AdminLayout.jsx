import { useState } from "react";

import Sidebar from "../components/Sidebar";

import Topbar from "../components/Topbar";

const AdminLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
        min-h-screen

        bg-slate-100
      "
    >
      {/* SIDEBAR */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* MAIN CONTENT */}
      <div
        className="
          transition-all duration-300

          lg:ml-[290px]
        "
      >
        {/* TOPBAR */}
        <Topbar setIsOpen={setIsOpen} />

        {/* PAGE CONTENT */}
        <main
          className="
            p-4 md:p-8
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
