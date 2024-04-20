import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import Swal from "sweetalert2"; // Import Swal for displaying alerts
import SearchBar from './SearchBar'; // Assuming SearchBar is in the same directory as Weather.js
import WeatherCard from './WeatherCard'; // Assuming WeatherCard is in the same directory as Weather.js
import Forecast from './Forecast'; // Assuming Forecast is in the same directory as Weather.js

const API_KEY = 'b0fb4fb0a8f44532b1a201548241804';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searched, setSearched] = useState(false); // Add state to track if search has been performed

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!searched) return; // Don't fetch data if search hasn't been performed

      try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${searchQuery}`);
        console.log(response);
        setWeatherData(response.data);
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'Location not found. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#4299e1' // Blue color
        });
      }
    };

    fetchWeatherData();
  }, [searchQuery, searched]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSearched(true); // Set searched to true when search is performed
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {weatherData && (
        <div>
          <WeatherCard weatherData={weatherData} />
          <Forecast location={weatherData.location} />
        </div>
      )}
    </div>
  );
};

export default Weather;
