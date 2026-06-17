const Campaign = require(
  "../models/Campaign"
);



// =========================================
// GET ALL CAMPAIGNS
// =========================================
const getCampaigns =
  async (req, res) => {

    try {

      let campaigns;






      // ADMIN
      if (
        req.user.role === "admin"
      ) {

        campaigns =
          await Campaign.find()

            .populate(
              "clientId",
              "name businessName"
            )

            .sort({
              createdAt: -1,
            });
      }






      // CLIENT
      else {

        campaigns =
          await Campaign.find({

            clientId:
              req.user.id,

          }).sort({
            createdAt: -1,
          });
      }






      res.status(200).json(
        campaigns
      );

    } catch (error) {

      res.status(500).json({

        message:
          "Failed to fetch campaigns",

      });
    }
  };










// =========================================
// GET DASHBOARD STATS
// =========================================
const getStats =
  async (req, res) => {

    try {

      let campaigns;






      // ADMIN
      if (
        req.user.role === "admin"
      ) {

        campaigns =
          await Campaign.find();
      }






      // CLIENT
      else {

        campaigns =
          await Campaign.find({

            clientId:
              req.user.id,

          });
      }







      // TOTAL IMPRESSIONS
      const totalImpressions =
        campaigns.reduce(

          (acc, item) =>
            acc +
            item.impressions,

          0
        );






      // TOTAL LEADS
      const totalLeads =
        campaigns.reduce(

          (acc, item) =>
            acc +
            item.leads,

          0
        );






      // TOTAL CLICKS
      const totalClicks =
        campaigns.reduce(

          (acc, item) =>
            acc +
            item.clicks,

          0
        );






      // TOTAL SPEND
      const totalSpend =
        campaigns.reduce(

          (acc, item) =>
            acc +
            item.spend,

          0
        );







      res.status(200).json({

        totalImpressions,

        totalLeads,

        totalClicks,

        totalSpend,

      });

    } catch (error) {

      res.status(500).json({

        message:
          "Failed to fetch stats",

      });
    }
  };






module.exports = {

  getCampaigns,

  getStats,

};