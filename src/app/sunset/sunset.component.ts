import { LocalSunriseTimesService } from './../local-sunrise-times.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sunset',
  templateUrl: './sunset.component.html',
  styleUrls: ['./sunset.component.css'],
  providers: [LocalSunriseTimesService],
})
export class SunsetComponent implements OnInit {
  // @Input() timesResponseObject: any;

  public timesResponseObject : any;

  constructor(public service: LocalSunriseTimesService) {}

  ngOnInit(): void {
    this.service.getSunriseSunsetTimes();
  }
}
