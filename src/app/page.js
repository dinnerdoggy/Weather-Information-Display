'use client';

import { useEffect, useState } from 'react';
import WeatherCard from '../components/weatherCard';
import getWeather from '../api/weatherData';

function Home() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    getWeather().then(setWeather);
  }, []);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello! </h1>
      <WeatherCard key={weather.current.last_updated_epoch} weatherObj={weather} onUpdate={getWeather().then(setWeather)} />
    </div>
  );
}

export default Home;
