const axios = require("axios");

const { metaConfig } = require("../config/metaConfig");

console.log("Meta Ad Account:", metaConfig.adAccountId);


// ==========================================
// AXIOS INSTANCE
// ==========================================
const metaAPI = axios.create({
  baseURL: metaConfig.graphBaseUrl,
  timeout: 30000,
});

// ==========================================
// TEST META CONNECTION
// ==========================================
const testConnection = async () => {
  try {
    const response = await metaAPI.get(
      `/act_${metaConfig.adAccountId}`,
      {
        params: {
          fields:
            "id,name,account_status,currency,timezone_name",
          access_token: metaConfig.accessToken,
        },
      }
    );

    return response.data;

  } catch (error) {

    throw new Error(
      error.response?.data?.error?.message ||
      "Meta connection failed."
    );

  }
};

// ==========================================
// GET CAMPAIGNS
// ==========================================
const getCampaigns = async () => {
  try {

    const response = await metaAPI.get(
      `/act_${metaConfig.adAccountId}/campaigns`,
      {
        params: {

          fields:
            "id,name,status,objective,daily_budget,lifetime_budget",

          access_token:
            metaConfig.accessToken,

        },
      }
    );

    return response.data.data;

  } catch (error) {

    throw new Error(
      error.response?.data?.error?.message ||
      "Failed to fetch campaigns."
    );

  }
};

// ==========================================
// GET INSIGHTS
// ==========================================
const getInsights = async (
  datePreset = "last_30d"
) => {

  try {

    const response = await metaAPI.get(
      `/act_${metaConfig.adAccountId}/insights`,
      {
        params: {

          access_token:
            metaConfig.accessToken,

          level: "campaign",

          date_preset:
            datePreset,

          fields: [
            "campaign_id",
            "campaign_name",
            "impressions",
            "reach",
            "clicks",
            "spend",
            "cpc",
            "ctr",
          ].join(","),

        },
      }
    );

    return response.data.data;

  } catch (error) {

    throw new Error(
      error.response?.data?.error?.message ||
      "Failed to fetch insights."
    );

  }
};

// ==========================================
// EXPORTS
// ==========================================
module.exports = {

  testConnection,

  getCampaigns,

  getInsights,

};