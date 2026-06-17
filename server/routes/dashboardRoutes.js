const express = require("express");

const {
  getCampaigns,
  getStats,
} = require(
  "../controllers/dashboardController"
);

const protect = require(
  "../middleware/authMiddleware"
);

const router =
  express.Router();



// STATS
router.get(
  "/stats",
  protect,
  getStats
);



// CAMPAIGNS
router.get(
  "/campaigns",
  protect,
  getCampaigns
);

module.exports = router;