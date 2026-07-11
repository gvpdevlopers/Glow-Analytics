import { useEffect, useState } from "react";

import { FaSearch, FaFacebook } from "react-icons/fa";

import { getCampaigns } from "../services/dashboardService";

const MetricsTable = () => {
  const [search, setSearch] = useState("");

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const loadCampaigns = async () => {
      try {
        const data = await getCampaigns();

        setCampaigns(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadCampaigns();
  }, []);

  // Search Filter
  const filteredData = campaigns.filter((item) =>
    item.campaign_name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      className="
        bg-white

        border border-slate-200

        rounded-[32px]

        shadow-sm

        overflow-hidden
      "
    >
      {/* HEADER */}
      <div
        className="
          p-6 md:p-8

          border-b border-slate-200

          flex flex-col
          xl:flex-row

          xl:items-center
          xl:justify-between

          gap-5
        "
      >
        {/* LEFT */}
        <div>
          <h2
            className="
              text-3xl
              font-bold

              text-slate-900
            "
          >
            Campaign Performance
          </h2>

          <p
            className="
              text-slate-500

              mt-2
            "
          >
            Track impressions, clicks, leads and advertising metrics.
          </p>
        </div>

        {/* SEARCH */}
        <div
          className="
            relative

            w-full
            xl:w-[360px]
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
            placeholder="Search campaigns..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full

              border border-slate-200

              rounded-2xl

              py-3.5
              pl-14
              pr-5

              outline-none

              focus:ring-4
              focus:ring-cyan-500/10

              focus:border-cyan-400

              transition-all duration-300
            "
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table
          className="
            w-full
            min-w-[1100px]
          "
        >
          {/* TABLE HEAD */}
          <thead
            className="
              bg-slate-50
            "
          >
            <tr>
              <th
                className="
                  px-8 py-5

                  text-left

                  text-sm
                  font-semibold

                  text-slate-500
                "
              >
                Platform
              </th>

              <th
                className="
                  px-8 py-5

                  text-left

                  text-sm
                  font-semibold

                  text-slate-500
                "
              >
                Campaign
              </th>

              <th
                className="
                  px-8 py-5

                  text-left

                  text-sm
                  font-semibold

                  text-slate-500
                "
              >
                Impressions
              </th>

              <th
                className="
                  px-8 py-5

                  text-left

                  text-sm
                  font-semibold

                  text-slate-500
                "
              >
                Reach
              </th>

              <th
                className="
                  px-8 py-5

                  text-left

                  text-sm
                  font-semibold

                  text-slate-500
                "
              >
                Clicks
              </th>

              <th
                className="
                  px-8 py-5

                  text-left

                  text-sm
                  font-semibold

                  text-slate-500
                "
              >
                Leads
              </th>

              <th
                className="
                  px-8 py-5

                  text-left

                  text-sm
                  font-semibold

                  text-slate-500
                "
              >
                Spend
              </th>

              <th
                className="
                  px-8 py-5

                  text-left

                  text-sm
                  font-semibold

                  text-slate-500
                "
              >
                CPC
              </th>

              <th
                className="
                  px-8 py-5

                  text-left

                  text-sm
                  font-semibold

                  text-slate-500
                "
              >
                CTR
              </th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {filteredData.map((item) => (
              <tr
                key={item.campaign_id}
                className="
                    border-t border-slate-100

                    hover:bg-slate-50/80

                    transition-all duration-300
                  "
              >
                {/* PLATFORM */}
                <td className="px-8 py-6">
                  <div
                    className="
                        flex items-center gap-3
                      "
                  >
                    {/* ICON */}
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

                    {/* NAME */}
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
                        Ads Platform
                      </p>
                    </div>
                  </div>
                </td>

                {/* CAMPAIGN */}
                <td className="px-8 py-6">
                  <div>
                    <h3
                      className="
                          font-semibold
                          text-slate-900
                        "
                    >
                      {item.campaign_name}
                    </h3>

                    <p
                      className="
                          text-sm
                          text-slate-500

                          mt-1
                        "
                    >
                      Performance Campaign
                    </p>
                  </div>
                </td>

                {/* IMPRESSIONS */}
                <td
                  className="
                      px-8 py-6

                      font-semibold

                      text-slate-700
                    "
                >
                  {Number(item.impressions).toLocaleString()}
                </td>

                {/* REACH */}
                <td
                  className="
                      px-8 py-6

                      text-slate-600
                    "
                >
                  {Number(item.reach).toLocaleString()}
                </td>

                {/* CLICKS */}
                <td
                  className="
                      px-8 py-6

                      text-slate-600
                    "
                >
                  {Number(item.clicks).toLocaleString()}
                </td>

                {/* LEADS */}
                <td className="px-8 py-6">
                  <span
                    className="
                        px-4 py-2

                        rounded-full

                        bg-emerald-100

                        text-emerald-700

                        text-sm
                        font-semibold
                      "
                  >
                    N/A
                  </span>
                </td>

                {/* SPEND */}
                <td
                  className="
                      px-8 py-6

                      font-semibold

                      text-slate-900
                    "
                >
                  ₹ {Number(item.spend).toLocaleString()}
                </td>

                {/* CPC */}
                <td
                  className="
                      px-8 py-6

                      text-slate-600
                    "
                >
                  ₹ {Number(item.cpc).toFixed(2)}
                </td>

                {/* CTR */}
                <td className="px-8 py-6">
                  <span
                    className="
                        px-4 py-2

                        rounded-full

                        bg-cyan-100

                        text-cyan-700

                        text-sm
                        font-semibold
                      "
                  >
                    {Number(item.ctr).toFixed(2)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MetricsTable;
