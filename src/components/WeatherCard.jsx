import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faTint, faWind , faArrowAltCircleUp , faArrowUp} from '@fortawesome/free-solid-svg-icons';

const WeatherCard = ({ weatherData }) => {
    const { location, current } = weatherData;
    return (
        <div id='Card_1'
        class="max-w-sm mx-auto bg-blue-100 rounded-md overflow-hidden shadow-md">
            <div className="p-6">
                <h2 className="text-xl font-bold">Current Weather in {location.name}</h2>
                <p className="text-lg mt-4"><FontAwesomeIcon icon={faThermometerHalf} className="mr-2" /> Temperature: {current.temp_c}°C</p>
                <p className="text-lg mt-2"><FontAwesomeIcon icon={faTint} className="mr-2" /> Humidity: {current.humidity}%</p>
                <p className="text-lg mt-2"><FontAwesomeIcon icon={faWind} className="mr-2" /> Wind Speed: {current.wind_kph} km/h</p>
                <p className="text-lg mt-2"><FontAwesomeIcon icon={faArrowAltCircleUp} className="mr-2" /> Pressure: {current.pressure_mb} millibars</p>
                <p className="text-lg mt-2"><FontAwesomeIcon icon={faArrowUp} className="mr-2" /> Wind Degree: {current.wind_degree} °</p>

                
            </div>
        </div>
    );
};

export default WeatherCard;
