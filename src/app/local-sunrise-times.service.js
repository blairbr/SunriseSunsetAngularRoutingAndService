"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalSunriseTimesService = void 0;
var core_1 = require("@angular/core");
var LocalSunriseTimesService = /** @class */ (function () {
    function LocalSunriseTimesService(http) {
        this.http = http;
        //create a timeResponseObjectHere and an interface for it above.
        this.urlString = 'https://api.sunrise-sunset.org/json?lat=42.33143&lng=-83.04575';
    }
    LocalSunriseTimesService.prototype.getSunriseSunsetTimes = function () {
        return this.http.get(this.urlString).subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log(error); });
    };
    LocalSunriseTimesService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        })
    ], LocalSunriseTimesService);
    return LocalSunriseTimesService;
}());
exports.LocalSunriseTimesService = LocalSunriseTimesService;
