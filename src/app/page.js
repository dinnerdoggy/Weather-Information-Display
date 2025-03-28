'use client';

import { useEffect, useState } from 'react';
import getWeather from '../api/weatherData';
import WeatherCard from '../components/weatherCard';

function Home() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    getWeather().then((data) => {
      setWeather(data);
    });
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
      <WeatherCard param={weather} />
    </div>
  );
}

export default Home;
