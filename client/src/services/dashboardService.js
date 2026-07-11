import API from "./api";


// =========================================
// DASHBOARD
// =========================================

// Dashboard Stats
export const getStats = async () => {
  const { data } = await API.get("/dashboard/stats");
  return data;
};


// Dashboard Campaigns
export const getCampaigns = async () => {
  const { data } = await API.get("/dashboard/campaigns");
  return data;
};


// =========================================
// META UTILITIES (Developer Only)
// =========================================

// Test Meta Connection
export const testMetaConnection = async () => {
  const { data } = await API.get("/dashboard/test-meta");
  return data;
};