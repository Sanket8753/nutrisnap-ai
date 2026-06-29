const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
// Using port 5001 explicitly to clear the macOS AirPlay bug
const PORT = 5001; 

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get('/health', (req, res) => {
    res.status(200).json({ status: "ok" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
}).on('error', (err) => {
    console.error("❌ Server failed to start due to an error:", err.message);
});