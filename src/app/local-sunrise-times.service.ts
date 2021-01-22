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
  urlString: string =
    'https://api.sunrise-sunset.org/json?lat=42.33143&lng=-83.04575';
  public timesResponseObject: SunriseSunsetTimes;

  constructor(private http: HttpClient) {}

  getSunriseSunsetTimes() {
    return this.http.get(this.urlString).subscribe(
      (data: any) => {
        this.timesResponseObject = {
          sunrise: data.results.sunrise,
          sunset: data.results.sunset,
          daylength: data.results.daylength,
        };
      },
      (error) => console.log(error)
    );
  }
}
