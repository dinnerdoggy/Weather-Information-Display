const endpoint = 'http://api.weatherapi.com/v1/current.json?key=e49acca7761f419295705204252803&q=nashville&aqi=no';

const getWeather = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

export default getWeather;
