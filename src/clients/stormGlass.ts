import { AxiosStatic } from "axios";

export class StormGlass {
  constructor(protected request: AxiosStatic) {}
  
  public async fetchPoints(lat: number, lng: number): Promise<{}> {
    // Implementation to fetch data from StormGlass API would go here
    return Promise.resolve({});
  }
}