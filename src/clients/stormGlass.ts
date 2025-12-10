import axios, { AxiosStatic } from "axios";

export class StormGlass {
  readonly stormGlassAPIParams = 'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed';
  readonly stormGlassAPISource = 'noaaa';

  constructor(protected request: AxiosStatic = axios) {}
  
  public async fetchPoints(lat: number, lng: number): Promise<{}> {
    const response = await this.request.get(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${this.stormGlassAPIParams}&source=${this.stormGlassAPISource}}`
    );
    return Promise.resolve({});
  }
}