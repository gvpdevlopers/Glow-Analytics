// ==========================================
// META ADS CONFIGURATION
// ==========================================

const metaConfig = {
  appId: process.env.META_APP_ID,

  appSecret: process.env.META_APP_SECRET,

  accessToken: process.env.META_ACCESS_TOKEN,

  adAccountId: process.env.META_AD_ACCOUNT_ID,

  graphBaseUrl:
    process.env.META_GRAPH_BASE_URL ||
    "https://graph.facebook.com/v22.0",
};



// ==========================================
// VALIDATE CONFIG
// ==========================================
const validateMetaConfig = () => {
  const required = [
    "META_APP_ID",
    "META_APP_SECRET",
    "META_ACCESS_TOKEN",
    "META_AD_ACCOUNT_ID",
  ];

  const missing = required.filter(
    (key) => !process.env[key]
  );

  if (missing.length > 0) {
    console.warn(
  `⚠️ Missing Meta configuration: ${missing.join(", ")}`
);
  }
};



// ==========================================
// EXPORTS
// ==========================================
module.exports = {
  metaConfig,
  validateMetaConfig,
};