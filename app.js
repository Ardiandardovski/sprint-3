const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for testing purposes
app.use(cors());

// API Endpoint: Roll a Dice
app.get('/roll', (req, res) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1; // Simulating a 6-sided dice
    res.json({ roll: diceRoll });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
