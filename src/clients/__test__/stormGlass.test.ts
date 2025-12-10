import { StormGlass } from '../stormGlass';
import axios from 'axios';
import sttormGlassWeather3HoursFixture from '@test/fixtures/stormglass_weather_3_hours.json';

jest.mock('axios');

describe('StormGlass Client', () => {
  it('should return normalized forecast data from the StormGlass service', async () => {
    const lat = 58.7984;
    const lng = 17.8081; 
    
    axios.get = jest.fn().mockResolvedValue(sttormGlassWeather3HoursFixture);

    const stormGlass = new StormGlass();
    const response = await stormGlass.fetchPoints(lat, lng);

    expect(response).toEqual({});
  });
});