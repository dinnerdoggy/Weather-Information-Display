import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function WeatherCard({ weatherObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{weatherObj.location.name}</Card.Title>
        <Card.Text>
          {weatherObj.current.temp_f}
          {weatherObj.current.humidity}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

WeatherCard.propTypes = {
  weatherObj: PropTypes.shape({
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
