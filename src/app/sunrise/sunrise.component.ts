import { LocalSunriseTimesService } from './../local-sunrise-times.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sunrise',
  templateUrl: './sunrise.component.html',
  styleUrls: ['./sunrise.component.css']
})
export class SunriseComponent implements OnInit {
  
  constructor(public service : LocalSunriseTimesService) { }

  ngOnInit(): void {
    this.service.getSunriseSunsetTimes();
  }

}
