require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const connection = require("./server/db");
const userRoutes = require('./server/routes/users');
const authRoutes = require('./server/routes/auth');

// database connection
connection()

// middlewares
app.use(express.json())
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.user("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Listening on port ${port}...'))
