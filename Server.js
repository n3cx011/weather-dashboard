const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('src')); 

const API_KEY = '618bfef79450e8667416f39850b8fa21';

app.get('/api/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) return res.status(400).json({ error: "City is required" });

    try {
        const currentRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
        const forecastRes = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`);

        res.json({
            current: currentRes.data,
            forecast: forecastRes.data
        });
    } catch (error) {
        res.status(404).json({ error: "City not found or API error" });
    }
});

app.get('/api/suggestions', async (req, res) => {
    const query = req.query.q;
    if (!query || query.length < 3) return res.json([]);
    try {
        // This calls the Geocoding API to find city names
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch suggestions" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});