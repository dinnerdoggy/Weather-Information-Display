import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function WeatherCard({ param }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        {param.location && param.current ? (
          <>
            <Card.Title>{param.location.name}</Card.Title>
            <Card.Text>
              Temp: {param.current.temp_f}°F
              <br />
              Humidity: {param.current.humidity}%
            </Card.Text>
          </>
        ) : (
          <Card.Text>Loading weather...</Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

WeatherCard.propTypes = {
  param: PropTypes.shape({
    location: PropTypes.shape({
      name: PropTypes.string,
    }),
    current: PropTypes.shape({
      temp_f: PropTypes.number,
      humidity: PropTypes.number,
    }),
  }),
};

export default WeatherCard;
