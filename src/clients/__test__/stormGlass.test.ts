import { StormGlass } from '../stormGlass';

describe('StormGlass Client', () => {
  it('should return normalized forecast data from the StormGlass service', async () => {
    const lat = 58.7984;
    const lng = 17.8081; 
    
    const stormGlass = new StormGlass();
    const response = await stormGlass.fetchPoints(lat, lng);

    expect(response).toEqual({});
  });
});