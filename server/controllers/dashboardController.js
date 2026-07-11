const {
  testConnection,
  getCampaigns: getMetaCampaigns,
  getInsights,
} = require("../services/metaService");


// =========================================
// TEST META CONNECTION
// =========================================
const testMeta = async (req, res) => {
  try {

    const data = await testConnection();

    res.status(200).json({
      success: true,
      data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// =========================================
// GET META CAMPAIGNS
// =========================================
const getMetaCampaignsController = async (
  req,
  res
) => {

  try {

    const campaigns =
      await getMetaCampaigns();

    res.status(200).json({
      success: true,
      campaigns,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


// =========================================
// GET META INSIGHTS
// =========================================
const getMetaInsights = async (
  req,
  res
) => {

  try {

    const insights =
      await getInsights();

      console.log(insights);

    res.status(200).json({
      success: true,
      insights,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


// =========================================
// GET LIVE CAMPAIGNS
// =========================================
const getCampaigns = async (
  req,
  res
) => {

  try {

    let campaigns =
      await getInsights();

    // Client sees only assigned campaigns
    if (
      req.user.role === "client"
    ) {

      campaigns =
        campaigns.filter(
          (campaign) =>
            req.user.campaignIds.includes(
              campaign.campaign_id
            )
        );

    }

    res.status(200).json(campaigns);

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};


// =========================================
// GET DASHBOARD STATS
// =========================================
const getStats = async (
  req,
  res
) => {

  try {

    

    let insights =
      await getInsights();

      console.log("Insights:", insights);

    // Client sees only assigned campaigns
    if (
      req.user.role === "client"
    ) {

      insights =
        insights.filter(
          (campaign) =>
            req.user.campaignIds.includes(
              campaign.campaign_id
            )
        );

    }

    const totalImpressions =
      insights.reduce(
        (sum, item) =>
          sum +
          Number(item.impressions || 0),
        0
      );

    const totalReach =
      insights.reduce(
        (sum, item) =>
          sum +
          Number(item.reach || 0),
        0
      );

    const totalClicks =
      insights.reduce(
        (sum, item) =>
          sum +
          Number(item.clicks || 0),
        0
      );

    const totalSpend =
      insights.reduce(
        (sum, item) =>
          sum +
          Number(item.spend || 0),
        0
      );

    res.status(200).json({

      totalImpressions,

      totalReach,

      totalClicks,

      totalSpend,

    });

  } catch (error) {
  console.error("Dashboard Error:", error);

  if (!res.headersSent) {
    return res.status(500).json({
      success: false,
      message: error.message,
      stack: error.stack,
    });
  }
}

  }


module.exports = {

  getCampaigns,

  getStats,

  testMeta,

  getMetaCampaignsController,

  getMetaInsights,

};