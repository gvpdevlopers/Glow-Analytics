import { useEffect, useState } from "react";

import AdminLayout from "../layouts/AdminLayout";

import { getUsers } from "../services/userService";
import { getCampaigns } from "../services/dashboardService";

import {
  FaUsers,
  FaUserCheck,
  FaFacebook,
  FaGoogle,
  FaArrowUp,
  FaChartLine,
} from "react-icons/fa";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [campaigns, setCampaigns] = useState([]);

  // Fetch Users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();

        setUsers(data);
      } catch (error) {
        console.log(error);
      }

      const campaignData = await getCampaigns();
      setCampaigns(campaignData);
    };

    fetchUsers();
  }, []);

  // Stats
  const totalUsers = users.length;

  const activeClients = users.filter((user) => user.role === "client").length;

  // Dashboard Stats
  const stats = [
    {
      title: "Total Users",
      value: totalUsers,
      icon: <FaUsers />,
      color: "from-cyan-500 to-blue-500",
      growth: "+12%",
    },

    {
      title: "Active Clients",
      value: activeClients,
      icon: <FaUserCheck />,
      color: "from-emerald-500 to-green-500",
      growth: "+8%",
    },

    {
      title: "Meta Campaigns",
      value: campaigns.length,
      icon: <FaFacebook />,
      color: "from-indigo-500 to-violet-500",
      growth: "+15%",
    },

    // {
    //   title: "Google Ads",
    //   value: 8,
    //   icon: <FaGoogle />,
    //   color: "from-red-500 to-orange-500",
    //   growth: "+5%",
    // },
  ];

  return (
    <AdminLayout>
      {/* PAGE HEADER */}
      <div
        className="
          flex flex-col
          lg:flex-row

          lg:items-center
          lg:justify-between

          gap-6

          mb-10
        "
      >
        {/* LEFT */}
        <div>
          <h1
            className="
              text-4xl md:text-5xl
              font-bold

              text-slate-900
            "
          >
            Dashboard Overview
          </h1>

          <p
            className="
              text-slate-500
              mt-3
              text-lg
            "
          >
            Monitor users, campaigns and platform performance.
          </p>
        </div>

        {/* RIGHT */}
        <div
          className="
            bg-white

            border border-slate-200

            rounded-3xl

            px-6 py-5

            shadow-sm
          "
        >
          <div
            className="
              flex items-center gap-4
            "
          >
            <div
              className="
                w-14 h-14

                rounded-2xl

                bg-gradient-to-r
                from-cyan-500
                to-blue-500

                flex items-center justify-center

                text-white
                text-xl
              "
            >
              <FaChartLine />
            </div>

            <div>
              <p className="text-slate-500">Total Growth</p>

              <h2
                className="
                  text-3xl font-bold
                  text-slate-900
                "
              >
                +24.8%
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* STATS GRID */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4

          gap-6

          mb-10
        "
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="
                relative

                bg-white

                border border-slate-200

                rounded-[30px]

                p-7

                shadow-sm

                hover:shadow-xl
                hover:-translate-y-1

                transition-all duration-300

                overflow-hidden
              "
          >
            {/* Glow */}
            <div
              className={`
                  absolute top-0 right-0

                  w-40 h-40

                  bg-gradient-to-r
                  ${stat.color}

                  opacity-10

                  blur-3xl
                `}
            ></div>

            {/* TOP */}
            <div
              className="
                  flex items-start
                  justify-between

                  relative z-10
                "
            >
              {/* TEXT */}
              <div>
                <p
                  className="
                      text-slate-500
                      font-medium
                    "
                >
                  {stat.title}
                </p>

                <h2
                  className="
                      text-5xl
                      font-bold

                      text-slate-900

                      mt-5
                    "
                >
                  {stat.value}
                </h2>
              </div>

              {/* ICON */}
              <div
                className={`
                    bg-gradient-to-r
                    ${stat.color}

                    text-white

                    w-16 h-16

                    rounded-2xl

                    flex items-center justify-center

                    text-2xl

                    shadow-lg
                  `}
              >
                {stat.icon}
              </div>
            </div>

            {/* FOOTER */}
            <div
              className="
                  flex items-center gap-2

                  mt-8

                  relative z-10
                "
            >
              <div
                className="
                    w-8 h-8

                    rounded-full

                    bg-emerald-100

                    flex items-center justify-center
                  "
              >
                <FaArrowUp
                  className="
                      text-emerald-600
                      text-sm
                    "
                />
              </div>

              <p
                className="
                    text-sm
                    text-slate-500
                  "
              >
                <span
                  className="
                      text-emerald-600
                      font-semibold
                    "
                >
                  {stat.growth}
                </span>{" "}
                growth this month
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM SECTION */}
      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-3

          gap-6
        "
      >
        {/* RECENT USERS */}
        <div
          className="
            xl:col-span-2

            bg-white

            border border-slate-200

            rounded-[30px]

            p-7

            shadow-sm
          "
        >
          {/* HEADER */}
          <div
            className="
              flex items-center
              justify-between

              mb-8
            "
          >
            <div>
              <h2
                className="
                  text-2xl font-bold
                  text-slate-900
                "
              >
                Recent Users
              </h2>

              <p
                className="
                  text-slate-500
                  mt-1
                "
              >
                Recently added dashboard users
              </p>
            </div>
          </div>

          {/* USERS */}
          <div className="space-y-5">
            {users.slice(0, 5).map((user) => (
              <div
                key={user._id}
                className="
                    flex items-center
                    justify-between

                    p-5

                    rounded-2xl

                    border border-slate-200

                    hover:bg-slate-50

                    transition
                  "
              >
                {/* LEFT */}
                <div
                  className="
                      flex items-center gap-4
                    "
                >
                  {/* AVATAR */}
                  <div
                    className="
                        w-14 h-14

                        rounded-2xl

                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-500

                        flex items-center justify-center

                        text-white
                        font-bold
                        text-lg
                      "
                  >
                    {user.name?.charAt(0)}
                  </div>

                  {/* INFO */}
                  <div>
                    <h3
                      className="
                          font-semibold
                          text-slate-900
                        "
                    >
                      {user.name}
                    </h3>

                    <p
                      className="
                          text-slate-500
                          text-sm mt-1
                        "
                    >
                      {user.email}
                    </p>
                  </div>
                </div>

                {/* ROLE */}
                <span
                  className={`
                      px-4 py-2

                      rounded-full

                      text-sm
                      font-medium

                      ${
                        user.role === "admin"
                          ? `
                            bg-blue-100
                            text-blue-700
                          `
                          : `
                            bg-emerald-100
                            text-emerald-700
                          `
                      }
                    `}
                >
                  {user.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PERFORMANCE CARD */}
        <div
          className="
            bg-gradient-to-br
            from-slate-950
            to-slate-900

            rounded-[30px]

            p-7

            text-white

            relative overflow-hidden
          "
        >
          {/* GLOW */}
          <div
            className="
              absolute top-0 right-0

              w-52 h-52

              bg-cyan-500/20

              rounded-full

              blur-3xl
            "
          ></div>

          <div className="relative z-10">
            <p className="text-slate-400">Performance Score</p>

            <h2
              className="
                text-7xl
                font-bold

                mt-6
              "
            >
              92%
            </h2>

            <p
              className="
                text-slate-400
                mt-6
                leading-relaxed
              "
            >
              Your marketing campaigns are performing better than last month
              with higher engagement and conversion rates.
            </p>

            <div
              className="
                mt-10

                bg-white/10

                border border-white/10

                rounded-2xl

                p-5
              "
            >
              <div
                className="
                  flex items-center
                  justify-between
                "
              >
                <span>Campaign Success</span>

                <span className="font-bold">84%</span>
              </div>

              {/* BAR */}
              <div
                className="
                  w-full h-3

                  bg-white/10

                  rounded-full

                  mt-4
                  overflow-hidden
                "
              >
                <div
                  className="
                    h-full w-[84%]

                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500

                    rounded-full
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Admin;
