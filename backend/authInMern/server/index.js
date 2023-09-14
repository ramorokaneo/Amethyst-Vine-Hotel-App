require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/client/users");
const authRoutes = require("./routes/client/auth");
const adminRoutes = require("./routes/admin/admins");
const adminauthRoutes = require("./routes/admin/adminauth");
const roomsRoutes = require("./routes/rooms");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admins", adminRoutes );
app.use("/api/adminauth", adminauthRoutes);
app.use("/api/rooms", roomsRoutes);






const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
