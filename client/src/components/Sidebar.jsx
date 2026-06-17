import { NavLink, useNavigate } from "react-router-dom";

import {
  FaChartPie,
  FaUsers,
  FaUserPlus,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

import logo from "../assets/logo.png";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/");
  };

  // Navigation Items
  const navItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <FaChartPie />,
    },

    {
      name: "Users",
      path: "/admin/users",
      icon: <FaUsers />,
    },

    {
      name: "Create User",
      path: "/admin/create-user",
      icon: <FaUserPlus />,
    },
  ];

  return (
    <>
      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="
            fixed inset-0
            bg-black/60
            backdrop-blur-sm
            z-40
            lg:hidden
          "
        ></div>
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 z-50

          h-screen
          w-[290px]

          bg-slate-950
          border-r border-slate-800

          flex flex-col

          transition-transform duration-300

          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* TOP */}
        <div
          className="
            px-6 py-7

            border-b border-slate-800
          "
        >
          {/* HEADER */}
          <div className="flex items-center justify-between">
            {/* BRAND */}
            <div className="flex items-center gap-4">
              {/* LOGO */}
              <div
                className="
                  w-14 h-14

                  rounded-2xl

                  bg-slate-900

                  flex items-center justify-center

                  border border-slate-800
                "
              >
                <img
                  src={logo}
                  alt="Glow Ventures"
                  className="
                    w-10 h-10 object-contain
                  "
                />
              </div>

              {/* TEXT */}
              <div>
                <h1
                  className="
                    text-2xl font-bold
                    text-white
                  "
                >
                  GlowDash
                </h1>

                <p
                  className="
                    text-slate-400
                    text-sm mt-1
                  "
                >
                  Glow Ventures
                </p>
              </div>
            </div>

            {/* MOBILE CLOSE */}
            <button
              onClick={() => setIsOpen(false)}
              className="
                lg:hidden

                w-10 h-10

                rounded-xl

                bg-slate-900
                border border-slate-800

                flex items-center justify-center

                text-slate-400
                hover:text-white

                transition
              "
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* NAVIGATION */}
        <div
          className="
            flex-1

            px-5 py-8

            overflow-y-auto
          "
        >
          <div className="space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                end={item.path === "/admin"}
                className={({ isActive }) =>
                  `
                    group

                    flex items-center gap-4

                    px-5 py-4

                    rounded-2xl

                    transition-all duration-300

                    ${
                      isActive
                        ? `
                          bg-gradient-to-r
                          from-cyan-500
                          to-blue-500

                          text-white

                          shadow-lg
                          shadow-cyan-500/10
                        `
                        : `
                          text-slate-400

                          hover:bg-slate-900
                          hover:text-white
                        `
                    }
                  `
                }
              >
                {/* ICON */}
                <span className="text-lg">{item.icon}</span>

                {/* TEXT */}
                <span className="font-medium">{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div
          className="
            p-5

            border-t border-slate-800
          "
        >
          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="
              w-full

              flex items-center justify-center gap-3

              py-4 rounded-2xl

              bg-red-500/10
              border border-red-500/20

              text-red-400

              hover:bg-red-500
              hover:text-white

              transition-all duration-300
            "
          >
            <FaSignOutAlt />

            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
