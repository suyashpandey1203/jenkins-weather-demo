function getWeatherReport(city) {
  const weatherData = {
    Delhi: { temp: 40, condition: 'Sunny' },
    Mumbai: { temp: 32, condition: 'Humid' },
    Bangalore: { temp: 25, condition: 'Cloudy' },
  };

  if (!weatherData[city]) {
    throw new Error("City not found");
  }

  const { temp, condition } = weatherData[city];
  return `Weather in ${city}: ${condition}, ${temp}°C`;
}

module.exports = getWeatherReport;