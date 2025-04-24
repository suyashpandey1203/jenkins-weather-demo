const getWeatherReport = require('./weather');

test('returns weather for Delhi', () => {
  expect(getWeatherReport('Delhi')).toBe('Weather in Delhi: Sunny, 40°C');
});

test('returns weather for Mumbai', () => {
  expect(getWeatherReport('Mumbai')).toBe('Weather in Mumbai: Humid, 32°C');
});

test('throws error for unknown city', () => {
  expect(() => getWeatherReport('Tokyo')).toThrow('City not found');
});