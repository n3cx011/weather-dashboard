const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public')); 

const API_KEY = '618bfef79450e8667416f39850b8fa21';

async function getWeatherData(city) {
    try {
        const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

        const [currentRes, forecastRes] = await Promise.all([
            fetch(currentUrl),
            fetch(forecastUrl)
        ]);

        if (!currentRes.ok || !forecastRes.ok) {
            throw new Error("City not found");
        }

        const currentData = await currentRes.json();
        const forecastData = await forecastRes.json();

        displayWeather(currentData, forecastData);
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to fetch weather data. Please check the city name.");
    }
}

function displayWeather(current, forecast) {
    console.log("Current Weather:", current);
    console.log("5-Day Forecast:", forecast);
}