import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  protected housingLocationList: HousingLocation[] = [
    {
      id: 9999,
      name: 'Test Home',
      city: 'Test city',
      state: 'ST',
      photo: `assets/logo.svg`,
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },
    {
      id: 9998,
      name: '2 Home',
      city: '2 city',
      state: 'ST',
      photo: `assets/logo.svg`,
      availableUnits: 99,
      wifi: true,
      laundry: true,
    }];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }
}
