import { useNavigate } from "react-router-dom";

import { FaSignOutAlt, FaBell } from "react-icons/fa";

import logo from "../assets/logo.png";

const DashboardTopbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/");
  };

  // User Initial
  const userInitial = user?.name?.charAt(0) || "U";

  return (
    <header
      className="
        sticky top-0 z-40

        bg-white/80
        backdrop-blur-xl

        border-b border-slate-200

        px-4 md:px-8
        py-4
      "
    >
      <div
        className="
          max-w-[1600px]
          mx-auto

          flex items-center
          justify-between

          gap-4
        "
      >
        {/* LEFT */}
        <div
          className="
            flex items-center gap-4
          "
        >
          {/* LOGO BOX */}
          <div
            className="
              w-14 h-14

              rounded-2xl

              bg-slate-950

              border border-slate-800

              flex items-center justify-center

              shadow-lg
            "
          >
            <img
              src={logo}
              alt="Glow Ventures"
              className="
                w-9 h-9
                object-contain
              "
            />
          </div>

          {/* BRAND TEXT */}
          <div>
            <h1
              className="
                text-2xl
                font-bold

                text-slate-900
              "
            >
              GlowDash
            </h1>

            <p
              className="
                text-sm
                text-slate-500

                mt-1
              "
            >
              Glow Ventures
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
            flex items-center gap-3 md:gap-5
          "
        >
          {/* NOTIFICATION */}
          <button
            className="
              relative

              hidden sm:flex

              w-12 h-12

              rounded-2xl

              bg-white

              border border-slate-200

              items-center justify-center

              shadow-sm

              hover:bg-slate-50

              transition-all duration-300
            "
          >
            <FaBell className="text-slate-600" />

            {/* DOT */}
            <span
              className="
                absolute top-3 right-3

                w-2.5 h-2.5

                bg-cyan-400

                rounded-full
              "
            ></span>
          </button>

          {/* USER CARD */}
          <div
            className="
              hidden md:flex

              items-center gap-3

              bg-white

              border border-slate-200

              rounded-2xl

              px-3 py-2

              shadow-sm
            "
          >
            {/* AVATAR */}
            <div
              className="
                w-11 h-11

                rounded-2xl

                bg-gradient-to-r
                from-cyan-500
                to-blue-500

                flex items-center justify-center

                text-white
                font-bold
              "
            >
              {userInitial}
            </div>

            {/* INFO */}
            <div>
              <h2
                className="
                  font-semibold
                  text-slate-800
                "
              >
                {user?.name}
              </h2>

              <p
                className="
                  text-sm
                  text-slate-500
                  capitalize
                "
              >
                {user?.role}
              </p>
            </div>
          </div>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="
              flex items-center gap-2

              bg-red-500

              hover:bg-red-600

              text-white

              px-5 py-3

              rounded-2xl

              shadow-lg
              shadow-red-500/20

              transition-all duration-300

              hover:-translate-y-0.5
            "
          >
            <FaSignOutAlt />

            <span className="hidden sm:block">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardTopbar;
