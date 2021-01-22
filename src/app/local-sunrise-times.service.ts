import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface SunriseSunsetTimes {
  sunrise: string;
  sunset: string;
  daylength: string;
}

@Injectable({
  providedIn: 'root',
})
export class LocalSunriseTimesService {
  //create a timeResponseObjectHere and an interface for it above.


  urlString: string =
    'https://api.sunrise-sunset.org/json?lat=42.33143&lng=-83.04575';

  constructor(private http: HttpClient) {}

  public timesResponseObject : SunriseSunsetTimes;

  getSunriseSunsetTimes() {
    return this.http.get(this.urlString).subscribe(
      (data: any) => {
        const timesResponseObject: SunriseSunsetTimes = {
          sunrise: data.results.sunrise,
          sunset: data.results.sunset,
          daylength: data.results.daylength,
        };
      },
      (error) => console.log(error)
    );
  }
}
