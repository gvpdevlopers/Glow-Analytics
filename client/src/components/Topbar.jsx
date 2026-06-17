import { FaBars, FaBell, FaSearch } from "react-icons/fa";

const Topbar = ({ setIsOpen }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // User Initial
  const userInitial = user?.name?.charAt(0) || "A";

  return (
    <header
      className="
        sticky top-0 z-30

        bg-white/80
        backdrop-blur-xl

        border-b border-slate-200

        px-4 md:px-8
        py-4
      "
    >
      <div
        className="
          flex items-center justify-between
          gap-4
        "
      >
        {/* LEFT */}
        <div
          className="
            flex items-center gap-4
            flex-1
          "
        >
          {/* MOBILE MENU */}
          <button
            onClick={() => setIsOpen(true)}
            className="
              lg:hidden

              w-12 h-12

              rounded-2xl

              bg-white

              border border-slate-200

              flex items-center justify-center

              shadow-sm

              hover:bg-slate-50

              transition
            "
          >
            <FaBars className="text-slate-700" />
          </button>

          {/* SEARCH */}
          <div
            className="
              relative

              w-full
              max-w-md
            "
          >
            {/* ICON */}
            <div
              className="
                absolute left-5 top-1/2
                -translate-y-1/2

                text-slate-400
              "
            >
              <FaSearch />
            </div>

            <input
              type="text"
              placeholder="Search users, campaigns..."
              className="
                w-full

                bg-white

                border border-slate-200

                rounded-2xl

                py-3.5
                pl-14
                pr-5

                text-slate-700
                placeholder-slate-400

                outline-none

                focus:ring-4
                focus:ring-cyan-500/10

                focus:border-cyan-400

                transition-all duration-300
              "
            />
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
            flex items-center gap-4
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

              transition
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

          {/* USER PROFILE */}
          <div
            className="
              flex items-center gap-3

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
                from-cyan-400
                to-blue-500

                flex items-center justify-center

                text-white
                font-bold
                text-lg
              "
            >
              {userInitial}
            </div>

            {/* INFO */}
            <div className="hidden sm:block">
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
        </div>
      </div>
    </header>
  );
};

export default Topbar;
