import dashboardData from "../data/dashboardData";

import {
  FaEye,
  FaUserFriends,
  FaMousePointer,
  FaWallet,
  FaArrowUp,
} from "react-icons/fa";

const StatsCards = () => {
  // TOTAL IMPRESSIONS
  const totalImpressions = dashboardData.reduce(
    (acc, item) => acc + item.impressions,
    0,
  );

  // TOTAL LEADS
  const totalLeads = dashboardData.reduce((acc, item) => acc + item.leads, 0);

  // TOTAL CLICKS
  const totalClicks = dashboardData.reduce((acc, item) => acc + item.clicks, 0);

  // TOTAL SPEND
  const totalSpend = dashboardData.reduce((acc, item) => acc + item.spend, 0);

  // STATS ARRAY
  const stats = [
    {
      title: "Impressions",
      value: totalImpressions.toLocaleString(),
      icon: <FaEye />,
      color: "from-cyan-500 to-blue-500",
      growth: "+18%",
    },

    {
      title: "Total Leads",
      value: totalLeads,
      icon: <FaUserFriends />,
      color: "from-emerald-500 to-green-500",
      growth: "+12%",
    },

    {
      title: "Link Clicks",
      value: totalClicks.toLocaleString(),
      icon: <FaMousePointer />,
      color: "from-violet-500 to-indigo-500",
      growth: "+9%",
    },

    {
      title: "Ad Spend",
      value: `₹ ${totalSpend.toLocaleString()}`,
      icon: <FaWallet />,
      color: "from-orange-500 to-red-500",
      growth: "+22%",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        2xl:grid-cols-4

        gap-6
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
          {/* GLOW EFFECT */}
          <div
            className={`
              absolute top-0 right-0

              w-44 h-44

              bg-gradient-to-r
              ${stat.color}

              opacity-10

              blur-3xl
            `}
          ></div>

          {/* TOP SECTION */}
          <div
            className="
              relative z-10

              flex items-start
              justify-between
            "
          >
            {/* LEFT */}
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
                  text-4xl xl:text-5xl
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

                w-16 h-16

                rounded-2xl

                flex items-center justify-center

                text-white
                text-2xl

                shadow-lg
              `}
            >
              {stat.icon}
            </div>
          </div>

          {/* BOTTOM */}
          <div
            className="
              relative z-10

              flex items-center gap-3

              mt-8
            "
          >
            {/* ARROW */}
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

            {/* TEXT */}
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
  );
};

export default StatsCards;
