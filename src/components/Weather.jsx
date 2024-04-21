import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Swal from "sweetalert2"; 
import SearchBar from './SearchBar'; 
import WeatherCard from './WeatherCard'; 
import Forecast from './Forecast'; 

const API_KEY = 'b0fb4fb0a8f44532b1a201548241804';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searched, setSearched] = useState(false); 

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!searched) return; 

      try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${searchQuery}`);
        console.log(response,"data of weather ");
        setWeatherData(response.data);
      } catch (error) {  // Error message if you search for a location that is not available 
        Swal.fire({
          title: 'Error!',
          text: 'Location not found. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#4299e1' 
        });
      }
    };

    fetchWeatherData();
  }, [searchQuery, searched]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSearched(true); 
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
