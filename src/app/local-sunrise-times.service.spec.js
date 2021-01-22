"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var local_sunrise_times_service_1 = require("./local-sunrise-times.service");
describe('LocalSunriseTimesService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(local_sunrise_times_service_1.LocalSunriseTimesService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
