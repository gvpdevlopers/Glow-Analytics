const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// ==========================================
// LOAD ENV VARIABLES
// ==========================================
dotenv.config();


const connectDB = require("./config/db");

const {
  validateMetaConfig,
} = require("./config/metaConfig");




// ==========================================
// VALIDATE META CONFIG
// ==========================================
validateMetaConfig();


// ==========================================
// CONNECT DATABASE
// ==========================================
connectDB();


// ==========================================
// INITIALIZE EXPRESS
// ==========================================
const app = express();


// ==========================================
// MIDDLEWARE
// ==========================================
app.use(cors());

app.use(express.json());


// ==========================================
// ROUTES
// ==========================================
app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
  "/api/users",
  require("./routes/userRoutes")
);

app.use(
  "/api/dashboard",
  require("./routes/dashboardRoutes")
);


// ==========================================
// HEALTH CHECK
// ==========================================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "GlowAnalytics API is running 🚀",
  });
});


// ==========================================
// START SERVER
// ==========================================
const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT}`
  );
});