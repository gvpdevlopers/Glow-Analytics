import DashboardLayout from "../layouts/DashboardLayout";

import StatsCards from "../components/StatsCards";

import MetricsTable from "../components/MetricsTable";

import { FaChartLine, FaFacebook, FaGoogle } from "react-icons/fa";

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* HERO SECTION */}
      <div
        className="
          flex flex-col
          xl:flex-row

          xl:items-center
          xl:justify-between

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
            Campaign Analytics
          </h1>

          <p
            className="
              text-slate-500
              text-lg

              mt-3

              max-w-2xl
            "
          >
            Monitor Meta Ads, Google Ads, leads, impressions, clicks and
            campaign performance from one dashboard.
          </p>
        </div>

        {/* RIGHT OVERVIEW */}
        <div
          className="
            bg-white

            border border-slate-200

            rounded-[30px]

            shadow-sm

            p-6

            min-w-[320px]
          "
        >
          {/* HEADER */}
          <div
            className="
              flex items-center
              justify-between

              mb-6
            "
          >
            <div>
              <p
                className="
                  text-slate-500
                  text-sm
                "
              >
                Campaign Overview
              </p>

              <h2
                className="
                  text-3xl
                  font-bold

                  text-slate-900

                  mt-2
                "
              >
                +18.4%
              </h2>
            </div>

            <div
              className="
                w-16 h-16

                rounded-2xl

                bg-gradient-to-r
                from-cyan-500
                to-blue-500

                flex items-center justify-center

                text-white
                text-2xl

                shadow-lg
              "
            >
              <FaChartLine />
            </div>
          </div>

          {/* PLATFORMS */}
          <div className="space-y-4">
            {/* META */}
            <div
              className="
                flex items-center
                justify-between

                p-4

                rounded-2xl

                bg-slate-50
              "
            >
              <div
                className="
                  flex items-center gap-3
                "
              >
                <div
                  className="
                    w-11 h-11

                    rounded-xl

                    bg-indigo-500

                    flex items-center justify-center

                    text-white
                  "
                >
                  <FaFacebook />
                </div>

                <div>
                  <h3
                    className="
                      font-semibold
                      text-slate-900
                    "
                  >
                    Meta Ads
                  </h3>

                  <p
                    className="
                      text-sm
                      text-slate-500
                    "
                  >
                    Active Campaigns
                  </p>
                </div>
              </div>

              <span
                className="
                  text-xl
                  font-bold

                  text-slate-900
                "
              >
                12
              </span>
            </div>

            {/* GOOGLE */}
            <div
              className="
                flex items-center
                justify-between

                p-4

                rounded-2xl

                bg-slate-50
              "
            >
              <div
                className="
                  flex items-center gap-3
                "
              >
                <div
                  className="
                    w-11 h-11

                    rounded-xl

                    bg-red-500

                    flex items-center justify-center

                    text-white
                  "
                >
                  <FaGoogle />
                </div>

                <div>
                  <h3
                    className="
                      font-semibold
                      text-slate-900
                    "
                  >
                    Google Ads
                  </h3>

                  <p
                    className="
                      text-sm
                      text-slate-500
                    "
                  >
                    Running Campaigns
                  </p>
                </div>
              </div>

              <span
                className="
                  text-xl
                  font-bold

                  text-slate-900
                "
              >
                8
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="mb-10">
        <StatsCards />
      </div>

      {/* TABLE */}
      <MetricsTable />
    </DashboardLayout>
  );
};

export default Dashboard;
