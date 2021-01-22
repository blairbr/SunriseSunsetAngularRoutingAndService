import { LocalSunriseTimesService } from './../local-sunrise-times.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sunset',
  templateUrl: './sunset.component.html',
  styleUrls: ['./sunset.component.css']


})
export class SunsetComponent implements OnInit {
  @Input() timesResponseObject: any;

  constructor(public service : LocalSunriseTimesService) { }

  ngOnInit(): void {
    this.service.getSunriseSunsetTimes();
  }

}
