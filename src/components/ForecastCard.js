'use client';

import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import getWeather from '../api/weatherData';

export default function ForecastCard() {
  const [currentLocationName, setCurrentLocationName] = useState(null);
  const [currentForecastInfo, setCurrentForecastInfo] = useState(null);

  const handleLocation = (data) => {
    if (!data || data.length < 2 || !data[0] || !data[1]) {
      console.warn('Invalid data structure:', data);
      return;
      // Guard clause for invalid data. Since getWeather is returning an array of the location and the weather data we need to check that the data is in the expected form.
    }
    const location = data[0]; // First element is the location.
    const current = data[1]; // Second element is the weather data.

    setCurrentLocationName(location.name);
    setCurrentForecastInfo(current);
  };

  useEffect(() => {
    getWeather()
      .then((data) => {
        handleLocation(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        // If there is an error fetching the weather data, this message will be displayed in the console.
      });
  }, []);

  return (
    <div style={{ width: '18rem', marginTop: '180px', scale: '150%' }}>
      {currentForecastInfo ? (
        <div>
          <Card style={{ width: '18rem', margin: '10px', background: 'slateblue' }}>
            <Card.Body>
              {/* Display Location Name */}
              <Card.Title>
                <div style={{ background: '#ffffff', fontSize: '50px' }}>{currentLocationName}</div>
              </Card.Title>

              {/* Display Weather Details */}
              <div style={{ fontSize: '40px', background: '#ffffff' }}>{currentForecastInfo.temp_f}°F</div>

              {/* Display Humidity */}
              {currentForecastInfo && <div style={{ background: '#ffffff' }}>Humidity: {currentForecastInfo.humidity}%</div>}
            </Card.Body>
          </Card>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}
