const express = require("express");

// Connection
const connection = require("./connection");

// User Model
const UserModel = require("./models/user");

// Create Server
const app = express();

// Settings
app.set("port", process.env.PORT || 5000);

// Middlewares
app.use(express.json());

// Routes
app.use("/api/user", require("./routes/user.routes"));

// Start Server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
  console.log(`http://localhost:${app.get("port")}`);
});
