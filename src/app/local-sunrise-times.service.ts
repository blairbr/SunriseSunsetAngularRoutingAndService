import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalSunriseTimesService {
  //create a timeResponseObjectHere and an interface for it above.

  urlString: string =
    'https://api.sunrise-sunset.org/json?lat=42.33143&lng=-83.04575';

  constructor(private http: HttpClient) {}

  getSunriseSunsetTimes() {
    return this.http.get(this.urlString).subscribe(
      (data: any) => {
          console.log("sunrise", data.results.sunrise);
          console.log("sunrisetype", typeof (data.results.sunrise));
          console.log("sunset", data.results.sunset);
      },
      (error) => console.log(error)
    );
  }
}
