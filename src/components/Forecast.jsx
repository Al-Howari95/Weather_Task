import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faSun , faWind} from '@fortawesome/free-solid-svg-icons';

const API_KEY = 'b0fb4fb0a8f44532b1a201548241804'; // Replace with your actual API key

const Forecast = ({ location }) => {
    const [forecastData, setForecastData] = useState(null);
    const [showForecast, setShowForecast] = useState(false);

    useEffect(() => {
        const fetchForecastData = async () => {
            try {
                const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location.name}&days=3`);
                setForecastData(response.data);
            } catch (error) {
                console.error('Error fetching forecast data:', error);
            }
        };

        fetchForecastData();
    }, [location]);

    const toggleForecast = () => {
        setShowForecast(!showForecast);
    };

    return (
        <div className="mt-4 flex flex-col items-center">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-8 mt-12">Three Day Weather Forecast For {location.name}</h2>
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-8" onClick={toggleForecast}>
                {showForecast ? "Hide Forecast" : "Show Forecast"}
            </button>
            {showForecast && (
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    {forecastData ? (
                        forecastData.forecast.forecastday.map((day, index) => (
                            <div key={day.date} id='Card_1'
                             className="max-w-md mx-auto bg-blue-100 rounded-md overflow-hidden shadow-md mb-12 p-10">

                                <h1 className="text-xl font-semibold focus:outline-none mb-2 flex items-center justify-center mb-6">
                                    {day.date}
                                </h1>

                                <div className="space-y-2">
                                    <p className="text-lg">Weather: <FontAwesomeIcon icon={faSun} /> {day.day.condition.text}</p>
                                    <p className="text-lg">Max Temp: <FontAwesomeIcon icon={faThermometerHalf} /> {day.day.maxtemp_c}°C</p>
                                    <p className="text-lg">Min Temp: <FontAwesomeIcon icon={faThermometerHalf} /> {day.day.mintemp_c}°C</p>
                                    <p className="text-lg">Avg Temp: <FontAwesomeIcon icon={faThermometerHalf} /> {day.day.avgtemp_c}°C</p>
                                    <p className="text-lg"> Max wind: <FontAwesomeIcon icon={faWind} /> {day.day.maxwind_mph}mph</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading forecast data...</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Forecast;
