import { LocalSunriseTimesService } from './../local-sunrise-times.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sunrise',
  templateUrl: './sunrise.component.html',
  styleUrls: ['./sunrise.component.css'],
  providers: [ LocalSunriseTimesService ]
})
export class SunriseComponent implements OnInit {
  @Input() timesResponseObject: any;

  constructor(public service : LocalSunriseTimesService) { }

  ngOnInit(): void {
    this.service.getSunriseSunsetTimes();
  }

}
