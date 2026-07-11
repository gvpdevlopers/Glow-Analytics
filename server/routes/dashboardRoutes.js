const express = require("express");

const {
  // MongoDB Dashboard
  getCampaigns,
  getStats,

  // Meta API
  testMeta,
  getMetaCampaignsController,
  getMetaInsights,

} = require("../controllers/dashboardController");

const protect = require(
  "../middleware/authMiddleware"
);

const router = express.Router();



// =========================================
// MONGODB DASHBOARD
// =========================================

// Dashboard Stats
router.get(
  "/stats",
  protect,
  getStats
);

// Dashboard Campaigns
router.get(
  "/campaigns",
  protect,
  getCampaigns
);



// =========================================
// META API
// =========================================

// Test Meta Connection
router.get(
  "/test-meta",
  protect,
  testMeta
);

// Fetch Meta Campaigns
router.get(
  "/meta-campaigns",
  protect,
  getMetaCampaignsController
);

// Fetch Meta Insights
router.get(
  "/meta-insights",
  protect,
  getMetaInsights
);



module.exports = router;